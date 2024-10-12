/* eslint-disable react/prop-types */
import { productsList } from "../../utils/data";
import ProductCard from "./ProductCard";

export default function MenuCategory({ title, category }) {
    return (
        <>
            <h1 id={category} className="PSS text-7xl uppercase text-orange-600 text-center m-6">{title}</h1>
            <div className="flex justify-center flex-wrap gap-12 px-2 pb-6">
                {productsList.map(product => product.category === `${category}` && <ProductCard product={product} key={product.title} />)}
            </div>
        </>
    )
}