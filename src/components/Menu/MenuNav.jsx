import { menuCategories } from "../../utils/data/menuCategories";

export default function MenuNav() {
    return (
        <div className="overflow-x-scroll sbw-none">
            <div className="w-fit min-w-full flex justify-center px-4 bg-stone-900">
                {menuCategories.map(cat =>
                    <a href={cat.link} key={cat.category} className="w-20 h-20 m-2 hover:animate-pulse">
                        <img className="w-20 h-20" src={cat.image.en} alt="" />
                    </a>
                )}
            </div>
        </div>
    )
}