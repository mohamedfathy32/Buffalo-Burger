import { CiCircleMinus } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../components/ProductCard";
import { productList } from "../utils/data";
import { useState, useEffect, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { Counter } from "../utils/context";

export default function CartPage() {
    const [cart, setCart] = useState([]);
    const { setCounter } = useContext(Counter)

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
        setCounter(savedCart.length)
    }, []);

    const handleQuantity = (id, change) => {
        const updatedCart = cart.map(item => item.id === id
            ? { ...item, quantity: item.quantity + change, totalPrice: (item.quantity + change) * item.price }
            : item
        )
            .filter(item => item.quantity > 0);

        if (updatedCart.length === 0) {
            localStorage.removeItem("cart");
        } else {
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
        setCart(updatedCart);
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.totalPrice, 0);
    };

    const handleCheckout = async () => {
        try {
            await addDoc(collection(db, "cart"), { cart });
            alert("Cart successfully checked out!");
            setCart([]);
            localStorage.removeItem("cart");
        } catch (error) {
            console.error("Error checking out: ", error);
        }
    };

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        nextArrow: <FaArrowAltCircleRight className="text-xl text-orange-500" />,
        prevArrow: <FaArrowAltCircleRight className="text-xl text-orange-500 rotate-180" />,
    };

    return (
        <div className="flex min-h-[100vh] gap-4 mx-4 md:mx-[60px] lg:flex-row flex-col">
            <div className="lg:w-2/3 flex flex-col md:flex-row w-full justify-between gap-x-8 my-8">
                <div className="w-full">
                    <div className="bg-gray-100 flex flex-col pb-6 rounded-[20px] lg:min-w-[512px] w-[100%] lg:w-full">
                        <div className="w-full px-4 py-6 md:p-6 rounded-2xl flex justify-between">
                            <div className="flex items-center w-1/3">
                                <span className="uppercase text-3xl font-bold">CART</span>
                                <span className="flex items-center justify-center bg-black rounded-full h-6 w-6 text-white text-sm mx-2">{cart.length}</span>
                            </div>
                            <div className="lg:flex items-center w-1/3 hidden">
                                <span className="w-1/2 text-gray-400 text-center ml-6">Qty</span>
                                <span className="w-1/2 text-gray-400 text-center ml-6">Total</span>
                            </div>
                        </div>
                        {cart.length === 0 && <div className="mx-auto text-sm">There are no items in your cart</div>}
                        {cart.map(item =>
                            <div key={item.id} className="w-full flex lg:flex-row flex-col ml-auto items-center mb-3">
                                <div className="w-11/12 lg:w-2/3 flex items-center bg-white p-2 mx-4 rounded-[10px] rounded-b-none md:rounded-b-[10px]">
                                    <img alt={item.title} src={item.image} className="w-20 h-20" />
                                    <div className="ms-4 capitalize">
                                        <p className="font-bold">{item.title}</p>
                                        <p className="text-gray-400 text-sm">{item.description}</p>
                                    </div>
                                </div>
                                <div className="w-1/3 flex justify-around">
                                    <div className="w-1/3 flex items-center">
                                        <button onClick={() => { handleQuantity(item.id, -1) }}>
                                            <CiCircleMinus className="text-2xl" />
                                        </button>
                                        <span className="mx-5 font-bold">{item.quantity}</span>
                                        <button onClick={() => { handleQuantity(item.id, 1) }}>
                                            <IoIosAddCircleOutline className="text-2xl text-orange-600" />
                                        </button>
                                    </div>
                                    <div className="w-1/3 lg:flex justify-center font-bold">
                                        <span>{item.totalPrice}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {cart.length !== 0 && <>
                        <div className="mt-4 mb-4 text-[28px] text-center md:text-left md:text-3xl font-bold md:ml-8">YOU MIGHT LIKE TO ADD</div>
                        <div className="w-full my-6">
                            <Slider {...sliderSettings} >
                                {productList.map(product => product.topSelling &&
                                    <div key={product.title} style={{ height: 500 }} className="pt-28 px-10 flex items-center justify-center rounded-md">
                                        <ProductCard key={product.id} product={product} />
                                    </div>
                                )}
                            </Slider>
                        </div>
                    </>}
                </div>
            </div >
            {cart.length !== 0 &&
                <div id="right" className="lg:w-1/3 flex flex-col py-6">
                    <div id="special req" className="w-full bg-gray-100 p-4 my-2 mx-0 rounded-xl md:p-6 lg:p-6">
                        <div className="w-full flex flex-col">
                            <p className="font-main text-base font-bold text-primary-gray uppercase">Special Requests</p>
                            <p className="text-xs bg-gray-100 mb-2 text-gray-400">No extras are allowed as a special request.</p>
                            <textarea className="border-[1px] border-gray-300 resize-none focus:outline-none focus:border-transparent bg-secondary-gray-10 focus:bg-secondary-main-10 rounded-[10px] py-3 px-2 h-[80px] border-none bg-white" autoComplete="off" placeholder="Special Requests" rows="5" maxLength="250"></textarea>
                        </div>
                    </div>
                    <div id="total" className="w-full bg-gray-100 p-4 my-2 mx-0 rounded-xl md:p-6 lg:p-6">
                        <div className="w-full flex flex-col">
                            <div className="flex justify-between">
                                <span>Sub total :</span>
                                <span>EGP {getTotalPrice() - getTotalPrice() * 0.14}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Vat :</span>
                                <span>EGP {(getTotalPrice() * 0.14)}</span>
                            </div>
                            <div className="flex justify-between border-t border-dashed border-t-gray-400 pt-3 my-1">
                                <span className="text-xl text-orange-500 font-bold">TOTAL </span>
                                <span className="text-xl text-orange-500 font-bold">EGP {(getTotalPrice())}</span>
                            </div>
                            <div>
                                <span className="text-gray-400 text-xs">Including VAT</span>
                            </div>
                        </div>
                    </div>
                    <button className="p-3 uppercase border border-orange-500 rounded-lg text-orange-500 font-bold my-1" onClick={() => { }}>+ add more items</button>
                    <button className="p-3 uppercase bg-orange-500 rounded-lg font-bold text-white my-1" onClick={handleCheckout}>Checkout</button>
                </div>
            }
        </div >
    );
}