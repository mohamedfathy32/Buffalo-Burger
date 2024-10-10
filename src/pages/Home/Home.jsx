import KeenSlider from "../../components/KeenSlider";
import MenuCat from "../../components/MenuCat";
import Splash from "../../components/Splash/Splash";
import SwiperSlider from "./SwiperSlider";
import TopSelling from "./TopSelling";
import LastSec from "./lastSec/LastSec";

export default function Home() {
    return (
        <>
            <Splash />
            <SwiperSlider />
            <div className="sticky top-28 z-10">
                <MenuCat/>
            </div>
            <KeenSlider />
            <TopSelling/>
            <LastSec/>
        </>
    );
}