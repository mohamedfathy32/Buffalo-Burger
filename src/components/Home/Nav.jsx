import { Link, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { DataContext } from "../../utils/context"
import { useContext } from "react"

export default function MenuNav() {
    const location = useLocation()
    const { i18n } = useTranslation()
    const { data } = useContext(DataContext);

    return (
        <div className="sticky top-28 z-10 w-full overflow-x-scroll sbw-none" >
            <div className="w-fit min-w-full flex justify-center px-4 bg-[#1c1c1b]">
                {data.categories?.map(cat =>
                    location.pathname.includes('Menu')
                        ? <a href={`/Menu#${cat.title.en.split(' ').join('')}`} key={cat.title.en} className="w-20 h-20 m-2 hover:animate-pulse">
                            <img className="w-20 h-20" src={cat.image[i18n.language]} alt={cat.title.en} />
                        </a>
                        : <Link to={`/Menu#${cat.title.en.split(' ').join('')}`} key={cat.title.en} className="w-20 h-20 m-2 hover:animate-pulse">
                            <img className="w-20 h-20" src={cat.image[i18n.language]} alt={cat.title.en} />
                        </Link>
                )}
            </div>
        </div>
    )
}