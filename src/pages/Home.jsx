import KeenSlider from "../components/Home/KeenSlider";
import LastSec from "../components/Home/LastSec";
import SwiperSlider from "../components/Home/SwiperSlider";
import TopSelling from "../components/Home/TopSelling";
import MenuNav from "../components/Menu/MenuNav";
import Splash from "../components/Splash";

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