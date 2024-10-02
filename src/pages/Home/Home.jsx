import KeenSlider from "../../components/KeenSlider";
import MenuNav from "../../components/MenuNav";
import SwiperSlider from "../../components/SwiperSlider";
import './Home.Module.css';

export default function Home() {


    return (
        <>

            <SwiperSlider />
            <section className="mx-3 mt-3">
                <div>
                    <h3 className="text-xl h-fit font-bold uppercase text-orange-600 ">Hot offers</h3>
                </div>
                <div>

                    <KeenSlider />
                </div>
                <MenuNav />
            </section>
        </>
    );
}
