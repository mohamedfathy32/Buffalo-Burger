// import { useTranslation } from "react-i18next";
// import { IoMdClose } from "react-icons/io";
// import { MdShoppingBasket, MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function CartDrawer({ cartDrawer, closeWindows }) {
//     const { t, i18n } = useTranslation();
//     const [totalPrice, setTotalPrice] = useState(0)
//     const navigate = useNavigate()
//     const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

//     useEffect(() => {
//         setTotalPrice(cart.reduce((acc, item) => { return acc + item.totalPrice }, 0))
//     }, [cart]);


//     const handleQuantity = (id, change) => {
//         const existingItem = cart.find(i => i.id === id)
//         existingItem.quantity += change
//         existingItem.totalPrice = existingItem.price * existingItem.quantity
//         if (change < 0 && existingItem.quantity == 1) {
//             setCart(cart.filter(i => i.id !== id))
//         }
//         localStorage.setItem('cart', JSON.stringify(cart))
//     }


//     return (
//         <div dir="rtl" className={`fixed top-0 start-0 w-80 md:w-96 h-screen z-[51] shadow-lg transition-transform duration-500 ease-in-out transform ${cartDrawer ? 'translate-x-0' : 'translate-x-full'}`}>
//             <div dir={i18n.language == 'ar' ? 'rtl' : 'ltr'} className="flex flex-col bg-white text-black box-content border-none min-w-fit h-screen px-4">
//                 <div className="flex items-center justify-start py-4">
//                     <div className="text-2xl flex items-center flex-grow font-bold justify-between cursor-pointer uppercase">
//                         <div className="px-1" onClick={closeWindows}><IoMdClose /></div>
//                         <p>{t("Cart details")}</p>
//                         <div className="text-xs text-orange-500 hover:text-secondary-main-120 hover:text-black"> {t("Go to cart")} </div>
//                         <div className="flex justify-center items-center w-7 h-7 rounded-full text-white text-sm bg-[#1c1c1b] ">{cart.length}</div>
//                     </div>
//                 </div>
//                 {cart.length === 0 &&
//                     <div className="overflow-y-scroll flex-grow">
//                         <p className="w-full text-base text-center mx-auto text-black">{t("There are no items in your cart")}</p>
//                     </div>
//                 }
//                 {cart.length > 0 &&
//                     <div className='pb-24 overflow-y-scroll sbw-none'>
//                         {cart.map(item =>
//                             <div key={item.id} className='w-full my-2 flex'>
//                                 <img src={item.image} alt={item.title.en} className='w-20 h-20' />
//                                 <div className='flex flex-col justify-around ms-5 w-full'>
//                                     <div className='flex justify-between'>
//                                         <p className='text-x font-bold'>{item.title.en}</p>
//                                         <IoMdClose className='bg-gray-300 text-orange-600 rounded-full w-8 h-8 p-2' />
//                                     </div>
//                                     <div className='flex justify-between'>
//                                         <p className='text-sm'>{t("EGP")} {item.totalPrice}</p>
//                                         <div className="bg-orange-600 rounded-md font-bold flex justify-center items-center gap-5 p-2 text-white">
//                                             <MdRemoveCircleOutline onClick={() => { handleQuantity(item.id, -1) }} className="text-2xl" />
//                                             <span>{item.quantity}</span>
//                                             <MdAddCircleOutline onClick={() => { handleQuantity(item.id, 1) }} className="text-2xl" />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 }
//                 <div className="fixed bottom-10 w-full flex items-start justify-evenly bg-orange-600 text-white py-3 md:my-6 mx-4 cursor-pointer font-main rounded-xl text-xl">
//                     <MdShoppingBasket />
//                     <p className="justify-start uppercase">
//                         {t("Go to cart")}
//                     </p>
//                     <p>{`${t("EGP")} ${totalPrice.toFixed(2)}`} </p>
//                 </div>
//             </div>
//         </div>
//     )
// }
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdClose } from "react-icons/io";
import { MdShoppingBasket, MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../utils/context';

export default function CartDrawer({ cartDrawer, closeWindows }) {
    const { cart, setCart } = useContext(CartContext);
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const [totalPrice, setTotalPrice] = useState(0);

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
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + change } : item
        ).filter(item => item.quantity > 0);
        updateCartInLocalStorage(updatedCart);
    };

    const removeItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        updateCartInLocalStorage(updatedCart);
    };

    const goToCart = () => {
        navigate('/Cart');
        closeWindows();
    };
    return (
        <div dir="rtl" className={`fixed top-0 start-0 w-80 md:w-96 h-screen z-[51] shadow-lg transition-transform duration-500 ease-in-out transform ${cartDrawer ? 'translate-x-0' : 'translate-x-full'}`}>
            <div dir={i18n.language == 'ar' ? 'rtl' : 'ltr'} className="flex flex-col justify-between bg-white text-black box-content border-none min-w-fit h-screen px-4">
                <div className="flex items-center justify-start py-4">
                    <div className="text-2xl flex items-center flex-grow font-bold justify-between cursor-pointer uppercase">
                        <div className="px-1" onClick={closeWindows}><IoMdClose /></div>
                        <p>{t("Cart details")}</p>
                        <div onClick={goToCart} className="text-xs text-orange-500 hover:text-secondary-main-120 hover:text-black"> {t("Go to cart")} </div>
                        <div className="flex justify-center items-center w-7 h-7 rounded-full text-white text-sm bg-[#1c1c1b] ">{cart.length}</div>
                    </div>
                </div>
                {cart.length === 0 &&
                    <div className="overflow-y-scroll flex-grow">
                        <p className="w-full text-base text-center mx-auto text-black">{t("There are no items in your cart")}</p>
                    </div>
                }
                {cart.length > 0 &&
                    <div className='pb-24 overflow-y-scroll sbw-none mb-auto'>
                        {cart.map(item =>
                            <div key={item.id} className='w-full my-2 flex'>
                                <img src={item.image} alt={item.title.en} className='w-20 h-20' />
                                <div className='flex flex-col justify-around ms-5 w-full'>
                                    <div className='flex justify-between'>
                                        <p className='text-x font-bold'>{item.title.en}</p>
                                        <IoMdClose onClick={()=> {removeItem(item.id)} } className='bg-gray-300 text-orange-600 rounded-full w-8 h-8 p-2' />
                                    </div>
                                    <div className='flex justify-between'>
                                        <p className='text-sm'>{t("EGP")} {item.price}</p>
                                        <div className="bg-orange-600 rounded-md font-bold flex justify-center items-center gap-5 p-2 text-white">
                                            <MdRemoveCircleOutline onClick={() => handleQuantityChange(item.id, -1)} className="text-2xl" />
                                            <span>{item.quantity}</span>
                                            <MdAddCircleOutline onClick={() => handleQuantityChange(item.id, 1)} className="text-2xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                }
                <div onClick={goToCart} className="w-full flex items-start justify-evenly bg-orange-600 text-white py-3 md:my-6 mx-4 cursor-pointer font-main rounded-xl text-xl">
                    <MdShoppingBasket />
                    <p className="justify-start uppercase">
                        {t("Go to cart")}
                    </p>
                    <p>{`${t("EGP")} ${totalPrice.toFixed(2)}`} </p>
                </div>
            </div>
        </div>
    )
}
