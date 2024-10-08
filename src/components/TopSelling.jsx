import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import Splash from "./Splash";
import ProductCard from "./ProductCard";
import { db } from "../utils/firebaseConfig";

export default function TopSelling() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const q = query(collection(db, "product"), where("top-selling", "==", true));
                const querySnapshot = await getDocs(q);
                const productsArray = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(productsArray);
            } catch (error) {
                console.error("Error fetching products: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {console.log(products)}
            <div className="px-2 my-8">
                <div className="px-8">
                    <h2 className="text-orange-600 text-2xl text-start font-bold uppercase">Top Selling</h2>
                </div>
                {loading ? <Splash /> : (

                    <div className="flex justify-center flex-wrap gap-4">

                        {products.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                )}

            </div>
        </>
    )
}
