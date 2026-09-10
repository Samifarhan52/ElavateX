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

// Local Broadcast & Storage Fallback Engine
const LocalDB = {
    get: function(collName) {
        try {
            return JSON.parse(localStorage.getItem('elavatex_coll_' + collName) || '[]');
        } catch(e) { return []; }
    },
    save: function(collName, item) {
        try {
            const list = LocalDB.get(collName);
            list.unshift(item);
            localStorage.setItem('elavatex_coll_' + collName, JSON.stringify(list));
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('elavatex_db_sync', { detail: { collection: collName, data: list } }));
            }
        } catch(e) {}
    },
    update: function(collName, id, updatedFields) {
        try {
            let list = LocalDB.get(collName);
            list = list.map(item => String(item.id) === String(id) ? { ...item, ...updatedFields } : item);
            localStorage.setItem('elavatex_coll_' + collName, JSON.stringify(list));
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('elavatex_db_sync', { detail: { collection: collName, data: list } }));
            }
        } catch(e) {}
    },
    delete: function(collName, id) {
        try {
            let list = LocalDB.get(collName);
            list = list.filter(item => String(item.id) !== String(id));
            localStorage.setItem('elavatex_coll_' + collName, JSON.stringify(list));
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('elavatex_db_sync', { detail: { collection: collName, data: list } }));
            }
        } catch(e) {}
    }
};

/**
 * 1. Dispatch New Lead / Consultation Booking to Cloud Firestore
 */
export async function saveLeadToFirestore(leadData) {
    const payload = {
        id: leadData.id || Date.now(),
        ...leadData,
        status: leadData.status || 'New',
        formattedDate: leadData.formattedDate || new Date().toLocaleString(),
        timestamp: Date.now()
    };

    LocalDB.save('leads', payload);
    LocalDB.save('contacts', payload);

    if (!db) return payload.id;
    try {
        const docRef = await addDoc(collection(db, "leads"), { ...payload, createdAt: serverTimestamp() });
        console.log("✅ Lead saved to Cloud Firestore ('leads') with ID:", docRef.id);
        try {
            await addDoc(collection(db, "contacts"), { ...payload, status: leadData.status || 'Pending', createdAt: serverTimestamp() });
        } catch(e){}
        return docRef.id;
    } catch (e) {
        console.error("❌ Firestore Permission Error (403 PERMISSION_DENIED). Lead preserved in active local state.", e);
        return payload.id;
    }
}

/**
 * 2. Dispatch New Client Review / Comment to Cloud Firestore
 */
export async function saveReviewToFirestore(reviewData) {
    const payload = {
        id: reviewData.id || Date.now(),
        ...reviewData,
        status: reviewData.status || 'Approved',
        formattedDate: reviewData.formattedDate || new Date().toLocaleString(),
        timestamp: Date.now()
    };

    LocalDB.save('reviews', payload);

    if (!db) return payload.id;
    try {
        const docRef = await addDoc(collection(db, "reviews"), { ...payload, createdAt: serverTimestamp() });
        console.log("✅ Review saved to Cloud Firestore with ID:", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("❌ Firestore Permission Error on Reviews:", e);
        return payload.id;
    }
}

/**
 * 3. Generic Save Record to Any Firestore Collection
 */
export async function saveRecordToFirestore(collName, data) {
    const payload = {
        id: data.id || Date.now(),
        ...data,
        formattedDate: data.formattedDate || new Date().toLocaleString(),
        timestamp: Date.now()
    };

    LocalDB.save(collName, payload);

    if (!db) return payload.id;
    try {
        const docRef = await addDoc(collection(db, collName), { ...payload, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
        console.log(`✅ Record saved to '${collName}' with ID:`, docRef.id);
        return docRef.id;
    } catch (e) {
        console.error(`❌ Firestore Permission Error on ${collName}:`, e);
        return payload.id;
    }
}

/**
 * 4. Generic Update Record in Firestore Collection
 */
export async function updateRecordInFirestore(collName, docId, data) {
    LocalDB.update(collName, docId, data);

    if (!db || !docId) return true;
    try {
        const docRef = doc(db, collName, String(docId));
        await updateDoc(docRef, { ...data, updatedAt: serverTimestamp() });
        return true;
    } catch (e) {
        console.error(`❌ Firestore update failed for ${collName}:`, e);
        return true;
    }
}

/**
 * 5. Generic Delete Record from Firestore Collection
 */
export async function deleteRecordFromFirestore(collName, docId) {
    LocalDB.delete(collName, docId);

    if (!db || !docId) return true;
    try {
        const docRef = doc(db, collName, String(docId));
        await deleteDoc(docRef);
        return true;
    } catch (e) {
        console.error(`❌ Firestore delete failed for ${collName}:`, e);
        return true;
    }
}

/**
 * 6. Real-Time Sync Listener for Any Collection
 */
export function subscribeToCollection(collName, callback, errorCallback) {
    const initialLocal = LocalDB.get(collName);
    if (initialLocal && initialLocal.length) {
        callback(initialLocal);
    }

    if (typeof window !== 'undefined') {
        window.addEventListener('elavatex_db_sync', (e) => {
            if (e.detail && e.detail.collection === collName) {
                callback(e.detail.data);
            }
        });
        window.addEventListener('storage', (e) => {
            if (e.key === 'elavatex_coll_' + collName) {
                callback(LocalDB.get(collName));
            }
        });
    }

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

            records.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

            const combined = [...records];
            initialLocal.forEach(localItem => {
                if (!combined.some(r => String(r.id) === String(localItem.id))) {
                    combined.push(localItem);
                }
            });

            callback(combined);
        }, (error) => {
            console.warn(`⚠️ Firestore snapshot notice for ${collName}:`, error.message);
            callback(LocalDB.get(collName));
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

