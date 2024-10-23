import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { offersList } from "../../utils/data";
import { useTranslation } from "react-i18next";
export default function SwiperSlider() {
    const { i18n } = useTranslation();
    const [mobile, setMobile] = useState(false)


    useEffect(() => {
        const getImages = () => {

            window.matchMedia("(max-width: 640px)").matches ? setMobile(true) : setMobile(false)
        }
        getImages();

        window.addEventListener("resize", getImages);
        return () => window.removeEventListener("resize", getImages);
    }, [])


    const nav = useNavigate();


    return (

        <>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                pagination={{ type: "progressbar" }}
                navigation={true}
                key={i18n.language == 'ar' ? 'ar' : 'en'}
                // dir={i18n.language == 'ar' ? 'ar' : 'en'}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {offersList.map(slide => (
                    <SwiperSlide key={slide.title} onClick={() => { nav(`/Offer/${slide.title}`, { state: slide }) }}>
                        <img src={mobile ? slide.images.swiperMobile : slide.images.swiperWeb} alt={`Slide ${slide.id}`} />
                    </SwiperSlide>
                ))}
            </Swiper>



        </>
    )
}