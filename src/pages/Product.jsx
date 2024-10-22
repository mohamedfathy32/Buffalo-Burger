import { useContext, useEffect, useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { extrasList, comboOptionsList, breadList } from "../utils/data";
import Size from "../components/Product/Size";
import Bread from "../components/Product/Bread";
import ComboOption from "../components/Product/ComboOption";
import Drink from "../components/Product/Drink";
import Extras from "../components/Product/Extras";
import { useTranslation } from "react-i18next";
import { CartContext } from "../utils/context";

export default function ProductPage() {
    const { setCartCounter } = useContext(CartContext)

    const { t, i18n } = useTranslation()

    const navigate = useNavigate()
    const { state } = useLocation();
    const product = state.product;

    const [size, setSize] = useState('150');
    const [bread, setBread] = useState('white');
    const [CO, setCO] = useState('no combo');
    const [drink, setDrink] = useState('');
    const [extras, setExtras] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [order, setOrder] = useState(() => {
        const savedOrder = localStorage.getItem('order');
        return savedOrder ? JSON.parse(savedOrder) : {};
    });
    useEffect(() => {
        const calculateTotalPrice = () => {
            const selectedSize = product?.details.size.find(s => s.title === size);
            const selectedBread = breadList.find(b => b.title.en === bread);
            const selectedComboOption = comboOptionsList.find(c => c.title.en === CO);

            const comboPrice = selectedComboOption ? selectedComboOption.price : 0;
            const extrasTotal = extras.reduce((acc, extraTitle) => {
                const extraItem = extrasList.find(e => e.title.en === extraTitle);
                return acc + (extraItem ? extraItem.price : 0);
            }, 0);

            return (selectedSize?.price || 0) + (selectedBread?.price || 0) + comboPrice + extrasTotal;
        };
        setTotalPrice(calculateTotalPrice());
        const newOrder = {
            product: product?.title.en,
            size,
            bread,
            CO,
            drink: CO !== '' ? drink : null,
            extras,
            price: calculateTotalPrice(),
        };
        setOrder(newOrder);
        localStorage.setItem('order', JSON.stringify(newOrder));
    }, [size, bread, CO, drink, extras, product]);
    const addToCart = () => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const newCartItem = {
            id: Date.now(),
            image: CO ? product.imageWithCombo : product.image,
            title: `${product.title.en} ${CO}`,
            description: `${drink} ${extras.length ? extras.join(', ') : ''} ${bread}`,
            quantity: 1,
            price: product.price,
            totalPrice: totalPrice,
        };

        existingCart.push(newCartItem);
        localStorage.setItem('cart', JSON.stringify(existingCart));
        localStorage.removeItem('order');
        navigate('/Cart');
        setCartCounter(existingCart.length)
    };
    return (
        <>
            <div dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
                <section className="bg-stone-900 flex justify-center items-center lg:flex-row flex-col p-4">
                    <img src={product.image} alt={product.title.en} className="w-[150px] h-[150px]" />
                    <div className="lg:text-start text-center md:my md:mx-16">
                        <h2 className="text-orange-600 font-bold text-2xl capitalize">{i18n.language === 'en' ? product.title.en : product.title.ar}</h2>
                        <p className="text-white max-w-[500px]">{i18n.language === 'en' ? product.description.en : product.description.ar}</p>
                    </div>
                </section>
                <Size selectedSize={size} onSizeChange={setSize} />
                <Bread selectedBread={bread} onBreadChange={setBread} />
                <ComboOption selectedComboOption={CO} onComobOptionChange={setCO} />
                {CO !== 'no combo' && <Drink productDrink={drink} onDrinkChange={setDrink} />}
                <Extras selectedExtras={extras} onExtrasChange={setExtras} />

                <section id="total" className="w-full p-4 flex flex-col lg:flex-row-reverse sticky bottom-0 justify-center items-center gap-6 bg-gray-50">
                    <div className="flex justify-center gap-3 items-center">
                        <div>
                            <h2 className="capitalize text-2xl font-bold">Total</h2>
                            <span className="capitalize text-sm text-gray-500">Including VAT</span>
                        </div>
                        <span className="text-lg font-bold mt-auto mb-2">EGP {totalPrice}</span>
                    </div>
                    <button onClick={addToCart} className="px-12 py-3 flex justify-center items-center gap-1 bg-orange-600 rounded-lg text-white text-xl uppercase">
                        <MdShoppingCart className="text-2xl" /> {t('addToCart')}
                    </button>
                </section>
            </div>
        </>
    );
}