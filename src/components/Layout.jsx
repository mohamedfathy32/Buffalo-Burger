import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout() {
    return (
        <>
            <div className="w-full h-28 sticky top-0 right-0 left-0 z-50 bg-stone-900 text-white">
                <Header />
            </div>
            <Outlet />
            <Footer />
        </>
    )
}