import { FaCartShopping, FaEye, FaEyeSlash } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

export default function Header() {
    // Drawer Nav
    const [nav, setNav] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('login');
    const [showPassword, setShowPassword] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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

    const validateInputs = () => {
        if (!phoneNumber) {
            setError('Phone number is required');
            return false;
        }
        if (!password) {
            setError('Password is required');
            return false;
        }
        return true;
    };

    const handleLogin = () => {
        setError('');
        if (validateInputs()) {

            console.log('Logging in with:', phoneNumber, password);

            handleClose();
        }
    };

    const handleSignup = () => {
        setError('');
        if (validateInputs()) {

            console.log('Signing up with:', phoneNumber, password);

            handleClose();
        }
    };

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
                        />
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <div onClick={handleSignupOpen} className="cursor-pointer text-white font-bold text-lg hover:text-custom-orange">
                        Create an account
                    </div>
                    <div onClick={handleLoginOpen} className="cursor-pointer text-white font-bold text-lg hover:text-custom-orange">
                        Login
                    </div>
                </div>

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
                    <Link to={'/AboutUs'}>About Us</Link>
                    <Link to={'/CartDetails'}>CartDetails</Link>
                    <Link to={'/Menu'}>Menu</Link>
                    <Link to={'/'}>Home</Link>
                </div>
            </div>





            {/* Login and SignUp المربع (Modal) */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 w-[40%]">

                        <div className="flex justify-center mb-4">
                            <button
                                className={`px-4 py-2 ${activeTab === 'login' ? 'border-b-2 border-orange-500 text-orange-600' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('login')}
                            >
                                Login
                            </button>
                            <button
                                className={`px-4 py-2 ${activeTab === 'signup' ? 'border-b-2 border-orange-500 text-orange-600' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('signup')}
                            >
                                Create an Account
                            </button>
                        </div>


                        {error && <div className="text-red-500 text-sm mb-3">{error}</div>}

                        {activeTab === 'login' && (
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                                <input
                                    type="text"
                                    placeholder="+20 xx xxx xxxxx"
                                    className="border border-gray-300 rounded w-full py-2 px-3 mb-3 focus:outline-none focus:border-orange-500 text-black"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>

                                <div className="relative mb-3">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-orange-500 text-black"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                                    </button>
                                </div>
                                <div className="flex items-center">
                                    <Link style={{ paddingLeft: 430 }} to="/forgot-password" className="text-sm text-black hover:text-orange-500 ml-5">Forgot Password?</Link>
                                </div>
                                <button onClick={handleLogin} className="bg-orange-500 text-white font-bold py-2 px-4 w-full rounded mt-4">Login</button>
                            </div>
                        )}


                        {activeTab === 'signup' && (
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                                <input
                                    type="text"
                                    placeholder="+20 xx xxx xxxxx"
                                    className="border border-gray-300 rounded w-full py-2 px-3 mb-3 focus:outline-none focus:border-orange-500 text-black"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                <button onClick={handleSignup} className="bg-orange-500 text-white font-bold py-2 px-4 w-full rounded mt-4">Create an Account</button>


                                <div className="mt-4 text-center text-sm text-gray-500">
                                    By continuing, I agree to the
                                    <a href="/terms" className="text-orange-600 mx-1 hover:underline">Terms of Service</a>
                                    and
                                    <a href="/privacy" className="text-orange-600 mx-1 hover:underline">Privacy Policy</a>.
                                </div>
                            </div>
                        )}



                    </div>
                </div>
            )}
        </>
    );
}
