import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdShoppingCart } from "react-icons/md";
import { extrasList, comboOptionsList, breadList, drinksList } from "../utils/data";
import Size from "../components/Product/Size";
import Bread from "../components/Product/Bread";
import ComboOption from "../components/Product/ComboOption";
import Drink from "../components/Product/Drink";
import Extras from "../components/Product/Extras";
import { CartCounterContext } from "../utils/context";

export default function ProductPage() {
    const { setCartCounter } = useContext(CartCounterContext);
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const { state } = useLocation();
    const product = state?.product;

    const [size, setSize] = useState(product?.details.size[0]?.title || {});
    const [bread, setBread] = useState(breadList[0]?.title || {});
    const [CO, setCO] = useState(comboOptionsList[0]?.title || {});
    const [drink, setDrink] = useState({});
    const [extras, setExtras] = useState([]);
    const [totalPrice, setTotalPrice] = useState(product.price);

    const isNoComboSelected = CO?.en === 'no combo' || CO?.ar === 'لا اضافة';

    const calculateTotalPrice = () => {
        const selectedSize = product.details.size.find(s => s.title.en === size.en);
        const selectedBread = breadList.find(b => b.title.en === bread.en);
        const selectedComboOption = comboOptionsList.find(c => c.title.en === CO.en);
        const selectedDrink = !isNoComboSelected ? drinksList.find(d => d.title.en === drink.en) : { price: 0 };
        const extrasTotal = extras.reduce((acc, extra) => acc + (extrasList.find(e => e.title.en === extra.en)?.price || 0), 0);

        return (selectedSize?.price || 0) + (selectedBread?.price || 0) + (selectedComboOption?.price || 0) + (selectedDrink?.price || 0) + extrasTotal;
    };

    useEffect(() => {
        const newTotalPrice = calculateTotalPrice();
        setTotalPrice(newTotalPrice);
    }, [extras, drink, size, CO, bread]);

    function addToCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const des = {
            en: [drink.en || '', extras.map(extra => extra.en).join(', ') || '', bread.en === 'white' ? '' : bread.en].filter(Boolean).join(' '),
            ar: [drink.ar || '', extras.map(extra => extra.ar).join(', ') || '', bread.ar === 'عيش ابيض' ? '' : bread.ar].filter(Boolean).join(' ')
        };

        const cartItem = {
            id: Date.now(),
            image: isNoComboSelected ? (product.image || '/images/not-found.webp') : (product.imageWithCombo || '/images/not-found.webp'),
            title: {
                en: [product.title.en, (CO.en === 'no combo' ? '' : CO.en) || ''].filter(Boolean).join(' '),
                ar: [product.title.ar, (CO.ar === 'لا اضافة' ? '' : CO.ar) || ''].filter(Boolean).join(' ')
            },
            quantity: 1,
            price: totalPrice,
            totalPrice: totalPrice
        };

        if (des.en || des.ar) { cartItem.description = des }
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
        setCartCounter(cart.length);
        navigate('/Menu')
        window.scrollTo({ top: 0, });
    }


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
            {!isNoComboSelected && <Drink selectedDrink={drink} onDrinkChange={setDrink} />}
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
