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
import MealDetails from "../pages/Menu/MealDetails";
// import OurStory from "../pages/OurStory";
// import OurValues from "../pages/OurValues";
// import QualityControl from "../pages/QualityControl";

export const router = createBrowserRouter([{
    path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'AboutUs', element: <AboutUs /> },
        { path: 'CartDetails', element: <CartDetails /> },
        { path: 'FranchiseRequest', element: <FranchiseRequest /> },
        { path: 'Login', element: <Login /> },
        { path: 'Loyalty', element: <Loyalty /> },
        { path: 'Menu', element: <Menu /> },
        { path: 'MealDetails/:id', element: <MealDetails /> },
        { path: 'OurBranches', element: <OurBranches /> },
        { path: 'PrivacyPolicy', element: <PrivacyPolicy /> },
        { path: 'Signup', element: <Signup /> },
        { path: 'TermsAndConditions', element: <TermsAndConditions /> },
        // { path: 'OurStory', element: <OurStory /> },
        // { path: 'OurValues', element: <OurValues /> },
        // { path: 'QualityControl', element: <QualityControl /> },

        { path: '*', element: <NotFound /> },
    ]
}])