import { Link } from "react-router-dom";
import { menuCategoriesList } from "/src/utils/data";

export default function MenuCat() {
    return (
        <div className="flex items-center bg-stone-900 w-full overflow-x-scroll md:overflow-hidden scroll-with-no-display sticky z-10 top-28">
            <div className="flex items-center h-full px-6 py-2 mx-auto gap-4">
                {menuCategoriesList.map(cat =>
                    <div key={cat.title} className=" cursor-pointer w-20 h-20 hover:animate-pulse">
                        <Link
                            to={cat.link}>
                            <img src={cat.image.en} alt={cat.title} />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}