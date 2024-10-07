import KeenSlider from "../../components/KeenSlider";
import MenuNav from "../../components/MenuNav";
import Splash from "../../components/Splash/Splash";
import LastSec from "./LastSec";
import SwiperSlider from "./SwiperSlider";
import TopSelling from "./TopSelling";

export default function Home() {
    return (
        <>
            <Splash />
            <SwiperSlider />
            <div className="sticky top-28 z-10">
                <MenuNav />
            </div>
            <KeenSlider />
            <TopSelling />
            <LastSec />
        </>
    );
}