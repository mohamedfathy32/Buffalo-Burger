import { useEffect } from 'react';
import './Splash.css';

function Splash() {
    useEffect(() => {
        const timer = setTimeout(() => {
            const splash = document.getElementById('splashParent');
            if (splash) {
                splash.style.display = 'none';
            }
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            id="splashParent"
            className="fixed inset-0 bg-black z-[1000] w-full h-full"
        >
            <div
                id="splashChild"
                className="w-[250px] h-[250px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
                <img
                    src="/IconBg.png"
                    alt="IconBg"
                    id="IconBg"
                    className="w-full h-full"
                />
                <img
                    src="/IconNoBg.png"
                    alt="IconNoBg"
                    id="IconNoBg"
                    className="absolute top-[30%] left-[25%] w-1/2 h-1/2"
                />
            </div>
        </div>
    );
};

export default Splash;
