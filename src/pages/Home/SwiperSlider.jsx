import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Home.Module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

export default function SwiperSlider() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const getImages = () => {
            const mobileImages = [
                { id: 1, src: './swiper-slider-mobile1.png', link: '#' },
                { id: 2, src: './swiper-slider-mobile2.png', link: '#' },
                { id: 3, src: './swiper-slider-mobile3.png', link: '#' },
                { id: 4, src: './swiper-slider-mobile4.png', link: '#' },
                { id: 5, src: './swiper-slider-mobile5.png', link: '#' },
                { id: 6, src: './swiper-slider-mobile6.png', link: '#' },
                { id: 7, src: './swiper-slider-mobile7.png', link: '#' },
                { id: 8, src: './swiper-slider-mobile8.png', link: '#' },
            ];

            const desktopImages = [
                { id: 1, src: './swiper-slider1.png', link: '#' },
                { id: 2, src: './swiper-slider2.png', link: '#' },
                { id: 3, src: './swiper-slider3.png', link: '#' },
                { id: 4, src: './swiper-slider4.png', link: '#' },
                { id: 5, src: './swiper-slider5.png', link: '#' },
                { id: 6, src: './swiper-slider6.png', link: '#' },
                { id: 7, src: './swiper-slider7.png', link: '#' },
                { id: 8, src: './swiper-slider8.png', link: '#' },
            ];

            setImages(window.matchMedia("(max-width: 640px)").matches ? mobileImages : desktopImages);
        };

        getImages(); // استدعاء الدالة عند التحميل

        window.addEventListener("resize", getImages); // الاستماع للتغيرات في حجم الشاشة
        return () => window.removeEventListener("resize", getImages); // التنظيف عند التفكيك
    }, []);

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ type: "progressbar" }}
            navigation={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
        >
            {images.map(slide => (
                <SwiperSlide key={slide.id}>
                    <a href={slide.link}>
                        <img src={slide.src} alt={`Slide ${slide.id}`} />
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
