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
            <MenuNav />
            <KeenSlider />
            <TopSelling />
            <LastSection />
        </>
    );
}