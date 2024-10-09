/* eslint-disable react/prop-types */
import DishCard from "../../components/DishCard";
import GetProdcut from "../../components/GetProdcut";

export default function MenuCategory({ catTitle, category }) {
    const products = GetProdcut();

    return (
        <>
            <div id={category}>

                <h1 className="PSS text-7xl uppercase text-orange-600 text-center m-6">{catTitle}</h1>                <div className="flex justify-center flex-wrap gap-4">

                    {products.map(product => (
                        product.category === `${category}` &&
                        <DishCard
                            key={product.id}
                            dish={product}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
