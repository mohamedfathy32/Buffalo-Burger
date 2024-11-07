import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { MdShoppingBasket } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { MdLoyalty } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { CartContext, LoggedContext } from "../../utils/context";
import { getUserInfoById } from "../../utils/firebase";
import LoginModal from "./Login";
import SignupModal from "./Signup";
import CartDrawer from "../CartDrawer";
import Swal from "sweetalert2";

export default function Header() {
    const { cart, setCart } = useContext(CartContext)
    const { isLoggedIn, setIsLoggedIn } = useContext(LoggedContext);
    const { t, i18n } = useTranslation()
    const [nav, setNav] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('login');
    const [username, setUsername] = useState("");
    const [userphone, setUserphone] = useState("");
    const [isOpenDrop, setIsOpenDrop] = useState(false);
    const [cartDrawer, setCartDrawer] = useState(false)

    function closeWindows() { setNav(false); setCartDrawer(false); }
    const handleClick = () => setNav(!nav);

    const handleLoginOpen = () => {
        setActiveTab('login');
        setIsOpen(true);
        setNav(false);
    }

    const handleSignupOpen = () => {
        setActiveTab('signup');
        setIsOpen(true);
        setNav(false);
    };

    const handleClose = () => {
        setIsOpen(false);
    };


    const successfulUser = async () => {
        const userId = localStorage.getItem("userId");

        if (userId) {
            const userInfo = await getUserInfoById(userId);
            if (userInfo) {
                setUsername(userInfo.username);
                setUserphone(userInfo.phoneNumber);
                setIsLoggedIn(true);
            }
        } else {
            setIsLoggedIn(false);
        }
    }

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || []
        setCart(cart);
    }, []);

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        const fetchUserInfo = async () => {
            if (userId) {
                const userInfo = await getUserInfoById(userId);
                if (userInfo) {
                    setUsername(userInfo.username);
                    setUserphone(userInfo.phoneNumber);
                    setIsLoggedIn(true);
                }
            } else {
                setIsLoggedIn(false)
            }
        };

        fetchUserInfo();
    }, [localStorage.getItem("userId")]);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") {
                setIsOpen(false);
                setNav(false)
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    const toggleDropdown = () => {
        setIsOpenDrop(!isOpenDrop);
    };

    const handleLogout = () => {
        localStorage.removeItem("userId");
        setIsLoggedIn(false);
        setIsOpenDrop(false);
        Swal.fire({
            title: `${t("Logged Out!")}`,
            text: `${t("You have logged out successfully.")} ${t("See you soon!")}`,
            icon: "info",
            iconColor: '#ff5f00',
            confirmButtonText: `${t("OK")}`,
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    };

    function changeLang() {
        const lang = i18n.language === 'en' ? 'ar' : 'en'
        i18n.changeLanguage(lang)
        localStorage.setItem('lang', lang)
    }

    return (
        <>
            <nav className="bg-[#1c1c1b] w-full flex relative justify-center md:justify-between items-center h-16 px-12 shadow-white"
                onClick={() => {
                    if (isOpen) {
                        setNav(false);
                        setIsOpen(false)
                    }
                }}
            >
                <div className="hidden md:flex items-center gap-5">
                    <div className="flex items-center cursor-pointer border-none rounded-lg">
                        <div onClick={changeLang} className="flex items-center gap-2">
                            <span className="font-main">{t('languageButton')}</span>
                            <img className="w-4 h-4 rounded-full"
                                src={i18n.language == 'en' ? "https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/eg-flag.png" : 'https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/uk-flag.png'}
                                alt="Arabic language" />
                        </div>
                    </div>
                    <div className="hidden lg:block bg-[#ff5f00] p-2 text-white rounded-md cursor-pointer">
                        <span className="text-base flex items-center">
                            <MdLoyalty className="text-lg" />
                            {t("My Loyalty Points")}
                        </span>
                    </div>
                    <Link to="/Cart" className="flex items-center text-white hover:text-[#ff5f00] font-bold text-lg uppercase">
                        <FaCartShopping className="text-2xl mr-1" />
                        {t("Cart")}
                    </Link>
                    <div className="flex items-center justify-center w-7 h-7 bg-white text-stone-900 rounded-full">
                        {cart.length}
                    </div>
                </div>
                <div className="flex justify-center absolute left-0 right-0 mx-auto w-52">
                    <Link to="/">
                        <img
                            alt="Buffalo Burger logo"
                            loading="lazy"
                            src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/headerLogo.svg"
                            width={212}
                            height={44}
                            className="mx-auto"

                        />
                    </Link>
                </div>
                {isLoggedIn ? <div className="hidden md:flex items-center gap-4">
                    <div className="cursor-pointer text-white font-bold text-lg hover:text-[#ff5f00]" onClick={toggleDropdown}>
                        <div className="dropdown relative">
                            <div className="dropdown-toggle px-1 py-2.5 text-white hover:text-[#ff5f00] text-base font-bold leading-tight uppercase 
                            rounded transition duration-150 ease-in-out flex items-center whitespace-nowrap">
                                <span className="truncate max-w-[14rem]">
                                    {t("Hello")}, {username}
                                </span>
                            </div>
                            {isOpenDrop && (
                                <ul className="min-w-max absolute bg-[#1c1c1b] text-base z-[51] py-2 ps-2 w-full list-none text-start rounded-lg mt-1">
                                    <li>
                                        <Link className="text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent border-b-white hover:border-b-orange-600 border-b-[1px] text-white hover:text-[#ff5f00]" to="/profile">
                                            {t("My account")}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent border-b-white hover:border-b-orange-600 border-b-[1px] text-white hover:text-[#ff5f00]" to="/OrderHistory">
                                            {t("Order history")}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent border-b-white hover:border-b-orange-600 border-b-[1px] text-white hover:text-[#ff5f00]" to="/profile#addresses">
                                            {t("Saved addresses")}
                                        </Link>
                                    </li>
                                    <li>
                                        <span
                                            className="text-base border-b-white hover:border-b-orange-600 border-b-[1px] text-white hover:text-[#ff5f00] py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent"
                                            onClick={handleLogout}
                                        >
                                            {t("Logout")}
                                        </span>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div> : <div className="hidden md:flex items-center gap-4">
                    <div onClick={handleSignupOpen} className="cursor-pointer text-white font-bold text-lg hover:text-[#ff5f00]">
                        {t("Create an account")}
                    </div>
                    <div onClick={handleLoginOpen} className="cursor-pointer text-white font-bold text-lg hover:text-[#ff5f00]">
                        {t("Login")}
                    </div>
                </div>}
                <div className="block md:hidden absolute left-6" onClick={handleClick}>
                    <button className="flex flex-col items-center justify-center gap-1">
                        <span className="block bg-[#ff5f00] w-6 h-[3px] rounded"></span>
                        <span className="block bg-[#ff5f00] w-6 h-[3px] rounded"></span>
                        <span className="block bg-[#ff5f00] w-6 h-[3px] rounded"></span>
                    </button>
                </div>
                <div className="block md:hidden absolute right-6" onClick={() => { setCartDrawer(true) }}>
                    <button className="bottom-0 bg-[#ff5f00] text-white flex justify-center items-center rounded-full relative">
                        <MdShoppingBasket className="text-4xl p-2" />
                    </button>
                </div>
            </nav>
            {/* Drawer Section  */}

            {nav && <div className="fixed inset-0 bg-black opacity-50 transition-opacity duration-300 ease-in-out" onClick={closeWindows}></div>}
            <div className={`block md:hidden fixed top-0 start-0 w-64 h-full z-50 bg-[#1c1c1b] shadow-lg transition-transform duration-500 ease-in-out transform ${nav ? 'translate-x-0' : i18n.language == 'ar' ? 'translate-x-full' : '-translate-x-full'}`}>
                <div className="h-screen flex flex-col gap-4 bg-[#1c1c1b] px-4 w-[260px]">
                    <div className="pr-3 top-14 text-[#ff5f00] cursor-pointer "></div>
                    <div className=" flex flex-row justify-between">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-1">
                                <p className="text-white font-bold text-lg">
                                    {isLoggedIn ? `${t("Hello")}, ${username}` : `${t("Login to unlock exclusive")}`}
                                </p>
                                <p className="text-white text-base font-bold">
                                    {isLoggedIn ? `${userphone}` : `${t("Discount points and deals")}`}
                                </p>
                            </div>
                        </div>
                        {/* <div className="hidden h-max p-[2px] text-black bg-white rounded-full mt-4 cursor-pointer">
                            <div className="text-white font-main font-bold">
                                <Link className="p-1 undefined" to="/Loyalty">
                                </Link>
                            </div>
                        </div> */}
                    </div>
                    <div className="text-white flex flex-row justify-between items-center font-bold font-main ">
                        <div className="gap-x-1 text-white flex flex-row">
                            <BsGlobe className="inline-block mr-2 text-xl font-bold" />
                            {t("Language")}
                        </div>
                        <div className="bg-[#1c1c1b] w-fit  rounded-lg">
                            <div
                                className="cursor-pointer border-2 !text-white  border-none rounded-lg h-max gap-2 !text-primary-main border-primary-main">
                                <div onClick={changeLang} className="flex flex-row justify-center items-center gap-2">
                                    <span>
                                        {t("languageButton")}
                                    </span>
                                    <img
                                        className="w-4 h-4 rounded-full"
                                        src={i18n.language == 'en' ? "https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/eg-flag.png" : 'https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/uk-flag.png'}
                                        alt="Arabic language" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="flex flex-col h-full justify-between ">
                        <div>

                            {isLoggedIn == false ?
                                <div
                                    className="flex flex-col pb-3 border-b border-b-secondary-gray-50 !space-y-4 mb-3 ">
                                    <div className="text-white font-main font-bold cursor-pointer" onClick={handleLoginOpen}>{t("Login")}
                                    </div>
                                    <div className="text-white font-main font-bold cursor-pointer" onClick={handleSignupOpen}>{t("Create an account")}</div>
                                </div> : ''}
                            <div className="flex flex-col !space-y-4  border-b pb-3 border-b-secondary-gray-50">
                                {isLoggedIn && <>
                                    <div className="text-white font-main font-bold">
                                        <img
                                            className="w-7 inline-block mr-2"
                                            src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/my-orders-icon.svg" />
                                        <Link className="p-1 undefined" onClick={closeWindows} to="/OrderHistory">{t("Order history")}

                                        </Link>
                                    </div>
                                    <div className="text-white font-main font-bold">
                                        <img
                                            className="w-7 inline-block mr-2"
                                            src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/saved-address-icon.svg" />
                                        <Link className="p-1 undefined" onClick={closeWindows} to="/Profile">{t("Saved addresses")}

                                        </Link>
                                    </div>
                                    <div className="text-white font-main font-bold">
                                        <IoSettingsSharp className="inline-block mr-2 text-2xl text-[#ff5f00]" />

                                        <Link className="p-1 undefined" onClick={closeWindows} to="/Profile">{t("My account")}

                                        </Link>
                                    </div>
                                </>
                                }
                                <div className="text-white font-main font-bold ">
                                    <MdShoppingBasket className="inline-block mr-2 text-2xl text-[#ff5f00]" />
                                    <Link className="p-1 undefined" to="/cart" onClick={closeWindows}>{t("Cart")}</Link>
                                </div>
                            </div>
                            <div className="flex flex-col !space-y-4 border-b py-3 border-b-secondary-gray-50">
                                <div className="text-white font-main font-bold">
                                    <img
                                        className="w-7 inline-block mr-2"
                                        src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/loyalty-icon.svg" />
                                    {t("Feedback")}
                                </div>
                                <div className="text-white font-main font-bold"><Link className="p-1 undefined"
                                    href="tel:19914">
                                    <img className="w-7 inline-block mr-2"
                                        src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/call-support-icon.svg" />
                                    {t("Call Support")}
                                </Link>
                                </div>
                            </div>
                        </div>
                        {isLoggedIn == false ? '' :

                            <div className="mb-8">
                                <div onClick={handleLogout} className="flex justify-between text-white font-main font-bold">
                                    <div>{t("Logout")}</div>
                                    <MdLogout className="text-2xl" />
                                </div>
                            </div>}
                    </section>
                </div>
            </div>

            {cartDrawer && <div className="fixed inset-0 bg-black opacity-50 transition-opacity duration-300 ease-in-out" onClick={closeWindows}></div>}

            <CartDrawer
                cartDrawer={cartDrawer}
                closeWindows={closeWindows}
                cartCounter={cart.length}
            />

            {/* Seconed Header Delivery Address */}
            <div className="bg-[#1c1c1b] w-full max-w-full h-12 flex justify-center items-center">
                <div className="hidden md:flex">
                    <Link className="me-4 hover:text-[#ff5f00]" to={'/About'}>{t("About us")}</Link>
                    <Link className="me-4 hover:text-[#ff5f00]" to={'/Cart'}>{t("Cart details")}</Link>
                    <Link className="me-4 hover:text-[#ff5f00]" to={'/Menu'}>{t("Menu")}</Link>
                    <Link className="me-4 hover:text-[#ff5f00]" to={'/'}>{t("Home")}</Link>
                </div>
            </div>
            {/* Login and SignUp المربع (Modal) */}
            {isOpen && (
                <div className="fixed top-16 w-[100%] h-screen items-center flex  justify-center z-50 bg-black bg-opacity-50 ">
                    <div className="bg-white rounded-lg p-6 w-[80%] sm:w-[40%] ">
                        <div className="flex justify-between mb-4">
                            <button
                                className={`w-[50%] text-center px-4 py-2 ${activeTab === 'login' ? 'border-b-2 text-[#ff5f00] text-[#ff5f00]' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('login')}
                            >
                                {t("Login")}
                            </button>
                            <button
                                className={`w-[50%] text-center px-4 py-2 ${activeTab === 'signup' ? 'border-b-2 text-[#ff5f00] text-[#ff5f00]' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('signup')}
                            >
                                {t("Create an account")}
                            </button>
                        </div>

                        {activeTab === 'login' && <LoginModal onClose={handleClose} onLoginSuccess={() => successfulUser()} />}
                        {activeTab === 'signup' && <SignupModal onClose={handleClose} onSignupSuccess={() => successfulUser()} />}
                    </div>
                </div>
            )}
        </>
    );
}