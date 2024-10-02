import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import CartDetails from "../pages/CartDetails";
import FranchiseRequest from "../pages/FranchiseRequest";
import Login from "../pages/Login";
import Loyalty from "../pages/Loyalty";
import Menu from "../pages/Menu/Menu";
import OurBranches from "../pages/OurBranches";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Signup from "../pages/Signup";
import TermsAndConditions from "../pages/TermsAndConditions";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([{
    path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'AboutUs', element: <AboutUs /> },
        { path: 'CartDetails', element: <CartDetails /> },
        { path: 'FranchiseRequest', element: <FranchiseRequest /> },
        { path: 'Login', element: <Login /> },
        { path: 'Loyalty', element: <Loyalty /> },
        { path: 'Menu', element: <Menu /> },
        { path: 'OurBranches', element: <OurBranches /> },
        { path: 'PrivacyPolicy', element: <PrivacyPolicy /> },
        { path: 'Signup', element: <Signup /> },
        { path: 'TermsAndConditions', element: <TermsAndConditions /> },

        { path: '*', element: <NotFound /> },
    ]
}])