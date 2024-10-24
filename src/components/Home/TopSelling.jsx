import { useContext } from "react";
import { topSellingList } from "../../utils/data";
import ProductCard from "../ProductCard";
import { ProductsList } from "../../utils/context";

export default function TopSelling() {
    const { productsList, setProductsList } = useContext(ProductsList)
    return (
        <>
            <div className="px-2 my-8">
                <div className="px-8">
                    <h2 className="text-orange-600 text-2xl text-start font-bold uppercase">Top Selling</h2>
                </div>
                <div className="flex justify-center flex-wrap gap-4">
                    {productsList.map(product => (topSellingList.map(t =>
                        t === product.title.en && <ProductCard key={product.title} product={product} />)))}
                </div>
            </div>
        </>
    )
}