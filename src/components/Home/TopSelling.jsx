import { useContext } from "react";
import ProductCard from "../ProductCard";
import { DataContext } from "../../utils/context";

export default function TopSelling() {
    const { data } = useContext(DataContext)
    return (
        <>
            <div className="px-2 my-8">
                <div className="px-8">
                    <h2 className="text-orange-600 text-2xl text-start font-bold uppercase">Top Selling</h2>
                </div>
                <div className="flex justify-center flex-wrap gap-4">
                    {data.products?.map(product => (data.topSellings?.map(t =>
                        t.title.en === product.title.en && <ProductCard key={product.title.en} product={product} />)))}
                </div>
            </div>
        </>
    )
}