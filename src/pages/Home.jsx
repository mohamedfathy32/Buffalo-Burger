import KeenSlider from "../components/Home/Keen";
import LastSection from "../components/Home/LastSec";
import SwiperSlider from "../components/Home/Swiper";
import TopSelling from "../components/Home/TopSelling";
import MenuNav from "../components/Menu/Nav";
import Splash from "../components/Splash";

export default function HomePage() {
    return (
        <>
            <Splash />
            <SwiperSlider />
            <div className="sticky top-28 z-10">
                <MenuNav />
            </div>
            <KeenSlider />
            <TopSelling />
            <LastSection />
        </>
    );
}