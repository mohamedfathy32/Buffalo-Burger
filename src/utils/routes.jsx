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
        { path: 'Offer/:id', element: <Offer /> },
        { path: 'OrderHistory', element: <OrderHistory /> },
        { path: 'PrivacyPolicy', element: <PrivacyPolicy /> },
        { path: 'ProductDetails/:id', element: <ProductDetails /> },
        { path: 'Profile', element: <Profile /> },
        { path: 'Signup', element: <Signup /> },
        { path: 'TermsAndConditions', element: <TermsAndConditions /> },

        { path: '*', element: <NotFound /> },
    ]
}])