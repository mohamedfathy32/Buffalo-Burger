import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import CartDetails from "../pages/CartDetails";
import OurBranches from "../pages/Branches";
import FranchiseRequest from "../pages/Franchise";
import Login from "../pages/Login";
import Loyalty from "../pages/Loyalty";
import Menu from "../pages/Menu";
import Offer from "../pages/Offer";
import OrderHistory from "../pages/OrderHistory";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ProductDetails from "../pages/Product";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import TermsAndConditions from "../pages/TermsAndConditions";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([{
    path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'AboutUs', element: <AboutUs /> },
        { path: 'OurBranches', element: <OurBranches /> },
        { path: 'CartDetails', element: <CartDetails /> },
        { path: 'FranchiseRequest', element: <FranchiseRequest /> },
        { path: 'Login', element: <Login /> },
        { path: 'Loyalty', element: <Loyalty /> },
        { path: 'Menu', element: <Menu /> },
        { path: 'Offer', element: <Offer /> },
        { path: 'OrderHistory', element: <OrderHistory /> },
        { path: 'PrivacyPolicy', element: <PrivacyPolicy /> },
        { path: 'ProductDetails/:id', element: <ProductDetails /> },
        { path: 'Profile', element: <Profile /> },
        { path: 'Signup', element: <Signup /> },
        { path: 'TermsAndConditions', element: <TermsAndConditions /> },

        { path: '*', element: <NotFound /> },
    ]
}])