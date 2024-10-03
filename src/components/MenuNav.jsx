import { Link } from "react-router-dom"

export default function MenuNav() {
    const categories = [
        { title: 'offers', image: '/images/MenuNav/offers.webp', target: 'offer' },
        { title: 'burger', image: '/images/MenuNav/burger.webp', target: 'burger' },
        { title: 'chicken', image: '/images/MenuNav/chicken.webp', target: 'chicken' },
        { title: 'keto&light', image: '/images/MenuNav/keto&light.webp', target: 'keto' },
        { title: 'appetizers', image: '/images/MenuNav/appetizers.webp', target: 'appetizer' },
        { title: 'dips&sauces', image: '/images/MenuNav/dips&sauces.webp', target: 'sauce' },
        { title: 'kidsmeal', image: '/images/MenuNav/kidsmeal.webp', target: 'kidsmeal' },
        { title: 'dessert', image: '/images/MenuNav/dessert.webp', target: 'dessert' },
        { title: 'drinks', image: '/images/MenuNav/drinks.webp', target: 'drink' },
    ]
    return (
        <div className="overflow-x-scroll sbw-none">
            <div className="w-fit min-w-full flex justify-center px-4 bg-stone-900">
                {categories.map(cat => {
                    return (
                        <Link
                            key={cat.title}
                            className="w-20 h-20 m-2 hover:animate-pulse"
                            to={`/Menu#${cat.target}`}>
                            <img src={cat.image} alt={cat.title} />
                        </Link>)
                })}
            </div>
        </div>
    )
}