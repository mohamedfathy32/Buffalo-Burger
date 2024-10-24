import KeenSlider from "../components/Home/Keen";
import LastSection from "../components/Home/LastSec";
import SwiperSlider from "../components/Home/Swiper";
import TopSelling from "../components/Home/TopSelling";
import MenuNav from "../components/Home/Nav";
import Splash from "../components/Splash";
import { addCollection, getCollectionByName } from "../utils/firebase";
import { useContext, useEffect } from "react";
import { ProductsList } from "../utils/context";
import { productList } from "../utils/data";

export default function HomePage() {
    const { setProductsList } = useContext(ProductsList)
    useEffect(() => {
        async function add() {
            await addCollection(productList, 'product')
        }
        add()
        async function get() {
            let res = await getCollectionByName('product')
            setProductsList(res)
            console.log(res)
        }
        get()
    }, []);
    return (
        <>
            <Splash />
            <SwiperSlider />
            <MenuNav />
            <KeenSlider />
            <TopSelling />
            <LastSection />
        </>
    );
}