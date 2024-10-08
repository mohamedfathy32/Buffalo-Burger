import { FaCartShopping } from "react-icons/fa6";

import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);


    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('');

    const handleLoginOpen = () => {
        setActiveTab('login')
        setIsOpen(true);
    }
    const handleSignupOpen = () => {
        setActiveTab('signup');
        setIsOpen(true);
    }



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

            {nav && (
                <div className="h-screen flex items-center justify-center bg-gray-100">
                    <div className="fixed top-0 left-0 w-64 h-full bg-stone-900 shadow-lg transition-transform">
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
                                        <a className="p-1 undefined" href="/loyalty">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="text-white flex flex-row justify-between items-center font-bold font-main flex">
                                <div className="gap-x-1 text-white flex flex-row"><svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false"
                                    aria-hidden="true" viewBox="0 0 24 24" data-testid="LanguageIcon">
                                    <path
                                        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z">
                                    </path>
                                </svg>Language</div>
                                <div className="bg-primary-gray w-fit  rounded-lg">
                                    <div
                                        className="cursor-pointer border-2 !text-white  border-none rounded-lg  h-max gap-2   !text-primary-main border border-primary-main">
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
                                        className="block flex flex-col pb-3 border-b border-b-secondary-gray-50 !space-y-4 mb-3  block">
                                        <div className="text-white font-main font-bold">Login</div>
                                        <div className="text-white font-main font-bold">Create an account</div>
                                    </div>
                                    <div className="flex flex-col !space-y-4  border-b pb-3 border-b-secondary-gray-50">
                                        <div className="text-white font-main font-bold"><a className="p-1 undefined"
                                            href="/cart-details">Cart</a></div>
                                        <div className="text-white font-main font-bold"><img
                                            className="w-7 inline-block  inline-block"
                                            src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/loyalty-icon.svg" />My
                                            Loyalty Points</div>
                                    </div>
                                    <div className="flex flex-col !space-y-4 border-b py-3 border-b-secondary-gray-50">
                                        <div className="text-white font-main font-bold"><img className="w-7 inline-block"
                                            src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/loyalty-icon.svg" />Feedback
                                        </div>
                                        <div className="text-white font-main font-bold"><a className="p-1 undefined"
                                            href="tel:19914"><img className="w-7 inline-block  inline-block"
                                                src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/call-support-icon.svg" />Call
                                            Support</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-8">
                                </div>
                            </section>
                        </div>
                    </div>
                </div>






                // <div className="md:hidden bg-stone-900 shadow-md">
                //     <a href="/" className="block px-4 py-2 hover:bg-stone-800 hover:text-custom-orange">Home</a>
                //     <a href="/AboutUs" className="block px-4 py-2 hover:bg-stone-800 hover:text-custom-orange">About</a>
                //     <a href="/CartDetails" className="block px-4 py-2 bg-stone-800 hover:text-custom-orange">Cart</a>
                //     <a href="/Menu" className="block px-4 py-2 hover:bg-stone-800 hover:text-custom-orange">Menu</a>
                // </div>
            )}

            {/* Seconed Header Delivery Address */}

            <div className="bg-stone-900 w-full max-w-full h-12 flex justify-center items-center">
                <div className="hidden md:flex space-x-4">
                    <Link to={'/AboutUs'}>About Us</Link>
                    <Link to={'/CartDetails'}>CartDetails</Link>
                    <Link to={'/Menu'}>Menu</Link>
                    <Link to={'/'}>Home</Link>
                </div>
            </div>





            {/* المربع (Modal) */}
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