import { useTranslation } from "react-i18next";
import KeenSlider from "../components/Home/Keen";
import MenuCategory from "../components/Menu/Category";
import MenuNav from "../components/Menu/Nav";

export default function MenuPage() {
    const { t, i18n } = useTranslation()
    const lang = localStorage.getItem('lang') || 'en'

    function toggleLanguage() {
        i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')
        localStorage.setItem('lang', i18n.language)
    }
    return (
        <>
            <div className="sticky top-28 z-10 w-full" ><MenuNav /></div>
            <button onClick={toggleLanguage}>{t('lngBtn')}</button>
            <h1 id="offer" className="PSS text-7xl uppercase text-orange-600 text-center m-6">{t('offers')}</h1>
            <div className="mx-3 my-6" ><KeenSlider /></div>
            <MenuCategory category={'burger'} title={lang === 'en' ? 'Burger Sandwiches' : 'برجر'} />
            <MenuCategory category={'chicken'} title={'Chicken Sandwiches'} />
            <MenuCategory category={'keto'} title={'Keto & Light Sandwiches'} />
            <MenuCategory category={'appetizers'} title={'Appetizers'} />
            <MenuCategory category={'sauces'} title={'Sauces'} />
            <MenuCategory category={'desserts'} title={'Desserts'} />
            <MenuCategory category={'drinks'} title={'Drinks'} />
        </>
    )
}