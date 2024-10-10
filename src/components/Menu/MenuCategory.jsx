/* eslint-disable react/prop-types */
import ProductCard from "../ProductCard";

export default function MenuCategory({ _id, title, list }) {
    return (
        <>
            <h1 id={_id} className="PSS text-7xl uppercase text-orange-600 text-center m-6">{title}</h1>
            <div className="flex justify-center flex-wrap gap-12 px-2 pb-6">
                {list.map(product => <ProductCard product={product} key={product.title} />)}
            </div>
        </>
    )
}

// /* eslint-disable react/prop-types */
// import DishCard from "../../components/DishCard";
// import GetProdcut from "../../components/GetProdcut";

// export default function MenuCategory({ catTitle, category }) {
//     const products = GetProdcut();

//     return (
//         <>
//             <h1 id={category} className="PSS text-7xl uppercase text-orange-600 text-center m-6">{catTitle}</h1>
//             <div className="flex justify-center flex-wrap gap-12 px-2">
//                 {products.map(product => (
//                     product.category === `${category}` &&
//                     <DishCard
//                         key={product.id}
//                         dish={product}
//                     />
//                 ))}
//             </div>
//         </>
//     )
// }