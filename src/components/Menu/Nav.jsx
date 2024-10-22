import { Link, useLocation } from "react-router-dom"
import { menuCategoriesList } from "../../utils/data"
import { useTranslation } from "react-i18next"

export default function MenuNav() {
    const location = useLocation()
    const { i18n } = useTranslation()
    return (
        <div className="sticky top-28 z-10 overflow-x-scroll sbw-none" dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
            <div className="w-fit min-w-full flex justify-center px-4 bg-stone-900">
                {menuCategoriesList.map(cat =>
                    location.pathname.includes('Menu')
                        ? <a href={`/Menu#${cat.title.en.split(' ').join('')}`} key={cat.title.en} className="w-20 h-20 m-2 hover:animate-pulse">
                            <img className="w-20 h-20" src={i18n.language === 'en' ? cat.image.en : cat.image.ar} alt={cat.title.en} />
                        </a>
                        : <Link to={`/Menu#${cat.title.en.split(' ').join('')}`} key={cat.title.en} className="w-20 h-20 m-2 hover:animate-pulse">
                            <img className="w-20 h-20" src={i18n.language === 'en' ? cat.image.en : cat.image.ar} alt={cat.title.en} />
                        </Link>
                )}
            </div>
        </div>
    )
}