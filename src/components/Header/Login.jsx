/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import ResetPassModal from "./ResetPass";
import { login } from "../../utils/firebase";
import { useTranslation } from "react-i18next";

export default function LoginModal({ onClose, onLoginSuccess }) {
    const [email, setEmail] = useState(""); // State for storing the email
    const [password, setPassword] = useState(""); // State for storing the password
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [error, setError] = useState({ email: "", password: "" }); // State for storing error messages
    const [isResetPasswordVisible, setResetPasswordVisible] = useState(false); // حالة لعرض نموذج إعادة تعيين كلمة المرور
    const { t, i18n } = useTranslation()

    // Function to validate inputs
    const validateInputs = () => {
        let isValid = true; // Variable to track validity
        const newError = { email: "", password: "" }; // Reset error messages

        // Validate email
        if (!email) {
            newError.email = "Email is required"; // Error for empty email
            isValid = false; // Mark inputs as invalid
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { // Check email format
            newError.email = "Please enter a valid email address";
            isValid = false; // Mark inputs as invalid
        }

        // Validate password
        if (!password) {
            newError.password = "Password is required"; // Error for empty password
            isValid = false; // Mark inputs as invalid
        } else if (password.length < 6) { // Check password length
            newError.password = "Password must be at least 6 characters long";
            isValid = false; // Mark inputs as invalid
        }

        setError(newError); // Update error state
        return isValid; // Return overall validity
    };

    // Function to handle login
    const handleLogin = async () => {
        setError({ email: "", password: "" }); // Reset errors
        if (validateInputs()) { // Validate inputs
            const res = await login(email, password); // Attempt to log in
            if (res.uid) {
                localStorage.setItem("userId", res.uid);
                onLoginSuccess();
                onClose(); // Close modal on successful login
            }
        }
    };

    const handleResetPasswordClick = () => {
        setResetPasswordVisible(true); // تغيير الحالة لعرض نموذج إعادة تعيين كلمة المرور
    };

    return (
        <div>
            {isResetPasswordVisible ? (
                <ResetPassModal />
            ) : (
                <>
                    <label className="block text-gray-700 text-sm font-bold mb-2">{t("Email")}</label>
                    <input
                        type="email"
                        placeholder={i18n.language == 'en' ? "Enter your email" : "أدخل بريدك الإلكتروني"}
                        className={`text-black border rounded-[10px] w-full py-2 px-3 mb-3 focus:outline-none ${error.email ? 'border-red-500 bg-red-100' : 'focus:border-black focus:bg-[#ffefe6]'}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Update email state on change
                    />
                    {error.email && <div className="text-red-500 text-sm mb-3">{error.email}</div>} {/* Display email error message */}

                    <label className="block text-gray-700 text-sm font-bold mb-2">{t("Password")}</label>
                    <div className="relative mb-3">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder={i18n.language == 'en' ? "Enter your password" : "أدخل كلمة المرور الخاصة بك"}
                            className={`text-black border rounded-[10px] w-full py-2 px-3 focus:outline-none ${error.password ? 'border-red-500 bg-red-100' : 'focus:border-orange-500'}`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Update password state on change
                        />
                        <button
                            type="button"
                            className="absolute end-3 top-1/2 transform -translate-y-1/2"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                        </button>
                    </div>
                    {error.password && <div className="text-red-500 text-sm mb-3">{error.password}</div>} {/* Display password error message */}
                    <div className="flex items-center justify-end">
                        <p onClick={handleResetPasswordClick} className="text-sm cursor-pointer text-black hover:text-orange-500 text-end">{i18n.language == 'en' ? "Forgot Password?" : 'نسيت كلمة السر ؟'}</p>
                    </div>
                    <button onClick={handleLogin} className="bg-orange-500 text-white font-bold py-2 px-4 w-full rounded mt-4">
                        {t("Login")}
                    </button>
                </>
            )}
        </div >
    );
}