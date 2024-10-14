import { useContext, useEffect } from "react";
import { logedContext } from "../isLoged";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {


    const { isLoggedIn } = useContext(logedContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn, navigate]);

    return (
        <div>
            profilePage
        </div>
    )
}