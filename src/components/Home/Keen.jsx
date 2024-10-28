import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { offersList } from "../../utils/data";
import { useTranslation } from "react-i18next";

export default function KeenSlider() {
    const { pathname } = useLocation();
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const [slidesPerView, setSlidesPerView] = useState(4);

    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        rtl: i18n.language === 'ar',
        slides: { perView: slidesPerView, spacing: 7 }
    });

    useEffect(() => {
        const updateSlidesPerView = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 768) setSlidesPerView(2);
            else if (screenWidth <= 990) setSlidesPerView(3);
            else setSlidesPerView(4);
        };
        updateSlidesPerView();
        window.addEventListener("resize", updateSlidesPerView);
        return () => {
            window.removeEventListener("resize", updateSlidesPerView);
        };
    }, []);

    return (
        <section className="mx-3 mt-3">
            <div>
                {!pathname.includes('Menu') && <h3 className="text-xl h-fit font-bold uppercase text-orange-600 ">Hot offers</h3>}
            </div>
            <div>
                <div ref={sliderRef} className="keen-slider mt-1.5">
                    {offersList.map(offer => (
                        <div key={offer.title.en} className="keen-slider__slide" onClick={() => { navigate(`/Offer/${offer.title.en.split(' ').join('-')}`, { state: { offer } }) }}>
                            <img src={offer.keenImage} alt={offer.title[i18n.language]} className="rounded-[20px]" width='450' height='300' />
                        </div>))}
                </div>
            </div>
        </section>
    );
};
