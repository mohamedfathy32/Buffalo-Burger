import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CartContext, DataContext } from "../utils/context";
import { getCollectionByName } from "../utils/firebase";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { MdShoppingCart } from "react-icons/md";
import Splash from "../components/Splash";

export default function OfferPage() {
    const { data, setData } = useContext(DataContext);
    const { setCart } = useContext(CartContext);
    const { t, i18n } = useTranslation();
    const { state } = useLocation();
    const navigate = useNavigate();
    const offer = state?.offer;
    const lang = i18n.language;

    const [tabIndex, setTabIndex] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [availableProducts, setAvailableProducts] = useState([]);
    const [order, setOrder] = useState({});
    const [loading, setLoading] = useState(true);
    const [drinkSelection, setDrinkSelection] = useState([]);
    const [friesSelection, setFriesSelection] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                if (!data.products) {
                    const products = await getCollectionByName('products');
                    setData({ products });
                }
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    useEffect(() => {
        if (!offer || !data.products) return;

        const productsInOffer = offer.availableProducts.map(avail =>
            data.products?.find(p => p.title?.en === avail)
        );

        const initialOrder = offer.tabs.reduce((acc, tab, idx) => {
            if (tab.title.en.includes('choice')) {
                acc[`choice${idx + 1}`] = productsInOffer[0]?.title;
                acc[`fries${idx + 1}`] = offer.availableFries[0]?.title;
                acc[`drink${idx + 1}`] = offer.availableDrinks[0]?.title;
            }
            return acc;
        }, {});

        setAvailableProducts(productsInOffer);
        setOrder(initialOrder);
        setDrinkSelection(Array(offer.tabs.filter(tab => tab.title.en.includes('choice')).length).fill(offer.availableDrinks[0].title[lang]));
        setFriesSelection(Array(offer.tabs.filter(tab => tab.title.en.includes('choice')).length).fill(offer.availableFries[0].title[lang]));

        calculateTotalPrice(initialOrder);
    }, [offer, data]);

    const calculateTotalPrice = (currentOrder) => {
        const friesTotal = Object.keys(currentOrder).filter(key => key.includes('fries')).reduce((acc, key) => {
            const selectedFries = offer.availableFries.find(f => f.title[lang] === currentOrder[key][lang]);
            return acc + (selectedFries ? selectedFries.price : 0);
        }, 0);

        const drinksTotal = Object.keys(currentOrder).filter(key => key.includes('drink')).reduce((acc, key) => {
            const selectedDrink = offer.availableDrinks.find(d => d.title[lang] === currentOrder[key][lang]);
            return acc + (selectedDrink ? selectedDrink.price : 0);
        }, 0);

        const choicesTotal = Object.keys(currentOrder).filter(key => key.includes('choice')).reduce((acc, key) => {
            const selectedProduct = availableProducts.find(p => p?.title[lang] === currentOrder[key][lang]);
            return acc + (selectedProduct ? selectedProduct.price : 0);
        }, 0);

        setTotalPrice(offer.price + friesTotal + drinksTotal + choicesTotal);
    };

    const handleChange = (selectionType, index, value) => {
        const updatedOrder = { ...order, [`${selectionType}${index + 1}`]: value };
        setOrder(updatedOrder);
        calculateTotalPrice(updatedOrder);
    };

    function addToCart() {
        if (tabIndex < offer.tabs.length - 1) {
            setTabIndex(prev => prev + 1);
        } else {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const description = {
                en: `${Object.values(order).map(item => item?.en).join(', ')}`,
                ar: `${Object.values(order).map(item => item?.ar).join(', ')}`,
            };

            const cartItem = {
                id: Date.now(),
                image: offer.image || '/images/not-found.webp',
                title: offer.title,
                description,
                quantity: 1,
                price: totalPrice,
                totalPrice: totalPrice,
            };

            cart.push(cartItem);
            localStorage.setItem('cart', JSON.stringify(cart));
            setCart(cart);
            navigate('/Menu');
            window.scrollTo({ top: 0 });
        }
    }

    const radioStyles = {
        '& .MuiSvgIcon-root': { color: '#ff5f00' },
        '&.Mui-checked': { color: '#ff5f00' }
    };
    const labelStyles = {
        '& .MuiTypography-root': { color: 'black' },
        '& .Mui-checked + .MuiTypography-root': { color: '#ff5f00' }
    };

    return (loading ? <Splash /> :
        <>
            <section className="bg-[#1c1c1b] flex justify-center items-center lg:flex-row flex-col p-4">
                <img src={offer.image} alt={offer.title[lang]} className="place-items-center w-[150px] h-[150px]" />
                <div className="lg:text-start text-center md:my md:mx-16">
                    <h2 className="text-orange-600 font-bold text-2xl capitalize">{offer.title[lang]}</h2>
                    <p className="text-white max-w-[500px]">{offer.description[lang]}</p>
                </div>
            </section>

            <div className="overflow-x-scroll sbw-none">
                <div className="w-fit min-w-full flex justify-center bg-[#1c1c1b] text-white">
                    {offer.tabs.map((tab, i) =>
                        <p key={tab.title.en} onClick={() => { setTabIndex(i) }} className={`min-w-28 p-2.5 mx-0.5 my-1.5 text-center font-bold uppercase text-lg text-white cursor-pointer rounded-md ${i === tabIndex && 'bg-orange-600'} hover:bg-orange-600`}>
                            {tab.title[lang]}
                        </p>)}
                </div>
            </div>

            <div className="p-4 mb-48">
                {offer.tabs[tabIndex].title.en.includes('choice') &&
                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-y-2 justify-items-center">
                        {availableProducts.map(avail =>
                            <button
                                key={avail?.title.en}
                                onClick={() => setOrder({ ...order, [`choice${tabIndex + 1}`]: avail?.title })}
                                className={`sm:w-96 w-full px-4 py-3 flex items-center border rounded-2xl ${avail?.title[lang] === order[`choice${tabIndex + 1}`]?.[lang] ? 'border-orange-600 bg-orange-50' : 'border-white bg-stone-50'}`}>
                                <img src={avail?.image || '/images/not-found.webp'} alt={avail?.title[lang]} className="w-20 h-20" />
                                <div className="text-start ms-4">
                                    <h3 className="font-bold text-sm capitalize">{avail?.title[lang]}</h3>
                                    <p className="text-sm text-gray-500">{avail?.description[lang]}</p>
                                </div>
                            </button>
                        )}
                    </div>
                }

                {offer.tabs[tabIndex].title.en === "fries" && (
                    <div className="w-full p-6">
                        {offer.tabs.filter(tab => tab.title.en.includes('choice')).map((_, i) => (
                            <div key={i}>
                                <h2 className="font-bold uppercase text-2xl text-center mb-5">{`${t('fries')} ${i + 1}`}</h2>
                                <RadioGroup
                                    value={friesSelection[i]}
                                    name={`fries-${i}`}
                                    onChange={(e) => {
                                        const selectedFries = offer.availableFries.find(fry => fry.title[lang] === e.target.value);
                                        setFriesSelection(prev => {
                                            const newSelection = [...prev];
                                            newSelection[i] = selectedFries.title[lang];
                                            return newSelection;
                                        });
                                        setOrder(prevOrder => ({
                                            ...prevOrder,
                                            [`fries${i + 1}`]: selectedFries.title
                                        }));
                                    }}
                                >
                                    <div className="flex justify-center items-center">
                                        <div className="flex flex-col gap-2 lg:gap-8 lg:flex-row">
                                            {offer.availableFries.map((fry) => (
                                                <FormControlLabel
                                                    key={fry.title.en}
                                                    value={fry.title[lang]}
                                                    control={<Radio sx={radioStyles} />}
                                                    sx={labelStyles}
                                                    label={`${fry.title[lang]} ${fry.price === 0 ? '' : `(${lang === 'en' ? 'EGP' : 'ج.م'} ${fry.price})`}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </RadioGroup>
                            </div>
                        ))}
                    </div>
                )}

                {/* bug in drink and fries */}

                {offer.tabs[tabIndex].title.en === "drinks" ? (
                    <div className="w-full p-6">
                        {offer.tabs.filter(tab => tab.title.en.includes('choice')).map((_, i) => (
                            <div key={i}>
                                <h2 className="font-bold uppercase text-2xl text-center mb-5">{i + 1} Drink</h2>
                                <RadioGroup
                                    value={drinkSelection[i]}
                                    name={`drink-${i}`}
                                    onChange={(e) => {
                                        const selectedDrink = offer.availableDrinks.find(drink => drink.title[lang] === e.target.value);
                                        setDrinkSelection(prev => {
                                            const newSelection = [...prev];
                                            newSelection[i] = selectedDrink.title[lang];
                                            return newSelection;
                                        });
                                        setOrder(prevOrder => ({
                                            ...prevOrder,
                                            [`drink${i + 1}`]: selectedDrink.title
                                        }));
                                    }}
                                >
                                    <div className="flex justify-center items-center">
                                        <div className="flex flex-col gap-2 lg:gap-8 lg:flex-row">
                                            {offer.availableDrinks.map((drink) => (
                                                <FormControlLabel
                                                    key={drink.title.en}
                                                    value={drink.title[lang]}
                                                    control={<Radio sx={radioStyles} />}
                                                    sx={labelStyles}
                                                    label={`${drink.title[lang]} ${drink.price === 0 ? '' : `(${drink.price} ${lang === 'en' ? 'EGP' : 'ج.م'})`}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </RadioGroup>
                            </div>
                        ))}
                    </div>
                ) : ''}
            </div>

            <section className="w-full p-4 fixed bottom-0 flex justify-center items-center gap-6 bg-gray-50">
                <div className="flex justify-center gap-3 items-center">
                    <div>
                        <h2 className="capitalize text-2xl font-bold">Total</h2>
                        <span className="capitalize text-sm text-gray-500">Including VAT</span>
                    </div>
                    <span className="text-lg font-bold mt-auto mb-2">EGP {totalPrice}</span>
                </div>
                <button onClick={addToCart} className="px-12 py-3 flex justify-center items-center gap-1 bg-orange-600 rounded-lg text-white text-xl uppercase">
                    {tabIndex !== offer.tabs.length - 1 ? 'Next' : <><MdShoppingCart className="text-2xl" /> {t('addToCart')}</>}
                </button>
            </section>
        </>
    );
}

