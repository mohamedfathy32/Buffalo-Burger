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
    const [isMobile, setIsMobile] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const updateIsMobile = () => setIsMobile(window.matchMedia("(max-width: 640px)").matches);
        updateIsMobile();
        window.addEventListener("resize", updateIsMobile);
        return () => window.removeEventListener("resize", updateIsMobile);
    }, []);

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ type: "progressbar" }}
            navigation={true}
            key={i18n.language == 'ar' ? 'ar' : 'en'}
            autoplay={{ delay: 3000, disableOnInteraction: false }}>
            {offersList?.map(offer => (
                <SwiperSlide key={offer.title.en} onClick={() => { navigate(`/Offer/${offer.title.en.split(' ').join('-')}`, { state: { offer } }) }}>
                    <img src={isMobile ? offer.swiperMobileImage : offer.swiperWebImage} alt={offer.title[i18n.language]} width={'100%'} />
                </SwiperSlide>
            ))}
        </Swiper >
    )
}