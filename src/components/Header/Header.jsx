import { FaCartShopping } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { useEffect, useState } from "react";
import { getUsernameById } from "../../utils/firebase";
import { Link } from "react-router-dom";
import LoginModal from "./Login";
import SignupModal from "./Signup";
import { useTranslation } from "react-i18next";

export default function Header() {
    // Drawer Nav
    const [nav, setNav] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('login');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [isOpenDrop, setIsOpenDrop] = useState(false); // State to manage dropdown visibility
    const [cart, setCart] = useState([])

    const { t, i18n } = useTranslation()

    function closeWindows() { }
    const handleClick = () => setNav(!nav);
    const handleLoginOpen = () => {
        setActiveTab('login');
        setIsOpen(true);
        // to Close Drawer
        setNav(false);
    }
    const handleSignupOpen = () => {
        setActiveTab('signup');
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };


    const successfulUser = () => {
        const userId = localStorage.getItem("userId");

        if (userId) {
            setIsLoggedIn(true);
            getUsernameById(userId).then((name) => {
                if (name) {
                    setUsername(name);
                } else {
                    setIsLoggedIn(false);

                }
            });
        } else {
            setIsLoggedIn(false);
        }
    }
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    useEffect(() => {
        const userId = localStorage.getItem("userId");

        if (userId) {
            setIsLoggedIn(true);
            getUsernameById(userId).then((name) => {
                if (name) {
                    setUsername(name);
                } else {
                    setIsLoggedIn(false);

                }
            });
        } else {
            setIsLoggedIn(false);
        }
    }, []);


    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    const toggleDropdown = () => {
        setIsOpenDrop(!isOpenDrop); // Toggle dropdown state
    };

    const handleLogout = () => {
        localStorage.removeItem("userId");
        setIsLoggedIn(false);
        setIsOpenDrop(false); // Reset dropdown state when user logs out
    };
    console.log(i18n.language)

    return (
        <>
            <nav className="bg-stone-900 w-full flex relative justify-center md:justify-between items-center h-16 px-12 shadow-white">
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center cursor-pointer border-none rounded-lg">
                        <div onClick={() => { i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en') }} className="flex items-center gap-2">
                            <span className="font-main">{t('languageButton')}</span>
                            <img className="w-4 h-4 rounded-full"
                                src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/eg-flag.png"
                                alt="Arabic language" />
                        </div>
                    </div>

                    <div className="hidden lg:block bg-custom-orange p-2 text-white rounded-md cursor-pointer">
                        <span className="text-base">My Loyalty Points</span>
                    </div>

                    <Link to="/Cart" className="flex items-center text-white hover:text-custom-orange font-bold text-lg uppercase">
                        <FaCartShopping className="text-2xl mr-1" />
                        Cart
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
                            onClick={() => setIsOpen(false)}
                        />
                    </Link>
                </div>
                {isLoggedIn ? <div className="hidden md:flex items-center gap-4">
                    <div className="cursor-pointer text-white font-bold text-lg hover:text-orange-600" onClick={toggleDropdown}>
                        <div className="dropdown relative">
                            <div className="dropdown-toggle px-1 py-2.5 text-white hover:text-orange-600 text-base font-bold leading-tight uppercase 
                            rounded transition duration-150 ease-in-out flex items-center whitespace-nowrap">
                                <span className="truncate max-w-[14rem]">
                                    Hello, {username}
                                </span>
                            </div>
                            {isOpenDrop && ( // Conditionally render the dropdown based on isOpen state
                                <ul className="min-w-max absolute bg-stone-900 text-base z-[51] py-2 px-2 w-full list-none text-left rounded-lg mt-1">
                                    <li>
                                        <a className="text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent border-b-white hover:border-b-primary-main border-b-[1px] text-white hover:text-primary-main" href="/profile">
                                            My account
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent border-b-white hover:border-b-primary-main border-b-[1px] text-white hover:text-primary-main" href="/orders">
                                            Order history
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent border-b-white hover:border-b-primary-main border-b-[1px] text-white hover:text-primary-main" href="/profile#addresses">
                                            Saved addresses
                                        </a>
                                    </li>
                                    <li>
                                        <span
                                            className="text-base border-b-white hover:border-b-primary-main border-b-[1px] text-white hover:text-primary-main py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent"
                                            onClick={handleLogout} // Handle logout click
                                        >
                                            Logout
                                        </span>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>

                </div> : <div className="hidden md:flex items-center gap-4">
                    <div onClick={handleSignupOpen} className="cursor-pointer text-white font-bold text-lg hover:text-custom-orange">
                        Create an account
                    </div>
                    <div onClick={handleLoginOpen} className="cursor-pointer text-white font-bold text-lg hover:text-custom-orange">
                        Login
                    </div>
                </div>}


                <div className="block md:hidden absolute left-6" onClick={handleClick}>
                    <button className="flex flex-col items-center justify-center gap-1">
                        <span className="block bg-custom-orange w-6 h-[3px] rounded"></span>
                        <span className="block bg-custom-orange w-6 h-[3px] rounded"></span>
                        <span className="block bg-custom-orange w-6 h-[3px] rounded"></span>
                    </button>
                </div>
            </nav>

            {/* Drawer Section  */}

            {nav && <div className="fixed inset-0 bg-black opacity-50" onClick={closeWindows}></div>}
            {nav && (
                <div className="fixed top-0 left-0 w-64 h-full z-51 bg-stone-900 shadow-lg transition-transform">
                    <div className="h-screen flex flex-col gap-4 bg-primary-gray px-4 w-[260px]">
                        <div className="pr-3 top-14 text-primary-main cursor-pointer ">
                        </div>
                        <div className=" flex flex-row justify-between">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col gap-1">
                                    <p className="text-white font-bold text-lg">Login to unlock exclusive</p>
                                    <p className="text-white text-base">Discount points and deals</p>
                                </div>
                            </div>
                            <div className="hidden h-max p-[2px] text-black bg-white rounded-full mt-4 cursor-pointer">
                                <div className="text-white font-main font-bold">
                                    <a className="p-1 undefined" href="/Loyalty">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="text-white flex flex-row justify-between items-center font-bold font-main ">
                            <div className="gap-x-1 text-white flex flex-row">
                                <MdLanguage className="inline-block mr-2 text-2xl" />
                                Language</div>
                            <div className="bg-primary-gray w-fit  rounded-lg">
                                <div
                                    className="cursor-pointer border-2 !text-white  border-none rounded-lg h-max gap-2 !text-primary-main border-primary-main">
                                    <div className="flex flex-row justify-center items-center gap-2"><span>العربية</span><img
                                        className="w-4 h-4 rounded-full"
                                        src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/eg-flag.png"
                                        alt /></div>
                                </div>
                            </div>
                        </div>
                        <section className="flex flex-col h-full justify-between ">
                            <div>
                                <div
                                    className="flex flex-col pb-3 border-b border-b-secondary-gray-50 !space-y-4 mb-3 ">
                                    <div className="text-white font-main font-bold cursor-pointer" onClick={handleLoginOpen}>Login</div>
                                    <div className="text-white font-main font-bold cursor-pointer" onClick={handleSignupOpen}>Create an account</div>
                                </div>
                                <div className="flex flex-col !space-y-4  border-b pb-3 border-b-secondary-gray-50">
                                    <div className="text-white font-main font-bold ">
                                        <FaShoppingCart className="inline-block mr-2 text-2xl text-custom-orange" />
                                        <a className="p-1 undefined" href="/CartDetails">Cart</a>
                                    </div>
                                    <div className="text-white font-main font-bold">
                                        <img
                                            className="w-7 inline-block mr-2"
                                            src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/loyalty-icon.svg" />
                                        <a className="p-1 undefined" href="/Loyalty">My Loyalty Points </a></div>
                                </div>
                                <div className="flex flex-col !space-y-4 border-b py-3 border-b-secondary-gray-50">
                                    <div className="text-white font-main font-bold">
                                        <img
                                            className="w-7 inline-block mr-2"
                                            src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/loyalty-icon.svg" />Feedback
                                        Feedback </div>
                                    <div className="text-white font-main font-bold"><a className="p-1 undefined"
                                        href="tel:19914">
                                        <img className="w-7 inline-block mr-2"
                                            src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/call-support-icon.svg" />Call
                                        Call Support</a>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-8">
                            </div>
                        </section>
                    </div>
                </div>


            )}

            {/* Seconed Header Delivery Address */}

            <div className="bg-stone-900 w-full max-w-full h-12 flex justify-center items-center">
                <div className="hidden md:flex space-x-4">
                    <Link to={'/About'}>About Us</Link>
                    <Link to={'/Cart'}>CartDetails</Link>
                    <Link to={'/Menu'}>Menu</Link>
                    <Link to={'/'}>Home</Link>
                </div>
            </div>





            {/* Login and SignUp المربع (Modal) */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 w-[40%]">
                        <div className="flex justify-between mb-4">
                            <button
                                className={`w-[50%] text-center px-4 py-2 ${activeTab === 'login' ? 'border-b-2 border-orange-500 text-orange-600' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('login')}
                            >
                                Login
                            </button>
                            <button
                                className={`w-[50%] text-center px-4 py-2 ${activeTab === 'signup' ? 'border-b-2 border-orange-500 text-orange-600' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('signup')}
                            >
                                Create an Account
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