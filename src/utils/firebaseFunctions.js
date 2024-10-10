import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function getCollectionByName(collectionName) {
    let collectionArray = [];
    try {
        const collection = collection(db, collectionName);
        const collectionSnapshot = await getDocs(collection)
        collectionArray = collectionSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    } catch (e) { console.log(e.message) }
    return collectionArray;
}
//special
export async function addAllProduct(list) {
    try {
        const productColl = collection(db, "product");
        const querySnapshot = await getDocs(productColl);
        if (querySnapshot.empty) {
            for (const product of list) {
                const docRef = doc(db, 'product', product.title)
                await setDoc(docRef, product);
            }
        } else {
            console.log("Products already exist in the database.");
        }
    } catch (error) {
        console.error("Error adding products: ", error);
    }
};