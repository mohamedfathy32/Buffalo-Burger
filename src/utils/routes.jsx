import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import BranchesPage from "../pages/Branches";
import CartPage from "../pages/Cart";
import FranchisePage from "../pages/Franchise";
import LoginPage from "../pages/Login";
import LoyaltyPage from "../pages/Loyalty";
import MenuPage from "../pages/Menu";
import OfferPage from "../pages/Offer";
import OrderHistoryPage from "../pages/OrderHistory";
import PrivacyPage from "../pages/Privacy";
import ProductPage from "../pages/Product";
import ProfilePage from "../pages/Profile";
import SignupPage from "../pages/Signup";
import TermsPage from "../pages/Terms";
import NotFoundPage from "../pages/NotFound";

export const router = createBrowserRouter([{
    path: '/', element: <Layout />, children: [
        { index: true, element: <HomePage /> },
        { path: 'About', element: <AboutPage /> },
        { path: 'Branches', element: <BranchesPage /> },
        { path: 'Cart', element: <CartPage /> },
        { path: 'Franchise', element: <FranchisePage /> },
        { path: 'Login', element: <LoginPage /> },
        { path: 'Loyalty', element: <LoyaltyPage /> },
        { path: 'Menu', element: <MenuPage /> },
        { path: 'Offer', element: <OfferPage /> },
        { path: 'OrderHistory', element: <OrderHistoryPage /> },
        { path: 'Privacy', element: <PrivacyPage /> },
        { path: 'Product/:id', element: <ProductPage /> },
        { path: 'Profile', element: <ProfilePage /> },
        { path: 'Signup', element: <SignupPage /> },
        { path: 'Terms', element: <TermsPage /> },
        { path: '*', element: <NotFoundPage /> },
    ]
}])