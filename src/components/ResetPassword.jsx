import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../utils/firebase/firebase";

export default function ResetPassword() {
    const [email, setEmail] = useState(""); // حالة لتخزين البريد الإلكتروني
    const [message, setMessage] = useState(""); // حالة لتخزين رسالة النجاح أو الخطأ

    const handleResetPassword = async () => {
        if (!email) {
            setMessage("Please enter your email."); // تحقق من إدخال البريد الإلكتروني
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email); // إرسال البريد الإلكتروني لإعادة تعيين كلمة المرور
            setMessage("Check your email for the password reset link."); // رسالة نجاح
        } catch (error) {
            setMessage("Error sending email: " + error.message); // رسالة خطأ
        }
    };

    return (
        <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
                type="email"
                placeholder="Enter your email"
                className="text-black border rounded-[10px] w-full py-2 px-3 mb-3 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // تحديث البريد الإلكتروني
            />
            <button onClick={handleResetPassword} className="bg-orange-500 text-white font-bold py-2 px-4 w-full rounded mt-4">
                Reset Password
            </button>

            {message && <div className="mt-4 text-gray-700">{message}</div>} {/* عرض الرسالة */}
        </div>
    );
}
