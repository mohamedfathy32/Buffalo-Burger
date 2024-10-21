import { useTranslation } from "react-i18next";
import KeenSlider from "../components/Home/Keen";
import MenuCategory from "../components/Menu/Category";
import MenuNav from "../components/Menu/Nav";
import { menuCategoriesList } from "../utils/data";

export default function MenuPage() {
    const { i18n } = useTranslation()
    return (
        <>
            <div className="sticky top-28 z-10 w-full" ><MenuNav /></div>
            {menuCategoriesList.map(cat => {
                return (
                    cat.title.en === 'offers'
                        ?
                        <div key={cat.title.en}>
                            <h1 id="offers" className="PSS text-7xl uppercase text-orange-600 text-center m-6">{i18n.language === 'en' ? cat.title.en : cat.title.ar}</h1>
                            <div className="mx-3 my-6" >
                                <KeenSlider />
                            </div>
                        </div>
                        : <MenuCategory title={cat.title} key={cat.title.en} />)
            })}
        </>
    )
}