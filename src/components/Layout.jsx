import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout() {
    return (
        <>
            <div className="w-full h-28 fixed top-0 z-50 bg-stone-900 text-white">
                <Header />
            </div>
            <div className="mt-28">
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}