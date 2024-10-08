import MenuCat from "../../components/MenuCat";
import KeenSlider from "./KeenSlider";
import SwiperSlider from "./SwiperSlider";
import TopSelling from "./TopSelling";
import Splash from "../../components/Splash/Splash";

export default function Home() {
    return (
        <>
            <Splash />
            <SwiperSlider />
            <MenuCat />
            <KeenSlider />
            <TopSelling/>


        </>
    );
}
