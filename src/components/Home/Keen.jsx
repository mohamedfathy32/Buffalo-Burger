import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { offersList } from "../../utils/data";

export default function KeenSlider() {
    const [slidesPerView, setSlidesPerView] = useState(4); // عدد الصور الافتراضي
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: {
            perView: slidesPerView,
            spacing: 7,
        },
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia("(max-width: 768px)").matches) {
                setSlidesPerView(2); // عدد الصور للهاتف
            } else if (window.matchMedia("(max-width: 990px)").matches) {
                setSlidesPerView(3); // عدد الصور للأجهزة اللوحية
            } else {
                setSlidesPerView(4); // عدد الصور للكمبيوتر
            }
        };

        handleResize(); // استدعاء الدالة عند التحميل
        window.addEventListener("resize", handleResize); // الاستماع للتغيرات في حجم الشاشة

        return () => {
            window.removeEventListener("resize", handleResize); // التنظيف عند التفكيك
        };
    }, []);

    const nav = useNavigate();



    return (
        <>
            <section className="mx-3 mt-3">
                <div>
                    <h3 className="text-xl h-fit font-bold uppercase text-orange-600 ">Hot offers</h3>
                </div>
                <div>

                    <div ref={sliderRef} className="keen-slider mt-1.5">
                        {offersList.map(slider => (
                            <div key={slider.title} className="keen-slider__slide" onClick={() => { nav(`/Offer/${slider.title}`, { state: slider }) }}>
                                <img src={slider.images.keen} alt={slider.title} className="rounded-[20px] " width='450' height='300' />
                            </div>
                        ))}

                    </div>
                </div>
            </section>

        </>
    );
};
