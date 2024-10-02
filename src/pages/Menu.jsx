import KeenSlider from "../components/KeenSlider"
import MenuCategory from "../components/MenuCategory"
import MenuNav from "../components/MenuNav"

export default function Menu() {
    const cat_burger = [
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
    ]
    const cat_chicken = [
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
    ]
    const cat_keto = [
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
    ]
    const cat_sauces = [
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
    ]
    const cat_appetizers = [
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
    ]
    const cat_dessert = [
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            price: '190'
        },
    ]
    const cat_drinks = [
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: '',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: '',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: '',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: '',
            price: '190'
        },
        {
            id: Date.now(),
            image: '/baconmushroomjack.webp',
            title: 'bacon mushroom jack',
            description: '',
            price: '190'
        },
    ]

    return (
        <>
            <div className="sticky top-28 z-10 w-full" ><MenuNav /></div>
            <h1 id="offer" className="PSS text-7xl uppercase text-orange-600 text-center m-6">offers</h1>
            <div className="mx-3 my-6"><KeenSlider /></div>
            <MenuCategory _id={'burger'} catList={cat_burger} catTitle={'Burger Sandwiches'} />
            <MenuCategory _id={'chicken'} catList={cat_chicken} catTitle={'Chichen Sandwiches'} />
            <MenuCategory _id={'keto'} catList={cat_keto} catTitle={'Keto & Light Sandwiches'} />
            <MenuCategory _id={'appetizer'} catList={cat_appetizers} catTitle={'Appetizers'} />
            <MenuCategory _id={'sauce'} catList={cat_sauces} catTitle={'sauces'} />
            <MenuCategory _id={'dessert'} catList={cat_dessert} catTitle={'desserts'} />
            <MenuCategory _id={'drink'} catList={cat_drinks} catTitle={'drinks'} />
        </>
    )
}