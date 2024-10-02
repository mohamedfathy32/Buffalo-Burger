import { NavLink } from "react-router-dom"

export default function MenuNav() {
    const categories = [
        { title: 'offers', image: '/MenuNav/offers.webp', target: 'offer' },
        { title: 'burger', image: '/MenuNav/burger.webp', target: 'burger' },
        { title: 'chicken', image: '/MenuNav/chicken.webp', target: 'chicken' },
        { title: 'keto&light', image: '/MenuNav/keto&light.webp', target: 'keto' },
        { title: 'appetizers', image: '/MenuNav/appetizers.webp', target: 'appetizer' },
        { title: 'dips&sauces', image: '/MenuNav/dips&sauces.webp', target: 'sauce' },
        { title: 'kidsmeal', image: '/MenuNav/kidsmeal.webp', target: 'kidsmeal' },
        { title: 'dessert', image: '/MenuNav/dessert.webp', target: 'dessert' },
        { title: 'drinks', image: '/MenuNav/drinks.webp', target: 'drink' },
    ]
    return (
        <div className="overflow-x-scroll sbw-none">
            <div className="w-fit min-w-full flex justify-center px-4 bg-stone-900">
                {categories.map(cat => {
                    return (
                        <NavLink
                            key={cat.title}
                            className="w-20 h-20 m-2 hover:animate-pulse"
                            to={`/Menu#${cat.target}`}>
                            <img src={cat.image} alt={cat.title} />
                        </NavLink>)
                })}
            </div>
        </div>
    )
}
