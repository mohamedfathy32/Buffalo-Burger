/* eslint-disable react-hooks/rules-of-hooks */
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";

export const allProducts = ()=>{


    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const q = query(collection(db, "product"));
                const querySnapshot = await getDocs(q);
                const productsArray = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(productsArray);
            } catch (error) {
                console.error("Error fetching products: ", error);
            } 
        };

        fetchData();
    }, []);

    return products;
}