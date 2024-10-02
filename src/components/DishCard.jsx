import { MdAddCircleOutline } from "react-icons/md";
// eslint-disable-next-line react/prop-types
export default function DishCard({ image, title, description, price }) {
    return (
        <div className="w-72 md:w-80 max-w-full h-52 bg-neutral-100 rounded-xl p-4 pt-14 relative hover:-translate-y-2 duration-1000 cursor-pointer ease-in-out">
            <img className="w-3/5 absolute -top-28 start-0 " src={image} />
            <h2 className="uppercase font-bold">{title}</h2>
            <p className="text-gray-400 font-semibold line-clamp-3">{description}</p>
            <span className="bottom-4 start-4 font-bold absolute">EGP {price}</span>
            {/* <span className="material-symbols-outlined bg-orange-600 absolute bottom-2 end-3 p-1 rounded-full text-white">add_circle</span> */}
            <MdAddCircleOutline className="text-white bg-orange-600 rounded-full p-1 text-3xl absolute bottom-2 end-4" />
        </div>
    )
}
