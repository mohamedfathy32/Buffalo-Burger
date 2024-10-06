import { collection, getDocs, query } from "firebase/firestore";
import { db } from "./firebase";
export const allProducts = () => {
    let products = [];
    const fetchData = async () => {
        try {
            const q = query(collection(db, "product"));
            const querySnapshot = await getDocs(q);
            const productsArray = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            products = productsArray;
        } catch (error) {
            console.error("Error fetching products: ", error);
        }
    };
    fetchData();
    return products;
}