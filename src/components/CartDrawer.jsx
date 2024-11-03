/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { MdShoppingBasket } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../utils/context'

export default function CartDrawer({ cartDrawer, closeWindows }) {
    const navigate = useNavigate()
    const { t, i18n } = useTranslation()

    const { cart } = useContext(CartContext);

    const gotocart = () => {
        navigate('/Cart')
        closeWindows()
    }
    return (
        <div dir="rtl" className={`fixed top-0 start-0 w-80 md:w-96 h-screen z-[51] bg-white shadow-lg transition-transform duration-500 ease-in-out transform ${cartDrawer ? 'translate-x-0' : 'translate-x-full'}`}>
            <div dir={i18n.language == 'ar' ? 'rtl' : 'ltr'} className="flex flex-col   -8 bg-white box-content border-none min-w-fit h-screen px-4">
                <div className="pr-3 top-14 text-orangbg-orange-600 cursor-pointer "></div>
                <div className="flex items-center justify-start py-4 text-black">
                    <div className="text-2xl flex items-center flex-grow font-bold justify-between cursor-pointer uppercase">
                        <div className="px-1" onClick={closeWindows}>
                            <IoIosCloseCircleOutline />
                        </div>
                        <p className="">
                            {t("Cart details")}

                        </p>
                        <div className="text-xs text-orange-500 hover:text-secondary-main-120"> {t("Go to cart")} </div>
                        <div className="flex justify-center items-center">
                            <div className="flex justify-center items-center w-7 h-7 rounded-full text-white text-sm bg-[#1c1c1b] ">{cart.length}</div>
                        </div>
                    </div>
                </div>
                <div className="scroll-with-no-display overflow-y-scroll flex-grow">
                    <p className="w-full text-base text-center mx-auto text-black">
                        {t("There are no items in your cart")}
                    </p>
                </div>
                <div onClick={() => { gotocart() }} className="mb-24 flex items-start justify-evenly bg-orange-600 text-white py-3 md:my-6 mx-4 cursor-pointer font-main rounded-xl text-xl">
                    <MdShoppingBasket />
                    <p className="font-roboto justify-start uppercase">
                        {t("Go to cart")}
                    </p>
                    <p>{t("EGP")} 0.00</p>
                </div>
            </div>
        </div>
    )
}
