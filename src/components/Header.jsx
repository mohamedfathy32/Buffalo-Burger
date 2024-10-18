import { FaCartShopping } from "react-icons/fa6";

import { useEffect, useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import OrderComponent from "./OrderComponent";

export default function Header() {
    // Drawer Nav
    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);

    const [isOrderOpen, setIsOrderOpen] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('');

    //Order componenet
    const toggleOrder = () => {
        setIsOrderOpen(!isOrderOpen);
    };

    const openOrder = () => setIsOrderOpen(true);
    const closeOrder = () => setIsOrderOpen(false);





    const handleLoginOpen = () => {
        setActiveTab('login')
        setIsOpen(true);
        // to Close Drawer
        setNav(false);
    }
    const handleSignupOpen = () => {
        setActiveTab('signup');
        setIsOpen(true);
        setNav(false);
    }

    const closeWindows = () => {
        setIsOpen(false);
        setNav(false);
    };

    const handleClose = () => setIsOpen(false);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") {
                handleClose();
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => window.removeEventListener("keydown", handleEsc);
    }, []);



    return (


        <>
            {/* New Header  */}

            <nav className="bg-stone-900 w-full flex relative justify-center md:justify-between items-center h-16 shadow-white transition-all ease-in-out px-12">

                {/* Conents Left */}
                <div className="hidden md:flex md:items-center gap-4">
                    <div className="bg-stone-900">
                        <div className="cursor-pointer border-2 !text-white  border-none rounded-lg  h-max gap-2   ">
                            <div className="flex flex-row justify-center items-center gap-2">
                                <span className='font-main'>العربية</span>
                                <img className="w-4 h-4 rounded-full"
                                    src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/eg-flag.png"
                                    alt />
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block items-center bg-custom-orange p-2 text-white rounded-md cursor-pointer">
                        <span className="mx-1 text-base">My Loyalty Points</span>
                    </div>

                    <a className="p-1 undefined"
                        href="/CartDetails">
                        <div
                            className="flex justify-center items-center align-middle font-main text-lg font-bold hover:text-custom-orange uppercase text-white cursor-pointer">
                            <FaCartShopping className="text-2xl mr-1" />
                            Cart
                        </div>
                    </a>
                    <div className="flex justify-center items-center">
                        <div
                            className="flex justify-center items-center w-7 h-7 rounded-full bg-white text-stone-900 md:flex">
                            0
                        </div>
                    </div>
                </div>

                {/* Logo */}
                <div className="flex flex-col w-52 m-0 mx-auto absolute right-0 left-0">
                    <a className="p-1 undefined" href="/">
                        <img
                            alt="Buffalo Burger logo"
                            loading="lazy"
                            width={212}
                            height={44}
                            decoding="async"
                            src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/headerLogo.svg"
                            style={{ color: 'transparent' }} />
                    </a>
                    <h1 className="sr-only">Buffalo Burger | online ordering</h1>
                </div>

                {/* Contents right  */}
                <div className="hidden md:flex md:items-center gap-4">
                    <div onClick={handleSignupOpen} className="font-main text-lg font-bold text-white hover:text-custom-orange flex justify-center cursor-pointer">
                        Create an account
                    </div>
                    <div onClick={handleLoginOpen} className="font-main text-lg font-bold text-white hover:text-custom-orange flex justify-center cursor-pointer">
                        Login
                    </div>
                </div>
                <div className="block absolute left-6 md:hidden" onClick={handleClick}>
                    <button className="w-[26px] cursor-pointer block">
                        <span className="block bg-custom-orange rounded-md h-[3px] mb-[5px] transition-all duration-200 ease-in-out hover:w-[12px]">
                        </span>
                        <span className="block bg-custom-orange rounded-md h-[3px] mb-[5px] transition-all duration-200 ease-in-out hover:w-[22px]">
                        </span>
                        <span className="block bg-custom-orange rounded-md h-[3px] mb-0 transition-all duration-200 ease-in-out hover:w-[26px]">
                        </span>
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
                    <button onClick={openOrder} className="p-4 bg-orange-500 text-white">
                        Order Now
                    </button>
                    <OrderComponent open={isOrderOpen} close={closeOrder} />
                    

                </div>
            </div>





            {/* Login and SignUp المربع (Modal) */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 w-[40%]">


                        {/* التبويبات للتبديل بين Login و Create Account */}
                        <div className="flex justify-between mb-4">
                            <button
                                className={`px-4 py-2 w-[50%] text-center ${activeTab === 'login' ? 'border-b-2 border-[#ff5f00] text-orange-600 ' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('login')}
                            >
                                Login
                            </button>
                            <button
                                className={`px-4 py-2 w-[50%] text-center ${activeTab === 'signup' ? 'border-b-2 border-[#ff5f00] text-orange-600 ' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('signup')}
                            >
                                Create an Account
                            </button>
                        </div>

                        {/* محتوى Login */}
                        {activeTab === 'login' && (
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    placeholder="+20 xx xxx xxxxx"
                                    className="border border-gray-300 rounded w-full py-2 px-3 mb-3 focus:outline-none focus:border-orange-500"
                                />
                                <p className="text-red-500 text-xs italic">
                                    You must enter your phone number
                                </p>
                                <button
                                    className="bg-orange-500 text-white font-bold py-2 px-4 w-full rounded mt-4"
                                >
                                    Login
                                </button>
                            </div>
                        )}

                        {/* محتوى Create an Account */}
                        {activeTab === 'signup' && (
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    placeholder="+20 xx xxx xxxxx"
                                    className="border border-gray-300 rounded w-full py-2 px-3 mb-3 focus:outline-none focus:border-orange-500"
                                />
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="border border-gray-300 rounded w-full py-2 px-3 mb-3 focus:outline-none focus:border-orange-500"
                                />
                                <button
                                    className="bg-orange-500 text-white font-bold py-2 px-4 w-full rounded mt-4"
                                >
                                    Create an Account
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}



        </>
    )
}