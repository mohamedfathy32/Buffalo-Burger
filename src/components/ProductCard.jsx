import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../utils/context";

export default function ProductCard({ product }) {
    const { setCart } = useContext(CartContext);
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const [productQuantity, setProductQuantity] = useState(0);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.title.en === product?.title.en);
        if (existingProduct) setProductQuantity(existingProduct.quantity);
    }, []);

    const updateCart = (change) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.title.en === product?.title?.en);
        if (existingProduct) {
            existingProduct.quantity += change;
            existingProduct.totalPrice = existingProduct.price * existingProduct.quantity;
            if (existingProduct.quantity <= 0) {
                cart = cart.filter(item => item.title.en !== product.title.en);
            }
        } else if (change > 0) {
            cart.push({
                id: Date.now(),
                image: product?.image || '/images/not-found.webp',
                title: product?.title,
                quantity: 1,
                price: product?.price,
                totalPrice: product?.price
            })
        }
        cart.length > 0
            ? localStorage.setItem('cart', JSON.stringify(cart))
            : localStorage.removeItem('cart');
        setProductQuantity(prev => prev + change);
        setCart(cart);
    };

    return (
        <div className="h-96 max-w-full w-72 md:w-80 hover:-translate-y-2 duration-1000 cursor-pointer ease-in-out">
            <div className="relative h-44">
                <img src={product?.image || '/images/not-found.webp'} alt={product?.title?.[i18n.language]} className="w-44 h-44 absolute top-10 start-0" />
            </div>
            <div className="bg-neutral-100 rounded-xl p-4 pb-2 pt-14 flex flex-col h-52">
                <h2 className="font-bold text-lg uppercase">{product?.title?.[i18n.language]}</h2>
                <p className="text-neutral-400 capitalize line-clamp-3">{product?.description?.[i18n.language]}</p>
                <div className="flex justify-between items-center mt-auto">
                    <span className="font-bold">{i18n.language === 'en' ? 'EGP' : 'ج.م'} {product?.price}</span>
                    {productQuantity === 0 || product?.details ?
                        <MdAddCircleOutline onClick={() => {
                            product?.details ? navigate(`/Product/${product?.title?.en?.split(' ').join('-')}`, { state: { product } }) : updateCart(1);
                        }} className="text-white bg-[#ff5f00] rounded-full p-1 text-[32px]" />
                        :
                        <div className="bg-[#ff5f00] rounded-md font-bold flex justify-center items-center gap-5 p-2 text-white">
                            <MdRemoveCircleOutline onClick={() => updateCart(-1)} className="text-2xl" />
                            <span>{productQuantity}</span>
                            <MdAddCircleOutline onClick={() => updateCart(1)} className="text-2xl" />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
