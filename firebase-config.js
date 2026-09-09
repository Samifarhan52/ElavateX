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
        const docRef = await addDoc(collection(db, "leads"), {
            ...leadData,
            createdAt: serverTimestamp()
        });
        console.log("✅ Lead saved to Cloud Firestore with ID:", docRef.id);
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
export function subscribeToCollection(collName, callback) {
    if (!db) return () => {};
    try {
        const q = query(collection(db, collName), orderBy("createdAt", "desc"));
        return onSnapshot(q, (snapshot) => {
            const records = [];
            snapshot.forEach((d) => {
                records.push({ id: d.id, ...d.data() });
            });
            callback(records);
        }, (error) => {
            console.warn(`Firestore snapshot error for ${collName}:`, error);
        });
    } catch (err) {
        console.warn(`Firestore listener setup fallback for ${collName}:`, err);
        return () => {};
    }
}

/**
 * 7. Real-Time Sync Listener for Live Reviews
 */
export function subscribeToReviews(callback) {
    return subscribeToCollection("reviews", callback);
}

/**
 * 8. Log Admin Audit Activity to Firestore
 */
export async function saveAuditLogToFirestore(logData) {
    return saveRecordToFirestore("audit_logs", logData);
}

export { db, collection, addDoc, getDocs, updateDoc, deleteDoc, doc };

