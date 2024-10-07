import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function getAllProducts() {
    let productsArray = [];
    try {
        const productColl = collection(db, "product");
        const productsSnapshot = await getDocs(productColl);
        productsArray = productsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error("Error fetching products: ", error);
    }
    return productsArray;
}
//special
export async function addAllProduct(list) {
    try {
        const productColl = collection(db, "product");
        const querySnapshot = await getDocs(productColl);
        if (querySnapshot.empty) {
            for (const product of list) {
                await addDoc(productColl, product);
            }
        } else {
            console.log("Products already exist in the database.");
        }
    } catch (error) {
        console.error("Error adding products: ", error);
    }
};