import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import { FaCartShopping } from "react-icons/fa6";
import getUsernameById from "../utils/firebase/getUsernameById";

export default function Header() {
    const [nav, setNav] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('login');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [isOpenDrop, setIsOpenDrop] = useState(false); // State to manage dropdown visibility

    const handleClick = () => setNav(!nav);
    const handleLoginOpen = () => {
        setActiveTab('login');
        setIsOpen(true);
    };

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

    return (
        <>
            <nav className="bg-stone-900 w-full flex relative justify-center md:justify-between items-center h-16 px-12 shadow-white">
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center cursor-pointer border-none rounded-lg">
                        <div className="flex items-center gap-2">
                            <span className="font-main">العربية</span>
                            <img className="w-4 h-4 rounded-full"
                                src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/eg-flag.png"
                                alt="Arabic language" />
                        </div>
                    </div>

                    <div className="hidden lg:block bg-custom-orange p-2 text-white rounded-md cursor-pointer">
                        <span className="text-base">My Loyalty Points</span>
                    </div>

                    <Link to="/CartDetails" className="flex items-center text-white hover:text-custom-orange font-bold text-lg uppercase">
                        <FaCartShopping className="text-2xl mr-1" />
                        Cart
                    </Link>
                    <div className="flex items-center justify-center w-7 h-7 bg-white text-stone-900 rounded-full">
                        0
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

            {nav && (
                <div className="md:hidden bg-stone-900 shadow-md">
                    <Link to="/" className="block px-4 py-2 hover:bg-stone-800 hover:text-custom-orange">Home</Link>
                    <Link to="/AboutUs" className="block px-4 py-2 hover:bg-stone-800 hover:text-custom-orange">About Us</Link>
                    <Link to="/CartDetails" className="block px-4 py-2 hover:bg-stone-800 hover:text-custom-orange">Cart</Link>
                    <Link to="/Menu" className="block px-4 py-2 hover:bg-stone-800 hover:text-custom-orange">Menu</Link>
                </div>
            )}

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

                        {activeTab === 'login' && <Login onClose={handleClose} onLoginSuccess={() => successfulUser()} />}
                        {activeTab === 'signup' && <Signup onClose={handleClose} onSignupSuccess={() => successfulUser()} />}
                    </div>
                </div>
            )}
        </>
    );
}
