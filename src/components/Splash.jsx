export default function Splash() {
    return (
        <div id="splashParent" className="fixed inset-0 bg-[#00000094] z-[1000] w-full h-full">
            <div
                id="splashChild"
                className="w-[150px] h-[150px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img
                    src="/images/splash/IconBg.png"
                    alt="IconBg"
                    id="IconBg"
                    className="w-full h-full" />
                <img
                    src="/images/splash/IconNoBg.png"
                    alt="IconNoBg"
                    id="IconNoBg"
                    className="absolute top-[30%] left-[25%] w-1/2 h-1/2" />
            </div>
        </div>
    );
}