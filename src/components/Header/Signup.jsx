import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { db, register } from "../../utils/firebase";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

export default function SignupModal({ onClose, onSignupSuccess }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState({ username: "", email: "", password: "" });
    const { t, i18n } = useTranslation()

    const validateInputs = () => {
        let isValid = true;
        const newError = { username: "", phone: "", email: "", password: "" };

        if (!username) {
            newError.username = "Username is required";
            isValid = false;
        } else if (!/^[a-zA-Z0-9\s]{3,}$/.test(username)) {
            newError.username = "Username must be at least 3 characters long and contain only letters, numbers, and spaces ";
            isValid = false;
        }
        if (!phone) {
            newError.phone = "phone is required";
            isValid = false;
        } else if (!/^(01)(0|1|2)[0-9]{8}$/.test(phone)) {
            newError.phone = "please enter a valid phone number";
            isValid = false;
        }
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


    const handleSignup = async () => {
        if (validateInputs()) {
            try {
                const res = await register(email, password);
                if (res.uid) {
                    await setDoc(doc(db, "users", res.uid), {
                        email: email,
                        username: username,
                        phone: phone
                    });
                    localStorage.setItem("userId", res.uid);
                    onSignupSuccess();
                    onClose();
                    Swal.fire({
                        title: `${t("Registration Successful")}`,
                        text: `${t("Your account has been created successfully. Welcome!")}`,
                        icon: "success",
                        iconColor: '#ff5f00',
                        confirmButtonText: `${t("OK")}`,
                        customClass: {
                            confirmButton: 'custom-confirm-button'
                        }
                    });

                }
            } catch (error) {
                console.log(error)
            }
        }
    };

    return (
        <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">{t("Username")}</label>
            <input
                type="text"
                placeholder={i18n.language == 'en' ? "Enter your username" : 'أدخل اسم المستخدم الخاص بك'}
                className={`text-black border rounded-[10px] w-full py-2 px-3 mb-3 focus:outline-none
                     ${error.username ? 'border-red-500 bg-red-100' : 'focus:border-black focus:bg-[#ffefe6]'} `}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            {error.username && <div className="text-red-500 text-sm mb-3">{error.username}</div>}


            <label className="block text-gray-700 text-sm font-bold mb-2">{t("Phone number")}</label>
            <input
                type="text"
                placeholder={i18n.language == 'en' ? "Enter your Phone" : 'أدخل رقم هاتفك'}
                className={`text-black border rounded-[10px] w-full py-2 px-3 mb-3 focus:outline-none
                     ${error.phone ? 'border-red-500 bg-red-100' : 'focus:border-black focus:bg-[#ffefe6]'}`}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            {error.phone && <div className="text-red-500 text-sm mb-3">{error.phone}</div>}


            <label className="block text-gray-700 text-sm font-bold mb-2">{t("Email")}</label>
            <input
                type="email"
                placeholder={i18n.language == 'en' ? "Enter your email" : "أدخل بريدك الإلكتروني"}
                className={`text-black border rounded-[10px] w-full py-2 px-3 mb-3 focus:outline-none
                     ${error.email ? 'border-red-500 bg-red-100' : 'focus:border-black focus:bg-[#ffefe6]'}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {error.email && <div className="text-red-500 text-sm mb-3">{error.email}</div>}

            <label className="block text-gray-700 text-sm font-bold mb-2">{t("Password")}</label>
            <div className="relative mb-3">

                <input
                    type={showPassword ? "text" : "password"}
                    placeholder={i18n.language == 'en' ? "Enter your password" : "أدخل كلمة المرور الخاصة بك"}
                    className={`text-black border rounded-[10px] w-full py-2 px-3 focus:outline-none
                     ${error.password ? 'border-red-500 bg-red-100' : 'focus:text-[#ff5f00]'}`}
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

            <button onClick={handleSignup} className="bg-[#ff5f00] text-white font-bold py-2 px-4 w-full rounded mt-4">
                {t("Create an account")}
            </button>

            <div className="mt-4 text-center text-sm text-gray-500">
                {i18n.language == 'en' ? "By continuing, I agree to the" : "أوافق على "}
                <Link to="/Terms" className="text-[#ff5f00] mx-1 hover:underline" onClick={onClose}>{i18n.language == 'en' ? 'Terms of Service' : 'شروط الخدمة'}</Link>
                {i18n.language == 'en' ? 'and' : 'و'}
                <Link to="/Privacy" className="text-[#ff5f00] mx-1 hover:underline" onClick={onClose}>{i18n.language == 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}</Link>.
            </div>
        </div>
    );
}