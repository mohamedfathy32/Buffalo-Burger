import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";
import { MdShoppingBasket } from 'react-icons/md';
import CartDrawer from "./CartDrawer";

export default function Layout() {
    const { i18n } = useTranslation();
    const [cartDrawer, setCartDrawer] = useState(false);

    const closeWindows = () => {
        setCartDrawer(false);
    };

    const openCartDrawer = () => {
        setCartDrawer(true);
    };

    return (
        <div dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
            <div className="w-full h-28 sticky top-0 z-20 bg-[#1c1c1b] text-white">
                <Header />
            </div>

            {cartDrawer && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40"
                    onClick={closeWindows}
                ></div>
            )}

            <CartDrawer
                cartDrawer={cartDrawer}
                closeWindows={closeWindows}
            />

            <Outlet />
            <Footer />

            <div
                className="hidden md:block fixed bottom-4 right-4 bg-[#ff5f00] text-white p-4 rounded-full shadow-lg cursor-pointer z-50"
                onClick={openCartDrawer}
            >
                <MdShoppingBasket size={24} />
            </div>
        </div>
    );
}
