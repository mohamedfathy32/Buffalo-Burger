export default function MenuNav() {
    const categories = [
        { title: 'offers', image: '/images/MenuNav/offers.webp', target: '#offer' },
        { title: 'burger', image: '/images/MenuNav/burger.webp', target: '#burger' },
        { title: 'chicken', image: '/images/MenuNav/chicken.webp', target: '#chicken' },
        { title: 'keto&light', image: '/images/MenuNav/keto&light.webp', target: '#keto' },
        { title: 'appetizers', image: '/images/MenuNav/appetizers.webp', target: '#appetizers' },
        { title: 'dips&sauces', image: '/images/MenuNav/dips&sauces.webp', target: '#sauces' },
        { title: 'kidsmeal', image: '/images/MenuNav/kidsmeal.webp', target: '#kidsmeal' },
        { title: 'dessert', image: '/images/MenuNav/dessert.webp', target: '#desserts' },
        { title: 'drinks', image: '/images/MenuNav/drinks.webp', target: '#drinks' },
    ]
    return (
        <div className="overflow-x-scroll sbw-none">
            <div className="w-fit min-w-full flex justify-center px-4 bg-stone-900">
                {categories.map(cat => {
                    return (
                        // <Link
                        //     key={cat.title}
                        //     className="w-20 h-20 m-2 hover:animate-pulse"
                        //     to={cat.target}>
                        //     <img src={cat.image} alt={cat.title} />
                        // </Link>




                        <a
                            href={cat.target}
                            key={cat.title}
                            className="w-20 h-20 m-2 hover:animate-pulse"

                        >
                            <img width='81' height='81' src={cat.image} alt="" />
                        </a>

                    )
                })}
            </div>
        </div>
    )
}