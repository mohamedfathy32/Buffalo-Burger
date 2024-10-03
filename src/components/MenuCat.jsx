
export default function MenuCat() {

    const menucat = [
        { id: 1, image: './MenuNav/offers.webp', link: "#" },
        { id: 2, image: './MenuNav/burger.webp', link: "#" },
        { id: 3, image: './MenuNav/chicken.webp', link: "#" },
        { id: 4, image: './MenuNav/keto&light.webp', link: "#" },
        { id: 5, image: './MenuNav/appetizers.webp', link: "#" },
        { id: 6, image: './MenuNav/dips&sauces.webp', link: "#" },
        { id: 7, image: './MenuNav/kidsmeal.webp', link: "#" },
        { id: 8, image: './MenuNav/dessert.webp', link: "#" },
        { id: 9, image: './MenuNav/drinks.webp', link: "#" },
    ]



    return (
        <div className="flex items-center bg-stone-900 w-full overflow-x-scroll md:overflow-hidden scroll-with-no-display sticky z-10 top-28">
            <div className="flex items-center h-full px-6 py-2 mx-auto gap-4">
                {menucat.map(cat => (
                    <div key={cat.id} className=" cursor-pointer w-20 h-20 hover:animate-pulse">
                        <a href={cat.link}>
                            <img width='81' height='81' src={cat.image} alt="" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
