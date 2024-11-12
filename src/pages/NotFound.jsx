import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
    const { t } = useTranslation()
    return (
        <div className="bg-[#1c1c1b]">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center py-12 min-h-full">
                <div className="mx-12">
                    <h4 className="mb-3 text-4xl md:text-5xl font-bold sm:w-max md:!w-[500px] text-[#ff5f00] uppercase leading-loose">
                        {t("We couldn’t find a page with this link.")}
                    </h4>
                    <p className="mb-8 text-2xl md:w-max text-white">{t("But we found good offers and delicious sandwiches.")}</p>
                    <Link className="uppercase hover:bg-orange-700 text-base inline-block rounded-lg bg-[#ff5f00] border border-[#ff5f00] px-8 py-3 text-center font-semibold  text-white w-full" to="/">{t("Discover our menu")}</Link>
                </div>
                <div className=" w-[288px] h-[276px] md:w-[500px] md:h-[500px]  md:mr-6">
                    <img src="../buffalo-burger-unscreen.gif" alt="Animated GIF" style={{ width: "100%", height: "auto" }} />
                </div>
            </div>
        </div>
    )
}