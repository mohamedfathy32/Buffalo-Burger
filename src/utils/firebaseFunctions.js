import { collection, doc, getDocs, writeBatch } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function getCollectionByName(collectionName) {
    let collectionArray = [];
    try {
        const Collection = collection(db, collectionName);
        const collectionSnapshot = await getDocs(Collection)
        collectionArray = collectionSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    } catch (e) { console.log(e.message) }
    return collectionArray;
}

export async function addCollection(collectionArray, collectionName) {
    try {
        const Collection = collection(db, collectionName);
        const querySnapshot = await getDocs(Collection);

        if (querySnapshot.empty) {
            const batch = writeBatch(db);

            collectionArray.forEach((item) => {
                const docRef = doc(db, collectionName, item.title);
                batch.set(docRef, item);
            });

            await batch.commit();
        } else {
            console.log("Products already exist in this collection.");
        }
    } catch (e) { console.error(e.message); }
};