import { FaCartShopping, FaEye, FaEyeSlash } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

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
    };

    const handleSignupOpen = () => {
        setActiveTab('signup');
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
        setError('');
        setPhoneNumber('');
        setPassword('');
    };

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
            <nav className="bg-stone-900 w-full flex relative justify-center md:justify-between items-center h-16 px-12 shadow-white">
                {/* Left Section */}
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

                {/* Logo */}
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

                {/* Right Section */}
                <div className="hidden md:flex items-center gap-4">
                    <div onClick={handleSignupOpen} className="cursor-pointer text-white font-bold text-lg hover:text-custom-orange">
                        Create an account
                    </div>
                    <div onClick={handleLoginOpen} className="cursor-pointer text-white font-bold text-lg hover:text-custom-orange">
                        Login
                    </div>
                </div>

                {/* Mobile Hamburger */}
                <div className="block md:hidden absolute left-6" onClick={handleClick}>
                    <button className="flex flex-col items-center justify-center gap-1">
                        <span className="block bg-custom-orange w-6 h-[3px] rounded"></span>
                        <span className="block bg-custom-orange w-6 h-[3px] rounded"></span>
                        <span className="block bg-custom-orange w-6 h-[3px] rounded"></span>
                    </button>
                </div>
            </nav>

            {/* Drawer Section */}
            {nav && <div className="fixed inset-0 bg-black opacity-50" onClick={handleClick}></div>}
            {nav && (
                <div className="md:hidden bg-stone-900 shadow-md">
                    <Link to="/" className="block px-4 py-2 hover:bg-stone-800 hover:text-custom-orange">Home</Link>
                    <Link to="/AboutUs" className="block px-4 py-2 hover:bg-stone-800 hover:text-custom-orange">About Us</Link>
                    <Link to="/CartDetails" className="block px-4 py-2 hover:bg-stone-800 hover:text-custom-orange">Cart</Link>
                    <Link to="/Menu" className="block px-4 py-2 hover:bg-stone-800 hover:text-custom-orange">Menu</Link>
                </div>
            )}

            {/* Modal Section */}
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

                        {error && <div className="text-red-500 text-sm mb-3">{error}</div>}

                        {activeTab === 'login' && (
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                                <input
                                    type="text"
                                    placeholder="+20 xx xxx xxxxx"
                                    className="border rounded-[10px] w-full py-2 px-3 mb-3 focus:outline-none focus:border-black focus:bg-[#ffefe6] text-black"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>

                                <div className="relative mb-3">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className="border rounded-[10px] w-full py-2 px-3 focus:outline-none focus:border-orange-500 text-black"
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
                                    <Link to="/forgot-password" className="text-sm text-black hover:text-orange-500 ml-5">Forgot Password?</Link>
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
                                    className="border rounded-[10px] w-full py-2 px-3 mb-3 focus:outline-none focus:border-black focus:bg-[#ffefe6] text-black"
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
