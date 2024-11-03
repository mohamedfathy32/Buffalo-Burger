import KeenSlider from "../components/Home/Keen";
import LastSection from "../components/Home/LastSec";
import SwiperSlider from "../components/Home/Swiper";
import TopSelling from "../components/Home/TopSelling";
import MenuNav from "../components/Home/Nav";
import Splash from "../components/Splash";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../utils/context";
import { getCollectionByName } from "../utils/firebase";
export default function HomePage() {
    const { data, setData } = useContext(DataContext);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                if (!data.offers || !data.categories || !data.products || !data.topSellings) {
                    const offers = await getCollectionByName('offers');
                    const categories = await getCollectionByName('categories');
                    const products = await getCollectionByName('products');
                    const topSellings = await getCollectionByName('topSellings');
                    setData({ offers, categories, products, topSellings });
                    setLoading(false);
                }
                else {
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    return (loading ? <Splash /> :
        <>
            <SwiperSlider />
            <MenuNav />
            <KeenSlider />
            <TopSelling />
            <LastSection />
        </>
    );
}
// useEffect(() => {
//     async function addItemsWithCustomID(arrayOfObjects, collectionName) {
//         const collectionRef = collection(db, collectionName);
//         let index = 0;
//         const intervalId = setInterval(async () => {
//             if (index >= arrayOfObjects.length) {
//                 clearInterval(intervalId);
//                 return;
//             }
//             const item = arrayOfObjects[index];
//             const customID = `${index + 10}_${item.title.en}`; // Custom ID format: timestamp_title.en
//             try {
//                 const docRef = doc(collectionRef, customID); // Create document reference with custom ID
//                 await setDoc(docRef, item); // Add the item with the custom ID
//                 console.log(`Added item ${index + 1} with ID ${customID} to ${collectionName} collection`);
//             } catch (error) {
//                 console.error("Error adding document: ", error);
//             }
//             index++;
//         }, 500);
//     }
//     addItemsWithCustomID(comboOptionsList, 'comboOptions')
// }, []);