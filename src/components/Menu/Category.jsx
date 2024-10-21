import { useTranslation } from "react-i18next";
import { productsList } from "../../utils/data";
import ProductCard from "./ProductCard";

export default function MenuCategory({ title }) {
    const { i18n } = useTranslation()

    return (
        <>
            <h1 id={title.en?.split(' ').join('')} className="PSS text-7xl uppercase text-orange-600 text-center m-6">{i18n.language === 'en' ? title.en : title.ar}</h1>
            <div className="flex justify-center flex-wrap gap-12 px-2 pb-6">
                {productsList.map(product => product.category === title.en && <ProductCard product={product} key={product.title.en} />)}
            </div>
        </>
    )
}