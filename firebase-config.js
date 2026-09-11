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
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

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

let app, db, auth;

try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);
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

/**
 * 9. Real Website Analytics Event Tracker
 */
export async function trackPageViewInFirestore(pageData = {}) {
    if (!db) return false;
    try {
        let sessionId = sessionStorage.getItem('elavatex_session_id');
        if (!sessionId) {
            sessionId = 'sess_' + Math.random().toString(36).substring(2, 11) + '_' + Date.now();
            sessionStorage.setItem('elavatex_session_id', sessionId);
        }

        const width = window.innerWidth;
        const deviceType = width < 768 ? 'Mobile' : (width < 1024 ? 'Tablet' : 'Desktop');

        const ua = navigator.userAgent;
        let browser = 'Chrome';
        if (ua.includes('Firefox')) browser = 'Firefox';
        else if (ua.includes('Safari') && !ua.includes('Chrome')) browser = 'Safari';
        else if (ua.includes('Edg')) browser = 'Edge';

        const docRef = await addDoc(collection(db, "analytics_views"), {
            path: pageData.path || window.location.pathname || '/',
            title: pageData.title || document.title || 'ElavateX Website',
            referrer: pageData.referrer || document.referrer || 'direct',
            sessionId: sessionId,
            deviceType: deviceType,
            browser: browser,
            timestamp: Date.now(),
            createdAt: serverTimestamp()
        });
        return docRef.id;
    } catch (e) {
        console.warn("Analytics tracker warning:", e);
        return false;
    }
}

export { 
    app, 
    db, 
    auth, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    collection, 
    addDoc, 
    getDocs, 
    updateDoc, 
    deleteDoc, 
    doc 
};

