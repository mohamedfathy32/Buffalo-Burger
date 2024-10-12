/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { authRegister } from "../utils/firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../utils/firebase/firebase";

export default function Signup({ onClose , onSignupSuccess }) {
    const [username, setUsername] = useState(""); // State for username
    const [email, setEmail] = useState(""); // State for email
    const [password, setPassword] = useState(""); // State for password
    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState({ username: "", email: "", password: "" }); // State for error messages

    // Function to validate user inputs
    const validateInputs = () => {
        let isValid = true; // Flag to check overall validity
        const newError = { username: "", email: "", password: "" }; // Reset error messages

        if (!username) {
            newError.username = "Username is required"; // Check if username is provided
            isValid = false;
        } else if (!/^[a-zA-Z0-9]{3,}$/.test(username)) { // Check username format
            newError.username = "Username must be at least 3 characters long and contain only letters and numbers";
            isValid = false;
        }

        if (!email) {
            newError.email = "Email is required"; // Check if email is provided
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { // Check email format
            newError.email = "Please enter a valid email address";
            isValid = false;
        }

        if (!password) {
            newError.password = "Password is required"; // Check if password is provided
            isValid = false;
        } else if (password.length < 6) { // Check password length
            newError.password = "Password must be at least 6 characters long";
            isValid = false;
        }

        setError(newError); // Update error state
        return isValid; // Return overall validity
    };

    // Function to handle signup process
    const handleSignup = async () => {
        if (validateInputs()) { // Validate inputs
            try {
                const res = await authRegister(email, password); // Attempt to register user
                if (res.uid) {
                    // تخزين بيانات المستخدم في Firestore
                    await setDoc(doc(db, "users", res.uid), {
                        email: email,
                        username: username // تخزين اسم المستخدم
                    });
                    localStorage.setItem("userId", res.uid);
                    onSignupSuccess();
                    onClose();
                }
                // eslint-disable-next-line no-empty
            } catch (error) {
                console.log(error)
            }
        }
    };

    return (
        <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input
                type="text"
                placeholder="Enter your username"
                className={`text-black border rounded-[10px] w-full py-2 px-3 mb-3 focus:outline-none
                     ${error.username ? 'border-red-500 bg-red-100' : 'focus:border-black focus:bg-[#ffefe6]'} `}
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Update username state on change
            />
            {error.username && <div className="text-red-500 text-sm mb-3">{error.username}</div>} {/* Display username error message */}

            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
                type="email"
                placeholder="Enter your email"
                className={`text-black border rounded-[10px] w-full py-2 px-3 mb-3 focus:outline-none
                     ${error.email ? 'border-red-500 bg-red-100' : 'focus:border-black focus:bg-[#ffefe6]'}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state on change
            />
            {error.email && <div className="text-red-500 text-sm mb-3">{error.email}</div>} {/* Display email error message */}

            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <div className="relative mb-3">

                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className={`text-black border rounded-[10px] w-full py-2 px-3 focus:outline-none
                     ${error.password ? 'border-red-500 bg-red-100' : 'focus:border-orange-500'}`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update password state on change
                />
                <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                </button>
            </div>
            {error.password && <div className="text-red-500 text-sm mb-3">{error.password}</div>} {/* Display password error message */}

            <button onClick={handleSignup} className="bg-orange-500 text-white font-bold py-2 px-4 w-full rounded mt-4">
                Create an Account
            </button>

            <div className="mt-4 text-center text-sm text-gray-500">
                By continuing, I agree to the
                <Link to="/TermsAndConditions" className="text-orange-600 mx-1 hover:underline" onClick={onClose}>Terms of Service</Link>
                and
                <Link to="/PrivacyPolicy" className="text-orange-600 mx-1 hover:underline" onClick={onClose}>Privacy Policy</Link>.
            </div>
        </div>
    );
}
