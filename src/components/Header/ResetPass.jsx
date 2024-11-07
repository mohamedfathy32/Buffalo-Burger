import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useState } from "react";

export default function ResetPassModal() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleResetPassword = async () => {
        if (!email) {
            setMessage("Please enter your email.");
            return;
        }
        try {
            await sendPasswordResetEmail(auth, email);
            setMessage("Check your email for the password reset link.");
        } catch (error) {
            setMessage("Error sending email: " + error.message);
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
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleResetPassword} className="bg-[#ff5f00] text-white font-bold py-2 px-4 w-full rounded mt-4">
                Reset Password
            </button>
            {message && <div className="mt-4 text-gray-700">{message}</div>}
        </div>
    );
}
