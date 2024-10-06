import ProductCard from "../../components/ProductCard";

export default function MenuCategory({ _id, title, list }) {
    return (
        <>
            <h1 id={_id} className="PSS text-7xl uppercase text-orange-600 text-center m-6">{title}</h1>
            <div className="flex justify-center flex-wrap gap-12 px-2 pb-6">
                {list.map(product => <ProductCard product={product} key={product.id} />)}
            </div>
        </>
    )
}
