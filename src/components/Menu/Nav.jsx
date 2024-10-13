import { Link, useLocation } from "react-router-dom"
import { menuCategoriesList } from "../../utils/data"

export default function MenuNav() {
    const location = useLocation()
    return (
        <div className="overflow-x-scroll sbw-none">
            <div className="w-fit min-w-full flex justify-center px-4 bg-stone-900">
                {menuCategoriesList.map(cat =>
                    location.pathname.includes('Menu')
                        ? <a href={cat.link} key={cat.title} className="w-20 h-20 m-2 hover:animate-pulse">
                            <img className="w-20 h-20" src={cat.image.en} alt="img" />
                        </a>
                        : <Link to={cat.link} key={cat.title} className="w-20 h-20 m-2 hover:animate-pulse">
                            <img className="w-20 h-20" src={cat.image.en} alt="img" />
                        </Link>
                )}
            </div>
        </div>
    )
}