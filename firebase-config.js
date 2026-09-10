/**
 * ElavateX - Live Firebase Cloud Firestore Integration Engine
 * Project Name: ElavateX | Project ID: elavatex-2cc3b
 * Connected for: Live leads, client reviews, and CMS data synchronization
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs, 
    updateDoc,
    deleteDoc, 
    doc, 
    onSnapshot, 
    query, 
    orderBy,
    serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// =========================================================================
// OFFICIAL FIREBASE CONFIGURATION FOR PROJECT: elavatex-2cc3b
// =========================================================================
const firebaseConfig = {
  apiKey: "AIzaSyDEY1wND-k04J8s4FYBfan0K8RBK2sfAEM",
  authDomain: "elavatex-2cc3b.firebaseapp.com",
  projectId: "elavatex-2cc3b",
  storageBucket: "elavatex-2cc3b.firebasestorage.app",
  messagingSenderId: "528561063745",
  appId: "1:528561063745:web:333b2cbf7b3153b83ac3c0",
  measurementId: "G-JMRL6LH7WJ"
};

let app, db;

try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log("🔥 LIVE FIREBASE CONNECTED! Project: elavatex-2cc3b");
} catch (err) {
    console.warn("⚠️ Firebase connection fallback active:", err.message);
}

/**
 * 1. Dispatch New Lead / Consultation Booking to Cloud Firestore
 */
export async function saveLeadToFirestore(leadData) {
    if (!db) return false;
    try {
        const payload = {
            ...leadData,
            status: leadData.status || 'New',
            createdAt: serverTimestamp()
        };
        const docRef = await addDoc(collection(db, "leads"), payload);
        console.log("✅ Lead saved to Cloud Firestore ('leads') with ID:", docRef.id);

        // Also sync to 'contacts' collection so it appears in Consultations tab
        try {
            await addDoc(collection(db, "contacts"), {
                ...payload,
                status: leadData.status || 'Pending'
            });
            console.log("✅ Lead synced to Cloud Firestore ('contacts')");
        } catch (errSync) {
            console.warn("Sync to contacts collection fallback:", errSync);
        }

        return docRef.id;
    } catch (e) {
        console.error("Error saving lead to Firestore:", e);
        return false;
    }
}

/**
 * 2. Dispatch New Client Review / Comment to Cloud Firestore
 */
export async function saveReviewToFirestore(reviewData) {
    if (!db) return false;
    try {
        const docRef = await addDoc(collection(db, "reviews"), {
            ...reviewData,
            status: reviewData.status || 'Approved',
            createdAt: serverTimestamp()
        });
        console.log("✅ Review saved to Cloud Firestore with ID:", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("Error saving review to Firestore:", e);
        return false;
    }
}

/**
 * 3. Generic Save Record to Any Firestore Collection
 */
export async function saveRecordToFirestore(collName, data) {
    if (!db) return false;
    try {
        const docRef = await addDoc(collection(db, collName), {
            ...data,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        });
        console.log(`✅ Record saved to '${collName}' with ID:`, docRef.id);
        return docRef.id;
    } catch (e) {
        console.warn(`Firestore save to ${collName} failed:`, e);
        return false;
    }
}

/**
 * 4. Generic Update Record in Firestore Collection
 */
export async function updateRecordInFirestore(collName, docId, data) {
    if (!db || !docId) return false;
    try {
        const docRef = doc(db, collName, String(docId));
        await updateDoc(docRef, {
            ...data,
            updatedAt: serverTimestamp()
        });
        return true;
    } catch (e) {
        console.warn(`Firestore update in ${collName} failed:`, e);
        return false;
    }
}

/**
 * 5. Generic Delete Record from Firestore Collection
 */
export async function deleteRecordFromFirestore(collName, docId) {
    if (!db || !docId) return false;
    try {
        const docRef = doc(db, collName, String(docId));
        await deleteDoc(docRef);
        return true;
    } catch (e) {
        console.warn(`Firestore delete from ${collName} failed:`, e);
        return false;
    }
}

/**
 * 6. Real-Time Sync Listener for Any Collection
 */
export function subscribeToCollection(collName, callback, errorCallback) {
    if (!db) {
        if (errorCallback) errorCallback(new Error("Firestore DB not initialized"));
        return () => {};
    }
    try {
        const collRef = collection(db, collName);
        return onSnapshot(collRef, (snapshot) => {
            const records = [];
            snapshot.forEach((d) => {
                const data = d.data();
                let createdAtFormatted = data.createdAt;
                if (data.createdAt && typeof data.createdAt.toDate === 'function') {
                    createdAtFormatted = data.createdAt.toDate().toLocaleString();
                } else if (data.createdAt && data.createdAt.seconds) {
                    createdAtFormatted = new Date(data.createdAt.seconds * 1000).toLocaleString();
                }
                records.push({ 
                    id: d.id, 
                    ...data,
                    formattedDate: createdAtFormatted || data.date || 'Recently' 
                });
            });

            // Memory sort descending by timestamp/createdAt/id
            records.sort((a, b) => {
                const getMillis = (item) => {
                    if (item.createdAt && typeof item.createdAt.toDate === 'function') return item.createdAt.toDate().getTime();
                    if (item.createdAt && item.createdAt.seconds) return item.createdAt.seconds * 1000;
                    if (typeof item.createdAt === 'number') return item.createdAt;
                    if (typeof item.timestamp === 'number') return item.timestamp;
                    if (typeof item.id === 'number') return item.id;
                    if (typeof item.id === 'string' && !isNaN(Number(item.id))) return Number(item.id);
                    return 0;
                };
                return getMillis(b) - getMillis(a);
            });

            callback(records);
        }, (error) => {
            console.warn(`Firestore snapshot error for ${collName}:`, error);
            if (errorCallback) errorCallback(error);
        });
    } catch (err) {
        console.warn(`Firestore listener setup fallback for ${collName}:`, err);
        if (errorCallback) errorCallback(err);
        return () => {};
    }
}

/**
 * 7. Real-Time Sync Listener for Live Reviews
 */
export function subscribeToReviews(callback, errorCallback) {
    return subscribeToCollection("reviews", callback, errorCallback);
}

/**
 * 8. Log Admin Audit Activity to Firestore
 */
export async function saveAuditLogToFirestore(logData) {
    return saveRecordToFirestore("audit_logs", logData);
}

// Bind to window for global access across site scripts
if (typeof window !== 'undefined') {
    window.saveLeadToFirestore = saveLeadToFirestore;
    window.saveReviewToFirestore = saveReviewToFirestore;
    window.saveRecordToFirestore = saveRecordToFirestore;
    window.updateRecordInFirestore = updateRecordInFirestore;
    window.deleteRecordFromFirestore = deleteRecordFromFirestore;
    window.subscribeToCollection = subscribeToCollection;
    window.subscribeToReviews = subscribeToReviews;
    window.saveAuditLogToFirestore = saveAuditLogToFirestore;
}

export { db, collection, addDoc, getDocs, updateDoc, deleteDoc, doc };

