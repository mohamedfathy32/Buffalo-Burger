import { useContext, useEffect, useState } from "react";
import { logedContext } from "../isLoged";
import { useNavigate } from "react-router-dom";
import { getUserInfoById, updateUserProfile } from "../utils/firebase";

export default function ProfilePage() {
    const [username, setUsername] = useState('');
    const [useremail, setUseremail] = useState('');
    const [userphone, setUserphone] = useState('');
    const [formData, setFormData] = useState({
        fullName: username,
        phoneNumber: userphone,
        email: useremail,
    });
    const [isChanged, setIsChanged] = useState(false);
    const userId = localStorage.getItem("userId");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Check if the form data has been changed
        setIsChanged(
            value !== (name === "fullName" ? username : name === "phoneNumber" ? userphone : useremail)
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform the save operation (you can implement your save logic here)
        console.log("Saving changes...", formData);

        // After saving, reset isChanged to false
        setIsChanged(false);
        updateUserProfile(userId, formData.fullName);
        alert("Saved changes");
    };

    useEffect(() => {
        const fetchUserInfo = async () => {
            if (userId) {
                const userInfo = await getUserInfoById(userId);
                if (userInfo) {
                    setUsername(userInfo.username);
                    setUseremail(userInfo.email);
                    setUserphone(userInfo.phoneNumber);
                    setFormData({
                        fullName: userInfo.username,
                        phoneNumber: userInfo.phoneNumber || "010",
                        email: userInfo.email,
                    });
                }
            }
        };

        fetchUserInfo();
    }, []);

    const { isLoggedIn } = useContext(logedContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn, navigate]);

    return (
        <>
            <div className="w-full flex justify-center px-2 md:px-10 pt-7 pb-2">
                <div className="w-full flex flex-col md:w-3/5">
                    <div className="flex bg-black rounded-t-md p-3">
                        <h1 className="PSS text-white tracking-wider uppercase text-5xl">Account</h1>
                    </div>
                    <div className="w-full flex flex-col p-1 md:p-4">
                        <div className="flex w-full flex-col md:flex-row">
                            <div className="flex flex-row md:justify-start justify-center items-start px-2 gap-x-4 md:flex-col border-[1px] border-[#f2f2f2] bg-transparent text-center w-full md:w-[30%] pt-5">
                                <p className=" text-base pl-2 cursor-pointer font-bold text-[#1c1c1b] uppercase border-[#ff5f00] border-b-2 md:border-l-2 md:border-b-0">
                                    Profile details
                                </p>
                                <p className=" text-base pl-2 cursor-pointer font-bold text-[#1c1c1b] uppercase">
                                    Address book
                                </p>
                                <p className=" text-base pl-2 cursor-pointer font-bold text-[#1c1c1b] uppercase">
                                    Change password
                                </p>
                            </div>
                            <section className="w-full bg-transparent h-full">
                                <div className="flex flex-col h-full mx-auto py-8 px-8">
                                    <p className=" text-2xl hidden md:block font-bold text-[#1c1c1b]">
                                        Profile details
                                    </p>
                                    <div className="flex flex-col gap-4 w-full">
                                        <form onSubmit={handleSubmit}>
                                            <div className="flex flex-col">
                                                <p className="text-base pb-2 text-[#000]">Full name</p>
                                                <div className="flex flex-col">
                                                    <input
                                                        type="text"
                                                        name="fullName"
                                                        value={formData.fullName}
                                                        onChange={handleInputChange}
                                                        autoComplete="off"
                                                        required
                                                        className="bg-white focus:border-transparent focus:bg-[#ffefe6] disabled:cursor-not-allowed disabled:bg-[#CCCCCC] disabled:text-black rounded-[10px] py-3 px-2 w-full ring-0"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-base pb-2 text-[#000]">Phone number</p>
                                                <div className="flex flex-col">
                                                    <input
                                                        type="text"
                                                        name="phoneNumber"
                                                        value={formData.phoneNumber}
                                                        autoComplete="off"
                                                        required
                                                        className="bg-white focus:border-transparent focus:bg-[#ffefe6] disabled:cursor-not-allowed disabled:bg-[#CCCCCC] disabled:text-black rounded-[10px] py-3 px-2 w-full ring-0"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-base pb-2 text-[#000]">E-mail</p>
                                                <div className="flex flex-col">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        autoComplete="off"
                                                        required
                                                        className="bg-white focus:border-transparent focus:bg-[#ffefe6] disabled:cursor-not-allowed disabled:bg-[#CCCCCC] disabled:text-black rounded-[10px] py-3 px-2 w-full ring-0"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex mt-4">
                                                <button
                                                    type="submit"
                                                    disabled={!isChanged} // Enable button only if the data has been changed
                                                    className="bg-[#ff5f00] text-white h-9 px-4 font-main text-lg rounded-[10px] disabled:bg-[#ffcfb3]"
                                                >
                                                    Save changes
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
