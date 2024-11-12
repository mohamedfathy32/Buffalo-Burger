import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import ResetPassModal from "./ResetPass";
import { login } from "../../utils/firebase";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
export default function LoginModal({ onClose, onLoginSuccess }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState({ email: "", password: "" });
    const [isResetPasswordVisible, setResetPasswordVisible] = useState(false);
    const { t, i18n } = useTranslation()

    const validateInputs = () => {
        let isValid = true;
        const newError = { email: "", password: "" };

        if (!email) {
            newError.email = "Email is required";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newError.email = "Please enter a valid email address";
            isValid = false;
        }

        if (!password) {
            newError.password = "Password is required";
            isValid = false;
        } else if (password.length < 6) {
            newError.password = "Password must be at least 6 characters long";
            isValid = false;
        }

        setError(newError);
        return isValid;
    };

    const handleLogin = async () => {
        setError({ email: "", password: "" });
        if (validateInputs()) {
            const res = await login(email, password);
            if (res.uid) {
                localStorage.setItem("userId", res.uid);
                onLoginSuccess();
                onClose();
                Swal.fire({
                    title: `${t("Logged In!")}`,
                    text: `${t("You have logged in successfully.")} ${t("Welcome back!")}`,
                    icon: "success",
                    iconColor: '#ff5f00',
                    confirmButtonText: `${t("OK")}`,
                    customClass: {
                        confirmButton: 'custom-confirm-button'
                    }
                })
            }
        }
    };

    const handleResetPasswordClick = () => {
        setResetPasswordVisible(true);
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
                        className={`text-black border rounded-[10px] w-full py-2 px-3 mb-3 focus:outline-none ${error.email ? 'border-[#ff5f00] bg-red-100' : 'focus:border-black focus:bg-[#ffefe6]'}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error.email && <div className="text-red-500 text-sm mb-3">{error.email}</div>}

                    <label className="block text-gray-700 text-sm font-bold mb-2">{t("Password")}</label>
                    <div className="relative mb-3">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder={i18n.language == 'en' ? "Enter your password" : "أدخل كلمة المرور الخاصة بك"}
                            className={`text-black border rounded-[10px] w-full py-2 px-3 focus:outline-none ${error.password ? 'border-[#ff5f00] bg-red-100' : 'focus:border-black focus:bg-[#ffefe6]'}`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="absolute end-3 top-1/2 transform -translate-y-1/2"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                        </button>
                    </div>
                    {error.password && <div className="text-red-500 text-sm mb-3">{error.password}</div>}
                    <div className="flex items-center justify-end">
                        <p onClick={handleResetPasswordClick} className="text-sm cursor-pointer text-black hover:text-[#ff5f00] text-end">{i18n.language == 'en' ? "Forgot Password?" : 'نسيت كلمة السر ؟'}</p>
                    </div>
                    <button onClick={handleLogin} className="bg-[#ff5f00] text-white font-bold py-2 px-4 w-full rounded mt-4">
                        {t("Login")}
                    </button>
                </>
            )}
        </div >
    );
}