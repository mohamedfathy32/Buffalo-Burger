import MenuCat from "../../components/MenuCat";
import KeenSlider from "./KeenSlider";
import SwiperSlider from "./SwiperSlider";
import TopSelling from "./TopSelling";

export default function Home() {
    return (
        <>
            <SwiperSlider />
            <MenuCat />
            <KeenSlider />
            <TopSelling/>
        </>
    );
}
