import LastSec from "../components/Home/LastSec";
import MenuCat from "../components/Home/MenuCat";
import SwiperSlider from "../components/Home/SwiperSlider";
import TopSelling from "../components/Home/TopSelling";
import KeenSlider from "../components/Home/KeenSlider";
import Splash from "../components/Splash";

export default function Home() {
    return (
        <>
            <Splash />
            <SwiperSlider />
            <div className="sticky top-28 z-10">
                <MenuCat />
            </div>
            <KeenSlider />
            <TopSelling />
            <LastSec />
        </>
    );
}