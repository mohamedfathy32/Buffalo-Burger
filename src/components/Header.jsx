import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);
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
                            className="flex justify-center align-middle font-main text-lg font-bold hover:text-custom-orange uppercase text-white cursor-pointer">
                            <FontAwesomeIcon icon={faCartShopping}> 
                                Cart
                            </FontAwesomeIcon>
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
                    <div className="font-main text-lg font-bold text-white hover:text-custom-orange flex justify-center cursor-pointer">
                        Create an account
                    </div>
                    <div className="font-main text-lg font-bold text-white hover:text-custom-orange flex justify-center cursor-pointer">
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



        </>
    )
}