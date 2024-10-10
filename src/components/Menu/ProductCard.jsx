import { useEffect, useState } from "react";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
    const navigate = useNavigate()
    const LSQuantityKey = `quantity of ${product.title}`
    const quantityLS = Number(localStorage.getItem(LSQuantityKey)) || 0
    const [productQuantity, setProductQuantity] = useState(quantityLS);


    useEffect(() => {
        const storedQuantity = Number(localStorage.getItem(LSQuantityKey)) || 0
        setProductQuantity(storedQuantity);
    }, [LSQuantityKey]);



    function handleAddToCard() {
        localStorage.setItem(LSQuantityKey, productQuantity)
        if (product.details)
            navigate(`/ProductDetails/${product?.title.split(' ').join('-')}`, { state: { product } })
        else {
            const q = productQuantity + 1
            localStorage.setItem(LSQuantityKey, q)
            setProductQuantity(q)
        }
    }

    function increaseQuantity() {
        const q = productQuantity + 1
        localStorage.setItem(LSQuantityKey, q)
        setProductQuantity(q)

    }

    function decreaseQuantity() {
        if (productQuantity > 0) {
            const q = productQuantity - 1
            localStorage.setItem(LSQuantityKey, q)
            setProductQuantity(q)
        }

    }

    return (
        <div className="h-96 max-w-full w-72 md:w-80 hover:-translate-y-2 duration-1000 cursor-pointer ease-in-out">
            <div className="relative h-44">
                <img src={product?.imageURL} alt={product?.title} className="w-44 h-44 absolute top-10 start-0" />
                <div className="w-44 h-44 absolute top-10 start-0"></div>
            </div>
            <div className="bg-neutral-50 rounded-xl p-4 pb-2 pt-14 flex flex-col h-52">
                <h2 className="font-semibold text-lg uppercase">{product?.title}</h2>
                <p className="text-neutral-400 capitalize line-clamp-3">{product?.description}</p>
                <div className="flex justify-between items-center mt-auto">
                    <span className="font-bold ">{product?.price}</span>
                    {productQuantity === 0
                        ? <button onClick={handleAddToCard}>
                            <MdAddCircleOutline className="text-white bg-orange-600 rounded-full p-1 text-3xl" />
                        </button>
                        : <div className="bg-orange-600 rounded-md font-bold flex justify-center items-center gap-5 p-2 text-white">
                            <MdRemoveCircleOutline onClick={decreaseQuantity} className="text-2xl" />
                            <span className="">{productQuantity}</span>
                            <MdAddCircleOutline onClick={increaseQuantity} className="text-2xl" />
                        </div>}
                </div>
            </div>
        </div >
    )
}