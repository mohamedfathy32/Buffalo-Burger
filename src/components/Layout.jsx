import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";


export default function Layout() {
    const { i18n } = useTranslation()
    return (
        <div dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
            <div className="w-full h-28 sticky top-0 z-20 bg-stone-900 text-white">
                <Header />
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}