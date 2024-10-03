import { useLocation } from "react-router-dom"

export default function MealDetails() {
    const location = useLocation()
    const dish = location.state?.dish
    return (
        <>
            <div className="flex flex-col md:flex-row bg-stone-900 items-center justify-center p-4">
                <img src={dish.image} alt={dish.title} className=" place-items-center w-36" />
                <div>
                    <h2 className="text-orange-500 text-2xl capitalize">{dish.title}</h2>
                    <p className="text-white">{dish.description}</p>
                </div>
            </div>
        </>
    )
}