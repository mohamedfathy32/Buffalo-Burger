import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import DishCard from "./DishCard";

export default function GetProdcut() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const q = query(collection(db, "product"));
            const querySnapshot = await getDocs(q);
            const productsArray = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProducts(productsArray);
        };

        fetchData();
    }, []);




    return <>

        {products.map(product => (
            <DishCard
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
            />
        ))}

    </>
}
