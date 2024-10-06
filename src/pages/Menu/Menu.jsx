import MenuNav from "../../components/MenuNav"
import KeenSlider from "../../components/KeenSlider"
import MenuCategory from "./MenuCategory"
import { productsList } from "../../utils/ProdList"

export default function Menu() {

    return (
        <>
            <div className="sticky top-28 z-10 w-full" ><MenuNav /></div>
            <h1 id="offer" className="PSS text-7xl uppercase text-orange-600 text-center m-6">offers</h1>
            <div className="mx-3 my-6"><KeenSlider /></div>
            <MenuCategory hash={'burger'} catList={productsList} catTitle={'Burger Sandwiches'} />
        </>
    )
}