import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";

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

    const slides = [
        { id: 1, src: '/images/keen/keen-slider1.webp', link: '#' },
        { id: 2, src: '/images/keen/keen-slider2.webp', link: '#' },
        { id: 3, src: '/images/keen/keen-slider3.webp', link: '#' },
        { id: 4, src: '/images/keen/keen-slider4.webp', link: '#' },
        { id: 5, src: '/images/keen/keen-slider5.webp', link: '#' },
        { id: 6, src: '/images/keen/keen-slider6.webp', link: '#' },
        { id: 8, src: '/images/keen/keen-slider8.webp', link: '#' },
        { id: 9, src: '/images/keen/keen-slider9.webp', link: '#' },
        { id: 10, src: '/images/keen/keen-slider10.webp', link: '#' },
        { id: 11, src: '/images/keen/keen-slider11.webp', link: '#' },
        { id: 12, src: '/images/keen/keen-slider12.webp', link: '#' },

    ]


    return (
        <>
            <section className="mx-3 mt-3">
                <div>
                    <h3 className="text-xl h-fit font-bold uppercase text-orange-600 ">Hot offers</h3>
                </div>
                <div>

                    <div ref={sliderRef} className="keen-slider mt-1.5">
                        {slides.map(slider => (
                            <div key={slider.id} className="keen-slider__slide">
                                <a href={slider.link}>
                                    <img src={slider.src} alt={slider.id} className="rounded-[20px] " width='450' height='300' />
                                </a>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

        </>
    );
};
