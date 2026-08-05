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
        return true;
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
        return true;
    } catch (e) {
        console.error("Error saving review to Firestore:", e);
        return false;
    }
}

/**
 * 3. Real-Time Sync Listener for Live Reviews
 */
export function subscribeToReviews(callback) {
    if (!db) return () => {};
    try {
        const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
        return onSnapshot(q, (snapshot) => {
            const reviews = [];
            snapshot.forEach((doc) => {
                reviews.push({ id: doc.id, ...doc.data() });
            });
            callback(reviews);
        }, (error) => {
            console.warn("Firestore snapshot error (check rules if restricted):", error);
        });
    } catch (err) {
        console.warn("Firestore query listening fallback:", err);
        return () => {};
    }
}

export { db, collection, addDoc, getDocs, deleteDoc, doc };
