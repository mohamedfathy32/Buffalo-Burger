import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Home.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Home() {



    return (
        <>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                pagination={{ type: "progressbar" }}
                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="relative w-full "
            >
                <SwiperSlide className="flex items-center justify-center bg-white">
                    <a href="#">
                        <img src="./swiper-slider1.png" alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center bg-white">
                    <a href="#">
                        <img src="./swiper-slider2.png" alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center bg-white">
                    <a href="#">
                        <img src="./swiper-slider3.png" alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center bg-white">
                    <a href="#">
                        <img src="./swiper-slider4.png" alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center bg-white">
                    <a href="#">
                        <img src="./swiper-slider5.png" alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center bg-white">
                    <a href="#">
                        <img src="./swiper-slider6.png" alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center bg-white">
                    <a href="#">
                        <img src="./swiper-slider7.png" alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center bg-white">
                    <a href="#">
                        <img src="./swiper-slider8.png" alt="" />
                    </a>
                </SwiperSlide>

            </Swiper>
        </>
    );
}

