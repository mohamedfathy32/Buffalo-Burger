import { MdAddCircleOutline } from "react-icons/md";
// eslint-disable-next-line react/prop-types
export default function DishCard({ image, title, description, price }) {
    return (
        // <div className="w-72 md:w-80 max-w-full h-52 bg-neutral-100 rounded-xl p-4 pt-14 relative hover:-translate-y-2 duration-1000 cursor-pointer ease-in-out">
        //     <img className="w-3/5 absolute -top-28 start-0 " src={image} />
        //     <h2 className="uppercase font-bold">{title}</h2>
        //     <p className="text-gray-400 font-semibold line-clamp-3">{description}</p>
        //     <span className="bottom-4 start-4 font-bold absolute">EGP {price}</span>
        //     {/* <span className="material-symbols-outlined bg-orange-600 absolute bottom-2 end-3 p-1 rounded-full text-white">add_circle</span> */}
        //     <MdAddCircleOutline className="text-white bg-orange-600 rounded-full p-1 text-3xl absolute bottom-2 end-4" />
        // </div>
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
