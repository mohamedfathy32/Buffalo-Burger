import { Link, useLocation } from "react-router-dom";

export default function Footer() {
    const location = useLocation()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <>
            <footer className={`${location.pathname.includes('Product') || location.pathname.includes('Cart') ? 'hidden' : 'flex'} relative  flex-col bg-stone-900 text-white p-6`}>
                <div className="w-fit mx-auto m-auto my-4 md:flex md:flex-row rtl:md:justify-end md:justify-start md:ml-0 rtl:md:mr-0 lg:flex rtl:lg:justify-end lg:flex-row lg:justify-start lg:ml-0 rtl:lg:mr-0">
                    <img
                        alt="Buffalo Burger logo"
                        loading="lazy"
                        width="262.2"
                        height="55"
                        decoding="async"
                        data-nimg="1"
                        src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/headerLogo.svg"
                        style={{ color: "transparent" }}
                    />
                </div>
                <div className="text-base flex text-center flex-col md:flex-row md:text-left md:content-evenly md:ml-8 lg:flex-row lg:text-left lg:content-evenly lg:ml-8">
                    <div className="border-b border-secondary-gray-100 mr-0 md:w-1/12 md:mr-24 md:border-0 lg:border-0 lg:w-1/12 lg:mr-24 mainFooGroup rtl:lg:text-right">
                        <Link onClick={scrollToTop}
                            className="p-1 block text-white hover:text-orange-500"
                            to="/Menu">Menu
                        </Link>
                        <Link onClick={scrollToTop}
                            className="p-1 block text-white hover:text-orange-500" to="/">Home
                        </Link>
                        <Link onClick={scrollToTop}
                            className="p-1 block text-white hover:text-orange-500"
                            to="/Cart">
                            Cart details
                        </Link>
                        <Link onClick={scrollToTop}
                            className="p-1 block text-white hover:text-orange-500"
                            to="/Loyalty">
                            Loyalty
                        </Link>
                    </div>

                    <div className="border-b border-secondary-gray-100 mr-0 md:w-1/12 md:mr-24 md:border-0 lg:border-0 lg:w-1/12 lg:mr-24 rtl:lg:text-right">
                        <Link onClick={scrollToTop} className="p-1 block text-white hover:text-orange-500" to="/About">
                            About us
                        </Link>
                        <Link onClick={scrollToTop} className="p-1 block text-white hover:text-orange-500" to="/Franchise">
                            Franchise Request
                        </Link>
                        <Link onClick={scrollToTop} className="p-1 block text-white hover:text-orange-500" to="/Branches">
                            Our Branches
                        </Link>
                        <Link onClick={scrollToTop} className="p-1 block text-white hover:text-orange-500" to="/Privacy">
                            Privacy policy
                        </Link>
                        <Link onClick={scrollToTop} className="p-1 block text-white hover:text-orange-500" to="/Terms">
                            Terms and conditions
                        </Link>
                    </div>

                    <div className="block links-group auth-group mr-0 md:w-1/12 md:mr-24 lg:w-1/12 lg:mr-24 rtl:lg:text-right">
                        <p className="cursor-pointer hover:text-orange-500 py-1">Login</p>
                        <p className="cursor-pointer hover:text-orange-500 py-1">Signup</p>
                    </div>

                    <div className="mr-0 lg:w-1/12 lg:mr-24 rtl:lg:text-right block">
                        <p className="py-1">Talk to us</p>
                        <p className="text-white hover:text-orange-500">
                            <a href="tel:19914">
                                <span className="hot-line" style={{ fontSize: 30 }}>19914</span>
                            </a>
                        </p>
                    </div>

                    <div className="hidden w-max lg:block ">
                        <div className="absolute right-24 w-max rtl:right-[90%] bg-primary-gray">
                            <div className="cursor-pointer border-2 !text-white border-none rounded-lg h-max gap-2">
                                <div className="flex flex-row justify-center items-center gap-2">
                                    <span>العربية</span>
                                    <img
                                        className="w-4 h-4 rounded-full"
                                        src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/eg-flag.png"
                                        alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-10 md:flex md:justify-between md:ml-8 md:mt-16 lg:flex lg:justify-between lg:ml-8 lg:mt-16">
                        <p>© 2022 Buffalo Burger inc.</p>
                        <div
                            id="socialWrapper"
                            className="p-4 md:p-0 w-full justify-center gap-4 flex md:w-36 md:justify-evenly lg:flex lg:w-36 lg:justify-evenly">
                            <a
                                target="_blank"
                                className="hover:border-orange-500 hover:border-2 hover:rounded-full max-w-[30px] max-h-[30px]"
                                href="https://www.facebook.com/BuffaloBurger">
                                <img
                                    src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/facebook.png"
                                    alt="facebook" />
                            </a>
                            <a
                                target="_blank"
                                className="hover:border-orange-500 hover:border-2 hover:rounded-full max-w-[30px] max-h-[30px]"
                                href="https://www.instagram.com/buffalo_burger">
                                <img
                                    src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/inst.png"
                                    alt="instagram" />
                            </a>
                            <a
                                target="_blank"
                                className="hover:border-orange-500 hover:border-2 hover:rounded-full max-w-[30px] max-h-[30px]"
                                href="https://twitter.com/buffalo_burger">
                                <img
                                    src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/newTwitter.png"
                                    alt="twitter" />
                            </a>
                            <a
                                target="_blank"
                                className="hover:border-orange-500 hover:border-2 hover:rounded-full max-w-[30px] max-h-[30px]"
                                href="https://www.linkedin.com/company/35516936/admin">
                                <img
                                    src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/linkedin.png"
                                    alt="linkedin" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}