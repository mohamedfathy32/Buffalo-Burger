import MenuNav from "../../components/MenuNav"
import KeenSlider from "../../components/KeenSlider"
import MenuCategory from "./MenuCategory"

export const cat_burger = [
    {
        id: 1,
        image: '/images/burger-sandwiches/shiitake-mushroom.webp',
        title: 'shiitake mushroom',
        description: 'Sautéed mushroom, cheddar cheese, and creamy mayonnaise spread on top of our pure beef burger patty.',
        price: '155'
    },
    {
        id: 2,
        image: '/images/burger-sandwiches/animal-style.webp',
        title: 'animal style',
        description: 'Crispy onion rings, topped with semi dijon mustard, creamy Buffalo sauce, and cheddar cheese.',
        price: '155'
    },
    {
        id: 3,
        image: '/images/burger-sandwiches/bacon-mushroom-jack.webp',
        title: 'bacon mushroom jack',
        description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
        price: '190'
    },
    {
        id: 4,
        image: '/images/burger-sandwiches/old-school.webp',
        title: 'old school',
        description: 'Sautéed mushroom, cheddar cheese, and creamy mayonnaise spread on top of our pure beef burger patty.',
        price: '175'
    },
    {
        id: 5,
        image: '/images/burger-sandwiches/blue-cheese.webp',
        title: 'blue cheese',
        description: 'Sautéed mushroom, cheddar cheese, and creamy mayonnaise spread on top of our pure beef burger patty.',
        price: '150'
    },
    {
        id: 6,
        image: '/images/burger-sandwiches/the-rastafari.webp',
        title: 'the rastafari',
        description: 'Sautéed mushroom, cheddar cheese, and creamy mayonnaise spread on top of our pure beef burger patty.',
        price: '170'
    },
    {
        id: 7,
        image: '/images/burger-sandwiches/the-muscular.webp',
        title: 'the muscular',
        description: 'Sautéed mushroom, cheddar cheese, and creamy mayonnaise spread on top of our pure beef burger patty.',
        price: '175'
    },
    {
        id: 8,
        image: '/images/burger-sandwiches/the-secret-burger.webp',
        title: 'the secret burger',
        description: 'Sautéed mushroom, cheddar cheese, and creamy mayonnaise spread on top of our pure beef burger patty.',
        price: '180'
    },
    {
        id: 9,
        image: '/images/burger-sandwiches/hitchhiker.webp',
        title: 'hitchhiker',
        description: 'Sautéed mushroom, cheddar cheese, and creamy mayonnaise spread on top of our pure beef burger patty.',
        price: '190'
    },
    {
        id: 10,
        image: '/images/burger-sandwiches/x-urban.webp',
        title: 'x urban',
        description: 'Sautéed mushroom, cheddar cheese, and creamy mayonnaise spread on top of our pure beef burger patty.',
        price: '195'
    },
    {
        id: 11,
        image: '/images/burger-sandwiches/double-jab.webp',
        title: 'double jab',
        description: 'Sautéed mushroom, cheddar cheese, and creamy mayonnaise spread on top of our pure beef burger patty.',
        price: '205'
    },
    {
        id: 12,
        image: '/images/burger-sandwiches/charbroiled-bbq.webp',
        title: 'charbroiled bbq',
        description: 'Sautéed mushroom, cheddar cheese, and creamy mayonnaise spread on top of our pure beef burger patty.',
        price: '175'
    },
    {
        id: 13,
        image: '/images/burger-sandwiches/cholos.webp',
        title: "cholo's",
        description: 'Sautéed mushroom, cheddar cheese, and creamy mayonnaise spread on top of our pure beef burger patty.',
        price: '150'
    },
    {
        id: 14,
        image: '/images/burger-sandwiches/grungy.webp',
        title: 'grungy',
        description: 'Sautéed mushroom, cheddar cheese, and creamy mayonnaise spread on top of our pure beef burger patty.',
        price: '145'
    },
    {
        id: 15,
        image: '/images/burger-sandwiches/truffle-beef-burger.webp',
        title: 'truffle beef burger',
        description: 'Sautéed mushroom, cheddar cheese, and creamy mayonnaise spread on top of our pure beef burger patty.',
        price: '165'
    },
]
export default function Menu() {

    return (
        <>
            <div className="sticky top-28 z-10 w-full" ><MenuNav /></div>
            <h1 id="offer" className="PSS text-7xl uppercase text-orange-600 text-center m-6">offers</h1>
            <div className="mx-3 my-6"><KeenSlider /></div>
            <MenuCategory hash={'burger'} catList={cat_burger} catTitle={'Burger Sandwiches'} />
        </>
    )
}