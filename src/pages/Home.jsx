import KeenSlider from "../components/KeenSlider";
import LastSec from "../components/LastSec";
import MenuNav from "../components/MenuNav";
import Splash from "../components/Splash";
import SwiperSlider from "../components/SwiperSlider";
import TopSelling from "../components/TopSelling";

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