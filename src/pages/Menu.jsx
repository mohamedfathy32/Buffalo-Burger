import { useTranslation } from "react-i18next";
import KeenSlider from "../components/Home/Keen";
import MenuNav from "../components/Home/Nav";
import { menuCategoriesList, productsList } from "../utils/data";
import ProductCard from "../components/ProductCard";

export default function MenuPage() {
    const { i18n } = useTranslation()
    return (
        <>
            <MenuNav />
            {menuCategoriesList.map(cat => cat.title.en === 'offers'
                ?
                <div key={cat.title.en}>
                    <h1 id={cat.title.en?.split(' ').join('')} className="PSS text-7xl uppercase text-orange-600 text-center m-6">{cat.title[i18n.language]}</h1>
                    <div className="mx-3 my-6" >
                        <KeenSlider />
                    </div>
                </div>
                : <div key={cat.title.en} >
                    <h1 id={cat.title.en?.split(' ').join('')} className="PSS text-7xl uppercase text-orange-600 text-center m-6">{cat.title[i18n.language]}</h1>
                    <div className="flex justify-center flex-wrap gap-12 px-2 pb-6">
                        {productsList.map(product => product.category === cat.title.en && <ProductCard product={product} key={product.title.en} />)}
                    </div>
                </div>
            )}
        </>
    )
}