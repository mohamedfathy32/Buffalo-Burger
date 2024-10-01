import DishCard from "../components/DishCard"
import MenuNav from "../components/MenuNav"

export default function Menu() {
    const dishes = [
        {
            id: Date.now(),
            image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fd845c9309b0d95d8c5d945b6b2552491.png&w=256&q=75',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fd845c9309b0d95d8c5d945b6b2552491.png&w=256&q=75',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fd845c9309b0d95d8c5d945b6b2552491.png&w=256&q=75',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fd845c9309b0d95d8c5d945b6b2552491.png&w=256&q=75',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fd845c9309b0d95d8c5d945b6b2552491.png&w=256&q=75',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fd845c9309b0d95d8c5d945b6b2552491.png&w=256&q=75',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fd845c9309b0d95d8c5d945b6b2552491.png&w=256&q=75',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fd845c9309b0d95d8c5d945b6b2552491.png&w=256&q=75',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fd845c9309b0d95d8c5d945b6b2552491.png&w=256&q=75',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },

    ]
    return (
        <>
            <MenuNav />
            <h1 id="burger" className="PSS text-7xl text-orange-600 text-center pt-5 mb-28">BURGER SANDWICHES</h1>
            <div className="flex justify-center flex-wrap gap-y-40 gap-x-12 px-2">
                {dishes.map(d => <DishCard
                    key={d.id}
                    image={d.image}
                    title={d.title}
                    description={d.description}
                    price={d.price} />)}
            </div>
        </>
    )
}