import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdShoppingCart } from "react-icons/md";
import { extrasList, comboOptionsList, breadList, drinksList } from "../utils/data";
import { CartCounterContext } from "../utils/context";
import Size from "../components/Product/Size";
import Bread from "../components/Product/Bread";
import ComboOption from "../components/Product/ComboOption";
import Drink from "../components/Product/Drink";
import Extras from "../components/Product/Extras";

export default function ProductPage() {
    const { setCartCounter } = useContext(CartCounterContext);
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const { state } = useLocation();
    const product = state?.product;

    const [size, setSize] = useState(product.details.size[0].title[i18n.language]);
    const [bread, setBread] = useState(breadList[0].title[i18n.language]);
    const [CO, setCO] = useState(comboOptionsList[0].title[i18n.language]);
    const [drink, setDrink] = useState(null);
    const [extras, setExtras] = useState([]);
    const [totalPrice, setTotalPrice] = useState(product.price);

    const calculateTotalPrice = () => {
        const selectedSize = product?.details.size.find(s => s.title[i18n.language] === size);
        const selectedBread = breadList.find(b => b.title[i18n.language] === bread);
        const selectedComboOption = comboOptionsList.find(c => c.title[i18n.language] === CO);
        const selectedDrink = CO !== 'no combo' ? drinksList.find(d => d.title[i18n.language] === drink) : 0;
        const extrasTotal = extras.reduce((acc, extra) => acc + (extrasList.find(e => e.title[i18n.language] === extra)?.price || 0), 0);
        return (selectedSize?.price || 0) + (selectedBread?.price || 0) + (selectedComboOption?.price || 0) + (selectedDrink?.price || 0) + extrasTotal;
    };

    // useEffect(() => {
    //     const newTotalPrice = calculateTotalPrice();
    //     setTotalPrice(newTotalPrice);
    //     const order = {
    //         product: product?.title[i18n.language],
    //         bread,
    //         CO,
    //         drink: (CO === 'no combo' || CO === 'لا اضافة') ? null : drink,
    //         extras: extras,
    //         price: newTotalPrice
    //     };
    //     localStorage.setItem('order', JSON.stringify(order));
    // }, [size, bread, CO, drink, extras, product]);

    function addToCart() {
        if (CO !== 'no combo' && drink === null) { return }
        else {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push({
                id: Date.now(),
                image: CO ? (product.imageWithCombo || '/images/not-found.webp') : (product.image || '/images/not-found.webp'),
                title: `${product.title[i18n.language]} ${(CO === 'no combo' || CO === 'لا اضافة') ? '' : CO}`,
                description: `${drink === null ? '' : drink} ${extras.length ? extras.join(', ') : ''} ${(bread === 'white' || bread === 'عيش ابيض') ? '' : bread}`,
                quantity: 1,
                price: totalPrice,
                totalPrice: totalPrice
            });
            localStorage.removeItem('order')
            localStorage.setItem('cart', JSON.stringify(cart));
            setCartCounter(cart.length);
            navigate(-1);
        }
    };

    return (
        <>
            <section className="bg-stone-900 flex justify-center items-center lg:flex-row flex-col p-4">
                <img src={product?.image} alt={product?.title.en} className="w-[150px] h-[150px]" />
                <div className="lg:text-start text-center md:mx-16">
                    <h2 className="text-orange-600 font-bold text-2xl capitalize">{product?.title[i18n.language]}</h2>
                    <p className="text-white max-w-[500px]">{product?.description[i18n.language]}</p>
                </div>
            </section>
            <Size selectedSize={size} onSizeChange={setSize} />
            <Bread selectedBread={bread} onBreadChange={setBread} />
            <ComboOption selectedComboOption={CO} onComobOptionChange={setCO} noComboImage={product.image} />
            {(CO !== 'no combo' && CO !== 'لا اضافة') && <Drink selectedDrink={drink} onDrinkChange={setDrink} />}
            <Extras selectedExtras={extras} onExtrasChange={setExtras} />
            <section id="total" className="w-full p-4 flex flex-col lg:flex-row-reverse fixed bottom-0 justify-center items-center gap-6 bg-gray-50">
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
        </>
    );
}