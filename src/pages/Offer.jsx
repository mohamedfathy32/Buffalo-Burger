import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { ProductsContext } from "../utils/context";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

export default function OfferPage() {
    const { products } = useContext(ProductsContext)
    const { state } = useLocation();
    const offer = state?.offer
    const [order, setOrder] = useState({})
    const { i18n } = useTranslation()
    const [tabIndex, setTabIndex] = useState(0);
    const [availableProducts, setAvailableProducts] = useState([])

    useEffect(() => {
        if (products && offer) {
            const av = offer.availableProducts.map(avail => products.find(p => p.title.en === avail))
            setAvailableProducts(av)
            setOrder({
                choice1: av[0]?.title[i18n.language],
                choice2: av[0]?.title[i18n.language],
                choice3: av[0]?.title[i18n.language],
                choice4: av[0]?.title[i18n.language],
                choice5: av[0]?.title[i18n.language],
                choice6: av[0]?.title[i18n.language],
                drink1: offer.availableDrinks[0].title[i18n.language],
                drink2: offer.availableDrinks[0].title[i18n.language],
                drink3: offer.availableDrinks[0].title[i18n.language],
                drink4: offer.availableDrinks[0].title[i18n.language],
                drink5: offer.availableDrinks[0].title[i18n.language],
                drink6: offer.availableDrinks[0].title[i18n.language],
                fries1: offer.availableFries[0].title[i18n.language],
                fries2: offer.availableFries[0].title[i18n.language],
                fries3: offer.availableFries[0].title[i18n.language],
                fries4: offer.availableFries[0].title[i18n.language],
                fries5: offer.availableFries[0].title[i18n.language],
                fries6: offer.availableFries[0].title[i18n.language],
            })
        }
    }, [products, offer, i18n.language]);

    const radioStyles = {
        '& .MuiSvgIcon-root': { color: '#ff5f00' },
        '&.Mui-checked': { color: '#ff5f00' }
    };
    const labelStyles = {
        '& .MuiTypography-root': { color: 'black' },
        '& .Mui-checked + .MuiTypography-root': { color: '#ff5f00' }
    };

    return (
        <>
            <section className="bg-stone-900 flex justify-center items-center lg:flex-row flex-col p-4">
                <img src={offer.image} alt={offer.title[i18n.language]} className="place-items-center w-[150px] h-[150px]" />
                <div className="lg:text-start text-center md:my md:mx-16">
                    <h2 className="text-orange-600 font-bold text-2xl capitalize">{offer.title[i18n.language]}</h2>
                    <p className="text-white max-w-[500px]">{offer.description[i18n.language]}</p>
                </div>
            </section>

            <div className="overflow-x-scroll sbw-none">
                <div className="w-fit min-w-full flex justify-center bg-stone-900 text-white">
                    {offer.tabs.map((tab, i) =>
                        <p key={tab.title.en} onClick={() => { setTabIndex(i) }} className={`min-w-24 p-2.5 mx-0.5 my-1.5 text-center font-bold uppercase text-lg text-white cursor-pointer rounded-md ${i == tabIndex && 'bg-orange-600'} hover:bg-orange-600`}>
                            {tab.title[i18n.language]}
                        </p>)}
                </div>
            </div>

            <div className="p-4">
                {offer.tabs[tabIndex].title.en.includes('choice 1') &&
                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-y-2 justify-items-center">
                        {availableProducts.map(avail => products.map(product => avail?.title[i18n.language] === product?.title[i18n.language] &&
                            <button key={product.title.en} onClick={() => setOrder({ ...order, choice1: product.title[i18n.language] })} className={`sm:w-96 w-full px-4 py-3 flex items-center border rounded-2xl ${product.title[i18n.language] === order.choice1 ? 'border-orange-600 bg-orange-50' : 'border-white bg-stone-50'}`}>
                                <img src={product.image || '/images/not-found.webp'} alt={product.title[i18n.language]} className="w-20 h-20" />
                                <div className="text-start ms-4">
                                    <h3 className="font-bold text-sm capitalize">{product.title[i18n.language]}</h3>
                                    <p className="text-sm text-gray-500">{product.description[i18n.language]}</p>
                                </div>
                            </button>))
                        }
                    </div>
                }
                {offer.tabs[tabIndex].title.en.includes('choice 2') &&
                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-y-2 justify-items-center">
                        {availableProducts.map(avail => products.map(product => avail?.title[i18n.language] === product?.title[i18n.language] &&
                            <button key={product.title.en} onClick={() => setOrder({ ...order, choice2: product.title[i18n.language] })} className={`sm:w-96 w-full px-4 py-3 flex items-center border rounded-2xl ${product.title[i18n.language] === order.choice2 ? 'border-orange-600 bg-orange-50' : 'border-white bg-stone-50'}`}>
                                <img src={product.image || '/images/not-found.webp'} alt={product.title[i18n.language]} className="w-20 h-20" />
                                <div className="text-start ms-4">
                                    <h3 className="font-bold text-sm capitalize">{product.title[i18n.language]}</h3>
                                    <p className="text-sm text-gray-500">{product.description[i18n.language]}</p>
                                </div>
                            </button>))
                        }
                    </div>
                }
                {offer.tabs[tabIndex].title.en.includes('choice 3') &&
                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-y-2 justify-items-center">
                        {availableProducts.map(avail => products.map(product => avail?.title[i18n.language] === product?.title[i18n.language] &&
                            <button key={product.title.en} onClick={() => setOrder({ ...order, choice3: product.title[i18n.language] })} className={`sm:w-96 w-full px-4 py-3 flex items-center border rounded-2xl ${product.title[i18n.language] === order.choice3 ? 'border-orange-600 bg-orange-50' : 'border-white bg-stone-50'}`}>
                                <img src={product.image || '/images/not-found.webp'} alt={product.title[i18n.language]} className="w-20 h-20" />
                                <div className="text-start ms-4">
                                    <h3 className="font-bold text-sm capitalize">{product.title[i18n.language]}</h3>
                                    <p className="text-sm text-gray-500">{product.description[i18n.language]}</p>
                                </div>
                            </button>))
                        }
                    </div>
                }
                {offer.tabs[tabIndex].title.en.includes('choice 4') &&
                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-y-2 justify-items-center">
                        {availableProducts.map(avail => products.map(product => avail?.title[i18n.language] === product?.title[i18n.language] &&
                            <button key={product.title.en} onClick={() => setOrder({ ...order, choice4: product.title[i18n.language] })} className={`sm:w-96 w-full px-4 py-3 flex items-center border rounded-2xl ${product.title[i18n.language] === order.choice4 ? 'border-orange-600 bg-orange-50' : 'border-white bg-stone-50'}`}>
                                <img src={product.image || '/images/not-found.webp'} alt={product.title[i18n.language]} className="w-20 h-20" />
                                <div className="text-start ms-4">
                                    <h3 className="font-bold text-sm capitalize">{product.title[i18n.language]}</h3>
                                    <p className="text-sm text-gray-500">{product.description[i18n.language]}</p>
                                </div>
                            </button>))
                        }
                    </div>
                }
                {offer.tabs[tabIndex].title.en.includes('choice 5') &&
                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-y-2 justify-items-center">
                        {availableProducts.map(avail => products.map(product => avail?.title[i18n.language] === product?.title[i18n.language] &&
                            <button key={product.title.en} onClick={() => setOrder({ ...order, choice5: product.title[i18n.language] })} className={`sm:w-96 w-full px-4 py-3 flex items-center border rounded-2xl ${product.title[i18n.language] === order.choice5 ? 'border-orange-600 bg-orange-50' : 'border-white bg-stone-50'}`}>
                                <img src={product.image || '/images/not-found.webp'} alt={product.title[i18n.language]} className="w-20 h-20" />
                                <div className="text-start ms-4">
                                    <h3 className="font-bold text-sm capitalize">{product.title[i18n.language]}</h3>
                                    <p className="text-sm text-gray-500">{product.description[i18n.language]}</p>
                                </div>
                            </button>))
                        }
                    </div>
                }
                {offer.tabs[tabIndex].title.en.includes('choice 6') &&
                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-y-2 justify-items-center">
                        {availableProducts.map(avail => products.map(product => avail?.title[i18n.language] === product?.title[i18n.language] &&
                            <button key={product.title.en} onClick={() => setOrder({ ...order, choice4: product.title[i18n.language] })} className={`sm:w-96 w-full px-4 py-3 flex items-center border rounded-2xl ${product.title[i18n.language] === order.choice4 ? 'border-orange-600 bg-orange-50' : 'border-white bg-stone-50'}`}>
                                <img src={product.image || '/images/not-found.webp'} alt={product.title[i18n.language]} className="w-20 h-20" />
                                <div className="text-start ms-4">
                                    <h3 className="font-bold text-sm capitalize">{product.title[i18n.language]}</h3>
                                    <p className="text-sm text-gray-500">{product.description[i18n.language]}</p>
                                </div>
                            </button>))
                        }
                    </div>
                }

                {offer.tabs[tabIndex].title.en === "fries" && (
                    <div className="w-full bg-stone-50 p-6">
                        {offer.tabs.map((tab, i) => tab.title.en.includes('choice') &&
                            <div key={tab.title.en}>
                                <h2 className="font-bold uppercase text-2xl text-center mb-5">{i + 1} Fries</h2>
                                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue='' name="radio-buttons-group">
                                    {offer.availableFries.map(fry =>
                                        <div key={fry.title.en} className="flex flex-col gap-2 lg:gap-8 lg:flex-row justify-center items-center">
                                            <FormControlLabel value={fry.title[i18n.language]} control={<Radio sx={radioStyles} />} sx={labelStyles}
                                                label={`${fry.title[i18n.language]} ${i18n.language === 'en' ? 'Bread' : ''}  ${fry.price === 0 ? '' : `(${i18n.language === 'en' ? 'EGP' : 'ج.م'} ${fry.price})`}`} />
                                        </div>
                                    )}
                                </RadioGroup>
                            </div>
                        )}

                    </div>
                )}

                {offer.tabs[tabIndex].title.en === "drinks" && (
                    <div className="w-full bg-stone-50 p-6">
                        {offer.tabs.map((tab, i) => tab.title.en.includes('choice') &&
                            <div key={tab.title.en}>
                                <h2 className="font-bold uppercase text-2xl text-center mb-5">{i + 1} Drink</h2>
                                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue='' name="radio-buttons-group">
                                    {offer.availableDrinks.map(drink =>
                                        <div key={drink.title.en} className="flex flex-col gap-2 lg:gap-8 lg:flex-row justify-center items-center">
                                            <FormControlLabel value={drink.title[i18n.language]} control={<Radio sx={radioStyles} />} sx={labelStyles}
                                                label={`${drink.title[i18n.language]} ${i18n.language === 'en' ? 'Bread' : ''}  ${drink.price === 0 ? '' : `(${i18n.language === 'en' ? 'EGP' : 'ج.م'} ${drink.price})`}`} />
                                        </div>
                                    )}
                                </RadioGroup>
                            </div>
                        )}

                    </div>
                )}
            </div >
        </>
    );
}