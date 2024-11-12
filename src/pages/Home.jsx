import { useContext, useEffect, useState } from "react";
import { DataContext } from "../utils/context";
import { getCollectionByName } from "../utils/firebase";
import KeenSlider from "../components/Home/Keen";
import LastSection from "../components/Home/LastSec";
import SwiperSlider from "../components/Home/Swiper";
import TopSelling from "../components/Home/TopSelling";
import MenuNav from "../components/Home/Nav";
import Splash from "../components/Splash";

export default function HomePage() {
    const { data, setData } = useContext(DataContext);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                if (!data.offers || !data.categories || !data.products || !data.topSellings) {
                    const offers = await getCollectionByName('offers');
                    const categories = await getCollectionByName('categories');
                    const products = await getCollectionByName('products');
                    const topSellings = await getCollectionByName('topSellings');
                    setData({ offers, categories, products, topSellings });
                }
            }
            catch (e) { console.log(e) }
            finally { setLoading(false) }
        })()
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