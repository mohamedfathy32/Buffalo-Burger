import KeenSlider from "../components/Home/KeenSlider";
import MenuCategory from "../components/Menu/MenuCategory";
import MenuNav from "../components/Menu/MenuNav";

export default function Menu() {
    return (
        <>
            <div className="sticky top-28 z-10 w-full" ><MenuNav /></div>
            <h1 id="offer" className="PSS text-7xl uppercase text-orange-600 text-center m-6">offers</h1>
            <div className="mx-3 my-6"><KeenSlider /></div>
            <MenuCategory category={'burger'} title={'Burger Sandwiches'} />
            <MenuCategory category={'chicken'} title={'Chicken Sandwiches'} />
            <MenuCategory category={'keto'} title={'Keto & Light Sandwiches'} />
            <MenuCategory category={'appetizers'} title={'Appetizers'} />
            <MenuCategory category={'sauces'} title={'Sauces'} />
            <MenuCategory category={'desserts'} title={'Desserts'} />
            <MenuCategory category={'drinks'} title={'Drinks'} />
        </>
    )
}