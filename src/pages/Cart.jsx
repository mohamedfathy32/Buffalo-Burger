import { useEffect, useContext } from "react";
import { CiCircleMinus } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { db, getUserInfoById } from "../utils/firebase";
import { setDoc, doc } from "firebase/firestore";
import { useTranslation } from "react-i18next";
import { CartContext } from "../utils/context";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

export default function CartPage() {
    const { cart, setCart } = useContext(CartContext);
    const { t, i18n } = useTranslation();
    const navigate = useNavigate()

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);

    const handleQuantity = (id, change) => {
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + change, totalPrice: (item.quantity + change) * item.price } : item
        ).filter(item => item.quantity > 0);

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart.length ? updatedCart : []);
    };

    const getTotalPrice = () => cart.reduce((total, item) => total + item.totalPrice, 0);

    const handleCheckout = async () => {
        const userID = localStorage.getItem('userId');
        if (!userID) {
            Swal.fire({
                text: `${t("please login first to checked out")}`,
                icon: "warning"
            })
        }

        const userInfo = await getUserInfoById(userID);
        if (userInfo) {
            const date = new Date().toLocaleString('en-US', {
                day: '2-digit', month: '2-digit', year: 'numeric',
                hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
            });

            try {
                await setDoc(doc(db, "orders", `${userInfo.email} ${date.split('/').join('-')}`), {
                    date, id: `${Date.now()}`, cart, userID, totalPrice: getTotalPrice()
                });
                Swal.fire({
                    title: `${t("Order Placed!")}`, // إضافة عنوان للطلب
                    text: `${t("Your order has been placed successfully!")}`,
                    icon: "success",
                    confirmButtonText: `${t("OK")}`,
                    customClass: {
                        confirmButton: 'custom-confirm-button'
                    }
                });


                setCart([]);
                localStorage.removeItem("cart");
            } catch (error) {
                console.error("Error checking out: ", error);
            }
        }
    };
    return (
        <div className="flex min-h-[100vh] gap-4 mx-4 md:mx-[60px] lg:flex-row flex-col" >
            <div className="lg:w-3/4 flex flex-col md:flex-row w-full justify-between gap-x-8 my-8">
                <div className="w-full">
                    <div className="bg-gray-100 flex flex-col pb-6 rounded-[20px] lg:min-w-[512px] w-[100%] lg:w-full">
                        <div className="w-full px-4 py-6 md:p-6 rounded-2xl flex justify-between">
                            <div className="flex items-center ">
                                <span className="uppercase text-3xl font-bold">{t("Cart")}</span>
                                <span className="flex items-center justify-center bg-black rounded-full h-6 w-6 text-white text-sm mx-2">{cart.length}</span>
                            </div>
                            <div className="lg:flex items-center w-1/3 hidden">
                                <span className="w-1/2 text-gray-400 text-center ml-6">{t("Qty")}</span>
                                <span className="w-1/2 text-gray-400 text-center ml-6">{t("Total")}</span>
                            </div>
                        </div>
                        {cart.length === 0 && <div className="mx-auto text-sm">{t("There are no items in your cart")}</div>}
                        {cart.map(item =>
                            <div key={item.id} className="w-full flex lg:flex-row flex-col ml-auto items-center mb-3">
                                <div className="w-11/12 lg:w-2/3 flex items-center bg-white p-2 mx-4 rounded-[10px] rounded-b-none md:rounded-b-[10px]">
                                    <img alt={item.title[i18n.language]} src={item.image} className="w-20 h-20" />
                                    <div className="ms-4 capitalize">
                                        <p className="font-bold">{item.title?.[i18n.language]}</p>
                                        <p className="text-gray-400 text-sm">{(item.description?.ar === '' || item.description?.en === '') ? '' : item.description?.[i18n.language]}</p>
                                    </div>
                                </div>
                                <div className="w-1/3 flex justify-around">
                                    <div className=" flex items-center">
                                        <button onClick={() => { handleQuantity(item.id, -1) }}>
                                            <CiCircleMinus className="text-2xl" />
                                        </button>
                                        <span className="mx-5 font-bold">{item.quantity}</span>
                                        <button onClick={() => { handleQuantity(item.id, 1) }}>
                                            <IoIosAddCircleOutline className="text-2xl text-orange-600" />
                                        </button>
                                    </div>
                                    <div className="w-1/3 lg:flex justify-center font-bold">
                                        <span>{(item.totalPrice).toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div >
            {cart.length !== 0 &&
                <div id="right" className="lg:w-1/4 flex flex-col py-6 ">
                    <div id="special req" className="w-full bg-gray-100 p-4 my-2 mx-0 rounded-xl md:p-6 lg:p-6">
                        <div className="w-full flex flex-col">
                            <p className="font-main text-base font-bold text-primary-gray uppercase">{t("Special Requests")}</p>
                            <p className="text-xs bg-gray-100 mb-2 text-gray-400">{t("No extras are allowed as a special request.")}</p>
                            <textarea className="border-[1px] border-gray-300 resize-none focus:outline-none focus:border-transparent bg-secondary-gray-10 focus:bg-secondary-main-10 rounded-[10px] py-3 px-2 h-[80px] border-none bg-white" autoComplete="off" placeholder={`${t("Special Requests")}`} rows="5" maxLength="250"></textarea>
                        </div>
                    </div>
                    <div id="total" className="w-full bg-gray-100 p-4 my-2 mx-0 rounded-xl md:p-6 lg:p-6">
                        <div className="w-full flex flex-col">
                            <div className="flex justify-between">
                                <span>{t("Sub total")} :</span>
                                <span>{t("EGP")} {(getTotalPrice() - getTotalPrice() * 0.14).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>{t("VAT")} :</span>
                                <span>{t("EGP")} {(getTotalPrice() * 0.14).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between border-t border-dashed border-t-gray-400 pt-3 my-1">
                                <span className="text-xl text-orange-500 font-bold">{t("Total")} </span>
                                <span className="text-xl text-orange-500 font-bold">{t("EGP")} {(getTotalPrice().toFixed(2))}</span>
                            </div>
                            <div>
                                <span className="text-gray-400 text-xs">{t("Including VAT")}</span>
                            </div>
                        </div>
                    </div>
                    <button className="p-3 uppercase border border-orange-500 rounded-lg text-orange-500 font-bold my-1" onClick={() => { navigate('/menu') }}>+ {t("add more items")}</button>
                    <button className="p-3 uppercase bg-orange-500 rounded-lg font-bold text-white my-1" onClick={handleCheckout}>{t("Checkout")}</button>
                </div>
            }

        </div >
    );
}