/**
 * ElavateX - Firebase Cloud Firestore Integration Engine
 * Project ID: elavatex-2cc3b
 * Official Firebase Console: https://console.firebase.google.com/u/0/project/elavatex-2cc3b
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs, 
    deleteDoc, 
    doc, 
    onSnapshot, 
    query, 
    orderBy,
    serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// =========================================================================
// FIREBASE CONFIGURATION OBJECT FOR PROJECT: elavatex-2cc3b
// Replace apiKey, messagingSenderId, and appId with keys from your console:
// Console -> Project Settings (⚙️) -> General -> Web App (</>)
// =========================================================================
const firebaseConfig = {
    apiKey: "AIzaSyYOUR_ACTUAL_FIREBASE_API_KEY_HERE",
    authDomain: "elavatex-2cc3b.firebaseapp.com",
    projectId: "elavatex-2cc3b",
    storageBucket: "elavatex-2cc3b.firebasestorage.app",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef123456"
};

let app, db;

try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log("🔥 Firebase initialized for ElavateX (Project ID: elavatex-2cc3b)");
} catch (err) {
    console.warn("⚠️ Firebase fallback mode active:", err.message);
}

/**
 * 1. Save New Lead / Consultation Booking to Firestore
 */
export async function saveLeadToFirestore(leadData) {
    if (!db) return false;
    try {
        const docRef = await addDoc(collection(db, "leads"), {
            ...leadData,
            createdAt: serverTimestamp()
        });
        console.log("✅ Lead saved to Cloud Firestore with ID:", docRef.id);
        return true;
    } catch (e) {
        console.error("Error adding lead to Firestore:", e);
        return false;
    }
}

/**
 * 2. Save New Client Review / Comment to Firestore
 */
export async function saveReviewToFirestore(reviewData) {
    if (!db) return false;
    try {
        const docRef = await addDoc(collection(db, "reviews"), {
            ...reviewData,
            createdAt: serverTimestamp()
        });
        console.log("✅ Review saved to Cloud Firestore with ID:", docRef.id);
        return true;
    } catch (e) {
        console.error("Error adding review to Firestore:", e);
        return false;
    }
}

/**
 * 3. Subscribe to Real-Time Reviews from Firestore
 */
export function subscribeToReviews(callback) {
    if (!db) return () => {};
    const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snapshot) => {
        const reviews = [];
        snapshot.forEach((doc) => {
            reviews.push({ id: doc.id, ...doc.data() });
        });
        callback(reviews);
    }, (error) => {
        console.warn("Firestore snapshot listening active with fallback.", error);
    });
}

export { db, collection, addDoc, getDocs, deleteDoc, doc };
