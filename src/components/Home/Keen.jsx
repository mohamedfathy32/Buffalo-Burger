import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { offersList } from "../../utils/data";
import { useTranslation } from "react-i18next";

export default function KeenSlider() {
    const { pathname } = useLocation();
    const [slidesPerView, setSlidesPerView] = useState(4); // Default number of slides
    const { i18n } = useTranslation();
    
    // Initialize KeenSlider with rtl handling based on language
    const [sliderRef] = useKeenSlider({
        loop: true,  // Enable infinite loop
        mode: "free", // Free mode to slide freely
        rtl: i18n.language === 'ar', // RTL support if the language is Arabic
        slides: {
            perView: slidesPerView, // Number of slides per view, responsive
            spacing: 7, // Space between slides
        },
    });

    useEffect(() => {
        const handleResize = () => {
            // Adjust slidesPerView based on screen size
            if (window.matchMedia("(max-width: 768px)").matches) {
                setSlidesPerView(2); // For mobile devices
            } else if (window.matchMedia("(max-width: 990px)").matches) {
                setSlidesPerView(3); // For tablet devices
            } else {
                setSlidesPerView(4); // For larger screens like desktops
            }
        };

        handleResize(); // Call on component load
        window.addEventListener("resize", handleResize); // Listen for window resize

        return () => {
            window.removeEventListener("resize", handleResize); // Cleanup listener on unmount
        };
    }, []);

    const nav = useNavigate();

    return (
        <>
            <section className="mx-3 mt-3">
                <div>
                    {/* Only show title if not on the Menu page */}
                    {pathname.includes('Menu') ? '' : <h3 className="text-xl h-fit font-bold uppercase text-orange-600 ">Hot offers</h3>}
                </div>
                <div>
                    <div ref={sliderRef} className="keen-slider mt-1.5">
                        {/* Loop through offersList and display each offer */}
                        {offersList.map(slider => (
                            <div 
                                key={slider.title} 
                                className="keen-slider__slide" 
                                onClick={() => { nav(`/Offer/${slider.title}`, { state: slider }) }}
                            >
                                <img 
                                    src={slider.images.keen} 
                                    alt={slider.title} 
                                    className="rounded-[20px]" 
                                    width='450' 
                                    height='300' 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
