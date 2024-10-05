import { useLocation } from "react-router-dom"

export default function MealDetails() {
    const location = useLocation()
    const dish = location.state?.dish
    return (
        <>
            <div className="bg-stone-900 flex justify-center items-center lg:flex-row flex-col p-4">
                <img src={dish.image} alt={dish.title} className=" place-items-center w-[150px]" />
                <div className="lg:text-start text-center md:my md:mx-16 ">
                    <h2 className="text-orange-600 font-bold text-2xl capitalize">{dish.title}</h2>
                    <p className="text-white max-w-[500px]">{dish.description}</p>
                </div>
            </div>
        </>
    )
}