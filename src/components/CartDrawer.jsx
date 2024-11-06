import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdClose } from "react-icons/io";
import { MdShoppingBasket, MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../utils/context';
import Swal from 'sweetalert2';

export default function CartDrawer({ cartDrawer, closeWindows }) {
    const { cart, setCart } = useContext(CartContext);
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const [totalPrice, setTotalPrice] = useState(0);
    const lang = i18n.language

    const updateCartInLocalStorage = (updatedCart) => {
        if (updatedCart.length) {
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            setCart(updatedCart);
        } else {
            localStorage.removeItem('cart');
            setCart([]);
        }
    };

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, [setCart]);

    useEffect(() => {
        const calculatedTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice(calculatedTotal);
    }, [cart]);

    const handleQuantityChange = (id, change) => {
        const itemToChange = cart.find(item => item.id === id);

        if (itemToChange && itemToChange.quantity + change <= 0) {
            Swal.fire({
                title: `${t("Attention!")}`,
                text: `${t("Are you sure you want to remove this item from the cart?")}`,
                icon: "warning",
                iconColor: '#ff5f00',
                showCancelButton: true,
                confirmButtonText: `${t("Yes, remove it")}`,
                cancelButtonText: `${t("Cancel")}`,
                customClass: {
                    confirmButton: 'custom-confirm-button'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    const updatedCart = cart.filter(item => item.id !== id);
                    updateCartInLocalStorage(updatedCart);
                }
            });
        } else {
            const updatedCart = cart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + change } : item
            ).filter(item => item.quantity > 0);

            updateCartInLocalStorage(updatedCart);
        }
    };


    const removeItem = (id) => {
        Swal.fire({
            title: `${t("Attention!")}`,
            text: `${t("Are you sure you want to remove this item from the cart?")}`,
            icon: "warning",
            showCancelButton: true,
            iconColor: '#ff5f00',
            confirmButtonText: `${t("Yes, remove it")}`,
            cancelButtonText: `${t("Cancel")}`,
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // If confirmed, proceed with item removal
                const updatedCart = cart.filter(item => item.id !== id);
                updateCartInLocalStorage(updatedCart);
            }
        });
    };

    const goToCart = () => {
        navigate('/Cart');
        closeWindows();
    };
    return (
        <div dir="rtl" className={`fixed top-0 start-0 w-80 md:w-96 h-screen z-[51] shadow-lg transition-transform duration-500 ease-in-out transform ${cartDrawer ? 'translate-x-0' : 'translate-x-full'}`}>
            <div dir={i18n.language == 'ar' ? 'rtl' : 'ltr'} className="flex flex-col justify-between  bg-white text-black box-content border-none min-w-fit h-screen px-4">
                <div className="flex items-center justify-start py-4">
                    <div className="text-xl flex items-center flex-grow font-bold justify-between cursor-pointer uppercase">
                        <div className="px-1" onClick={closeWindows}><IoMdClose /></div>
                        <p>{t("Cart details")}</p>
                        <div onClick={goToCart} className="text-xs text-[#ff5f00] hover:text-black"> {t("Go to cart")} </div>
                        <div className="flex justify-center items-center w-7 h-7 rounded-full text-white text-sm bg-[#1c1c1b] ">{cart.length}</div>
                    </div>
                </div>
                {cart.length === 0 &&
                    <div className="overflow-y-scroll flex-grow">
                        <p className="w-full text-base text-center mx-auto text-black">{t("There are no items in your cart")}</p>
                    </div>
                }
                {cart.length > 0 &&
                    <div className='pb-24 overflow-y-scroll sbw-none mb-auto flex flex-col gap-4'>
                        {cart.map(item =>
                            <div key={item.id} className='w-full my-2 flex'>
                                <img src={item.image} alt={item.title.en} className='w-20 h-20' />
                                <div className='flex flex-col justify-around ms-5 w-full'>
                                    <div className='flex justify-between'>
                                        <p className='text-x font-bold'>{item.title[lang]}</p>
                                        <IoMdClose onClick={() => { removeItem(item.id) }} className='bg-gray-300 text-[#ff5f00] rounded-full w-6 h-6 p-1' />
                                    </div>
                                    <div className='flex justify-between'>
                                        <p className='text-sm'>{item.totalPrice} {t("EGP")}</p>
                                        <div className="bg-[#ff5f00] rounded-md font-bold flex justify-center items-center gap-5 p-2 text-white">
                                            <MdRemoveCircleOutline onClick={() => handleQuantityChange(item.id, -1)} className="text-xl" />
                                            <span className='text-sm'>{item.quantity}</span>
                                            <MdAddCircleOutline onClick={() => handleQuantityChange(item.id, 1)} className="text-xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                }
                <div onClick={goToCart} className="flex items-start justify-evenly bg-[#ff5f00] text-white py-3 px-2 mb-2 md:mx-4 cursor-pointer font-main rounded-xl text-xl">
                    <MdShoppingBasket />
                    <p className="justify-start uppercase">
                        {t("Go to cart")}
                    </p>
                    <p>{`${totalPrice.toFixed(2)} ${t("EGP")}`} </p>
                </div>
            </div>
        </div>
    )
}
