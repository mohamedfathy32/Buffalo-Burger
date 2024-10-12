import { useEffect, useState } from "react";
import { menuCategoriesList } from "../../utils/data";

export default function MenuNav() {
    const [categories, setcategories] = useState([]);
    useEffect(() => {
        // (async () => {
        //     setcategories(await getCollectionByName('menuCategoriesList'))
        // })()
        setcategories(menuCategoriesList)
    }, []);
    return (
        <div className="overflow-x-scroll sbw-none">
            <div className="w-fit min-w-full flex justify-center px-4 bg-stone-900">
                {categories.map(cat =>
                    <a href={cat.link} key={cat.title} className="w-20 h-20 m-2 hover:animate-pulse">
                        <img className="w-20 h-20" src={cat.image.en} alt="img" />
                    </a>
                )}
            </div>
        </div>
    )
}