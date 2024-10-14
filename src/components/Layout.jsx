import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";

export default function Layout() {
    return (
        <>
            <div className="w-full h-28 sticky top-0 z-20 bg-stone-900 text-white">
                <Header />
            </div>
            <Outlet />
            <Footer />
        </>
    )
}