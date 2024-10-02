import { MdAddCircleOutline } from "react-icons/md";
// eslint-disable-next-line react/prop-types
export default function DishCard({ image, title, description, price }) {
    return (
        <div className="h-96 w-72 md:w-80 hover:-translate-y-2 duration-1000 cursor-pointer ease-in-out">
            <div className="relative h-44">
                <img src={image} alt={title} className="w-44 h-44 absolute top-10 start-0" />
                <div className="w-44 h-44 absolute top-10 start-0"></div>
            </div>
            <div className="bg-neutral-50 rounded-xl p-4 pb-2 pt-14 flex flex-col h-52">
                <h2 className="font-semibold text-lg uppercase">{title}</h2>
                <p className="text-neutral-400 capitalize line-clamp-3">{description}</p>
                <div className="flex justify-between items-center mt-auto">
                    <span className="font-bold ">EGP {price}</span>
                    <button>
                        <MdAddCircleOutline className="text-white bg-orange-600 rounded-full p-1 text-3xl" />
                    </button>
                </div>
            </div>
        </div>
    )
}