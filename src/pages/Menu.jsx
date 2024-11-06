import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { DataContext } from "../utils/context";
import { getCollectionByName } from "../utils/firebase";
import MenuNav from "../components/Home/Nav";
import KeenSlider from "../components/Home/Keen";
import ProductCard from "../components/ProductCard";
import Splash from "../components/Splash";

export default function MenuPage() {
    const { data, setData } = useContext(DataContext);
    const { i18n } = useTranslation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                if (!data.products || !data.offers || !data.categories) {
                    const products = await getCollectionByName('products');
                    const offers = await getCollectionByName('offers');
                    const categories = await getCollectionByName('categories');
                    setData({ products, offers, categories });
                    console.log('get from menu')
                }
            }
            catch (e) { console.log(e) }
            finally { setLoading(false) }
        })()
    }, []);
    return (loading ? <Splash /> :
        <>
            <MenuNav />
            {data.categories?.map(cat => (
                <div key={cat.title.en}>
                    <h1 id={cat.title.en?.split(' ').join('')} className="PSS text-7xl uppercase text-[#ff5f00] text-center m-6">
                        {cat.title[i18n.language]}
                    </h1>
                    {cat.title.en === 'offers' ?
                        <div className="mx-3 my-6">
                            <KeenSlider />
                        </div>
                        :
                        <div className="flex justify-center flex-wrap gap-12 px-2 pb-6">
                            {data.products?.filter(product => product.category === cat.title.en).map(product =>
                                <ProductCard product={product} key={product.title.en} />
                            )}
                        </div>
                    }
                </div>
            ))}
        </>
    );
}