/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
    const navigate = useNavigate();
    const [productQuantity, setProductQuantity] = useState(0);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.title === product.title);
        if (existingProduct) {
            setProductQuantity(existingProduct.quantity);
        }
    }, [product.title]);



    function updateCart(change) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.title === product.title);

        if (existingProduct) {
            existingProduct.quantity += change;
            existingProduct.totalPrice = product.price * existingProduct.quantity;

            if (existingProduct.quantity <= 0) {
                cart = cart.filter(item => item.title !== product.title);
            }
        } else if (change > 0) {
            cart.push({
                id: Date.now(),
                image: product.image,
                title: product.title,
                quantity: 1,
                price: product.price,
                totalPrice: product.price
            });
        }

        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            localStorage.removeItem('cart');
        }

        setProductQuantity(prev => prev + change);
    }


    return (
        <div className="h-96 max-w-full w-72 md:w-80 hover:-translate-y-2 duration-1000 cursor-pointer ease-in-out">
            <div className="relative h-44">
                <img src={product?.image} alt={product?.title} className="w-44 h-44 absolute top-10 start-0" />
            </div>
            <div className="bg-neutral-50 rounded-xl p-4 pb-2 pt-14 flex flex-col h-52">
                <h2 className="font-semibold text-lg uppercase">{product?.title}</h2>
                <p className="text-neutral-400 capitalize line-clamp-3">{product?.description}</p>
                <div className="flex justify-between items-center mt-auto">
                    <span className="font-bold">EGP {product?.price}</span>
                    {productQuantity === 0 || product.details
                        ? <button onClick={() => {
                            product.details
                                ? navigate(`/Product/${product.title.split(' ').join('-')}`, { state: { product } })
                                : updateCart(1)
                        }}>
                            <MdAddCircleOutline className="text-white bg-orange-600 rounded-full p-1 text-[32px]" />
                        </button>
                        : <div className="bg-orange-600 rounded-md font-bold flex justify-center items-center gap-5 p-2 text-white">
                            <MdRemoveCircleOutline onClick={() => updateCart(-1)} className="text-2xl" />
                            <span>{productQuantity}</span>
                            <MdAddCircleOutline onClick={() => updateCart(1)} className="text-2xl" />
                        </div>}
                </div>
            </div>
        </div>
    );
}