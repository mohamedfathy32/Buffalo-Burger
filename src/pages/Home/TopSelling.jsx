import { useEffect, useState } from "react";
import DishCard from "../../components/DishCard"
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/firebase";
import Splash from "../../components/Splash/Splash";

export default function TopSelling() {
    // const topSelling = [
    //     {
    //         id: 1, title: 'Shiitake Mushroom', price: '280',
    //         description: 'Sautéed mushroom, cheddar cheese, and creamy mayonnaise spread on top of our pure beef burger..',
    //         image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fa76de047b66f2511962b600232c60769.png&w=256&q=75'
    //     },
    //     {
    //         id: 2, title: 'Bacon Mushroom Jack', price: '190',
    //         description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
    //         image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fd845c9309b0d95d8c5d945b6b2552491.png&w=256&q=75'
    //     },
    //     {
    //         id: 3, title: 'Caesar Salad', price: '169',
    //         description: 'Fresh lettuce with pieces of grilled chicken topped with croutons bread and parmesan cheese with..',
    //         image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fb969e186dcb089185c6d63d6774d02d6.png&w=384&q=75'
    //     },
    //     {
    //         id: 4, title: 'Chicken Buster', price: '135',
    //         description: 'Chicken strips with Buffalo sauce and melted cheddar cheese.',
    //         image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2F5f9673352a1f5fafd00e3e2ae90af631.png&w=384&q=75'
    //     },
    //     {
    //         id: 5, title: 'Apple Pie', price: '30',
    //         description: 'Apple & cinnamon pie',
    //         image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Ff5afb2abb2f7e443a2d999d1c13164d2.png&w=256&q=75'
    //     },
    //     {
    //         id: 6, title: 'Chicken Fries', price: '80',
    //         description: '10 Pieces of Chicken Fries served with Ranch Cup',
    //         image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fb666406ac37bf44f8b31849ec0ee48ed.png&w=384&q=75'
    //     },

    // ]



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
                            <DishCard
                                key={product.id}
                                dish={product}
                            />
                        ))}
                    </div>
                )}
            </div>
{/* 
            <div>
                <h1>Chicken</h1>
                <div className="flex justify-center flex-wrap gap-4">

                    {products.map(product => (
                        product.category === 'Chicken' &&
                        <DishCard
                            key={product.id}
                            dish={product}
                        />
                    ))}
                </div>
            </div>


            <div>
                <h1>Burger</h1>
                <div className="flex justify-center flex-wrap gap-4">

                    {products.map(product => (
                        product.category === 'Burger' &&
                        <DishCard
                            key={product.id}
                            dish={product}
                        />
                    ))}
                </div>
            </div> */}
        </>
    )
}
