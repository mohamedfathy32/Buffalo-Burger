import KeenSlider from "../components/Home/Keen";
import LastSection from "../components/Home/LastSec";
import SwiperSlider from "../components/Home/Swiper";
import TopSelling from "../components/Home/TopSelling";
import MenuNav from "../components/Home/Nav";
import Splash from "../components/Splash";


export default function HomePage() {

    /////////////////////////////////////
    // useEffect(() => {
    //     async function add() {
    // await addCollection(productList, 'product')
    // await addCollection(menuCategoriesList, 'menuCategories')
    // await addCollection(branchesList, 'branches')
    // await addCollection(breadList, 'bread')
    // await addCollection(topSellingList, 'topSelling')
    // await addCollection(offersList, 'offers')
    // await addCollection(comboOptionsList, 'comboOptions')
    // await addCollection(drinksList, 'drinks')
    // await addCollection(extrasList, 'extras')
    //     }
    //     add()
    // }, []);
    ///////////////////////////////////////

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

