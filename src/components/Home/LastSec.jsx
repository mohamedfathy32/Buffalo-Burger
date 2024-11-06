import { useTranslation } from "react-i18next"

export default function LastSection() {
    const { t, i18n } = useTranslation()

    return <>
        <div className="w-full">
            <div className="bg-[url('../../../images/Home/footer-texture.png')] flex flex-col  !items-center lg:!items-start leading-none lg:leading-normal justify-center bg-[#ff5f00] p-4 lg:p-[60px] uppercase text-white font-normal  lg:tracking-wider  w-full h-[183px] ">
                <p className="text-[32px] font-medium  lg:text-5xl">{t("Revolutionize Your")}</p>
                <p className=" text-[32px] font-medium  lg:text-5xl">{t("Food Delivery Experience")}</p>
            </div>
            <div className="relative  flex flex-col-reverse lg:flex-row  w-full h-[635px] lg:h-[309px] bg-[#1c1c1b] border-b border-b-gray-700 " >
                <div className="w-full">
                    <img src='/images/Home/footer-stars.png' alt="asdasd" className=" absolute top-0 lg:block w-full " />
                    <div className="flex flex-col p-4 lg:p-[60px] w-full">
                        <div className="flex justify-center h-[362px] overflow-hidden lg:hidden relative w-full">
                            <img className="  flex h-[155%] w-full max-w-[288px]  " src='/images/Home/buffalo-app-CTA-img.png' alt="" />
                        </div>
                        <h1 className="  text-2xl lg:text-[32px] text-[#ff5f00] font-bold uppercase md:max-w-[50%]  ">
                            {i18n.language == 'en' ? "Download our mobile application now!!!" : "قم بتنزيل تطبيقنا المحمول الآن!!!"}
                        </h1>
                        <p className="  text-base lg:text-xl text-white md:max-w-[50%]">
                            {i18n.language == 'en' ? "Supercharge your experience with our mobile app! Unbeatable deals, personalized food suggestions, easy address management, loyalty points, and a user-friendly interface."
                                : 'استمتع بتجربة سهلة وممتعة! احصل على عروض لا تُقاوَم، اقتراحات طعام شخصية، إدارة عناوينك بسهولة، نقاط الخصم، وواجهة سهلة الاستخدام. قم بالتحميل الآن.'}
                        </p>
                        <div className="flex flex-row pt-6 gap-x-4">
                            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.thebuffaloburger&pli=1">
                                <img className=" md:w-[202px] md:h-[60px]" src="/images/Home/ctaGoogle.svg" alt="" />
                            </a>
                            <a target="_blank" href="https://apps.apple.com/us/app/buffalo-burger/id1661414221">
                                <img className=" md:w-[202px] md:h-[60px]" src="/images/Home/ctaApple.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="max-w-[300px] max-h-[485px] overflow-hidden hidden lg:block lg:absolute end-40 -top-44">
                    <img src='/images/Home/buffalo-app-CTA-img.png' alt="" />
                </div>
            </div>
        </div>
    </>
}