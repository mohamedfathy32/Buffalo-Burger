import { MdAddCircleOutline } from "react-icons/md";
import { MdRemoveCircleOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
    const navigate = useNavigate()
    function handleAddToCard() {
        if (product.details)
            navigate(`/ProductDetails/${product?.title.split(' ').join('-')}`, { state: { product } })




    }

    function increaseQuantity() {
        console.log('hi');

    }
    function decreaseQuantity() {

    }

    localStorage.setItem('productQuantity', 0)
    const quantity = localStorage.getItem('productQuantity')
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

                    {/* {
                        <button onClick={handleAddToCard}>
                            <MdAddCircleOutline className="text-white bg-orange-600 rounded-full p-1 text-3xl" />
                        </button>
                    } */}
                    {product.quantity === "0" &&
                        <div className="bg-orange-600 rounded-md font-bold flex justify-center items-center gap-5 p-2 text-white">
                            <MdRemoveCircleOutline onClick={decreaseQuantity} className="text-2xl" />
                            <span className="">2</span>
                            <MdAddCircleOutline onClick={increaseQuantity} className="text-2xl" />

                        </div>
                    }
                </div>
            </div>
        </div >
    )
}