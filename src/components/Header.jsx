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
        // Last Header 
        // <div className="size-full flex justify-center items-center gap-3">
        //     <Link to={'/AboutUs'}>About Us</Link>
        //     <Link to={'/CartDetails'}>CartDetails</Link>
        //     <Link to={'/FranchiseRequest'}>FranchiseRequest</Link>
        //     <Link to={'/Menu'}>Menu</Link>
        //     <Link to={'/'}>Home</Link>
        // </div>

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
                <div className="md:hidden bg-stone-900 shadow-md">
                    <a href="/" className="block px-4 py-2 hover:bg-stone-800 hover:text-custom-orange">Home</a>
                    <a href="/AboutUs" className="block px-4 py-2 hover:bg-stone-800 hover:text-custom-orange">About</a>
                    <a href="/CartDetails" className="block px-4 py-2 bg-stone-800 hover:text-custom-orange">Cart</a>
                    <a href="/Menu" className="block px-4 py-2 hover:bg-stone-800 hover:text-custom-orange">Menu</a>
                </div>
            )}

            {/* Seconed Header Delivery Address */}

            <div className="bg-stone-900 w-full max-w-full h-12 flex justify-center items-center">
                <div className="hidden md:flex space-x-4">
                    <Link to={'/AboutUs'}>About Us</Link>
                    <Link to={'/CartDetails'}>CartDetails</Link>
                    <Link to={'/FranchiseRequest'}>FranchiseRequest</Link>
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