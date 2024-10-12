import { Link } from "react-router-dom"

export default function MenuCat() {

    const menucat = [
        { id: 1, image: './MenuNav/offers.webp', link: "/menu#offer" },
        { id: 2, image: './MenuNav/burger.webp', link: "/menu#burger" },
        { id: 3, image: './MenuNav/chicken.webp', link: "/menu#chicken" },
        { id: 4, image: './MenuNav/keto&light.webp', link: "/menu#keto" },
        { id: 5, image: './MenuNav/appetizers.webp', link: "/menu#appetizers" },
        { id: 6, image: './MenuNav/dips&sauces.webp', link: "/menu#sauces" },
        { id: 7, image: './MenuNav/kidsmeal.webp', link: "/menu#kidsmeal" },
        { id: 8, image: './MenuNav/dessert.webp', link: "/menu#desserts" },
        { id: 9, image: './MenuNav/drinks.webp', link: "/menu#drinks" },
    ]



    return (
        <div style={{scrollbarWidth: 'none'}} className="flex items-center bg-stone-900 w-full overflow-x-scroll md:overflow-hidden sticky z-10 top-28">
            <div className="flex items-center h-full px-6 py-2 mx-auto gap-4">
                {menucat.map(cat => (
                    <div key={cat.id} className="cursor-pointer w-20 h-20 hover:animate-pulse">
                        <Link
                            key={cat.id}
                            to={cat.link}>
                            <img src={cat.image} alt={cat.title} />
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    )
}
