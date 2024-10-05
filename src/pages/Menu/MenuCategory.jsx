import DishCard from "../../components/DishCard";

// eslint-disable-next-line react/prop-types
export default function MenuCategory({ hash, catTitle, catList }) {
    const List = catList;
    return (
        <>
            <h1 id={hash} className="PSS text-7xl uppercase text-orange-600 text-center m-6">{catTitle}</h1>
            <div className="flex justify-center flex-wrap gap-12 px-2 pb-6">
                {List.map(dish => <DishCard
                    dish={dish}
                    key={dish.id}
                // image={dish.image}
                // title={dish.title}
                // description={dish.description}
                // price={dish.price}
                // id={dish.id}
                />)}
            </div>
        </>
    )
}
