import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { productList } from "../utils/data";

export default function OfferPage() {
    const { state } = useLocation();
    const { i18n } = useTranslation()
    const [tabIndex, setTabIndex] = useState(0);
    const [order, setOrder] = useState({
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        choice5: '',
        choice6: '',
        drink1: '',
        drink2: '',
        drink3: '',
        drink4: '',
        drink5: '',
        drink6: '',
        fries1: '',
        fries2: '',
        fries3: '',
        fries4: '',
        fries5: '',
        fries6: '',
    })
    const offer = state.offer
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

            {/* {offer.tabs.map((tab, i) => )} */}

            <div className="p-4">
                {offer.tabs[tabIndex].title.en.includes('choice 1') &&
                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-y-2 justify-items-center">
                        {productList.map(product => offer.availableProducts.map(avail => avail === product.title.en &&
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
                        {productList.map(product => offer.availableProducts.map(avail => avail === product.title.en &&
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
                        {productList.map(product => offer.availableProducts.map(avail => avail === product.title.en &&
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
                        {productList.map(product => offer.availableProducts.map(avail => avail === product.title.en &&
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
                        {productList.map(product => offer.availableProducts.map(avail => avail === product.title.en &&
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
                        {productList.map(product => offer.availableProducts.map(avail => avail === product.title.en &&
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
                    <div>
                        <ul className="list-disc list-inside text-white">
                            {offer.availableFries.map((fry, i) => (
                                <RadioGroup value={selectedBread || breadList[0].title[i18n.language]} onChange={(e) => { onBreadChange(e.target.value) }} aria-labelledby="demo-radio-buttons-group-label" defaultValue={breadList[0].title[i18n.language]} name="radio-buttons-group">
                                    <div className="flex flex-col gap-2 lg:gap-8 lg:flex-row justify-center items-center">
                                        {breadList.map(bread =>
                                            <div key={bread.title.en} className="bg-white rounded-xl capitalize lg:w-72 w-52 px-4 py-2">
                                                <FormControlLabel value={bread.title[i18n.language]} control={<Radio sx={radioStyles} />} sx={labelStyles}
                                                    label={`${bread.title[i18n.language]} ${i18n.language === 'en' ? 'Bread' : ''}  ${bread.price === 0 ? '' : `(${i18n.language === 'en' ? 'EGP' : 'ج.م'} ${bread.price})`}`} />
                                            </div>
                                        )}
                                    </div>
                                </RadioGroup>
                            ))}
                        </ul>
                    </div>
                )}

                {Array.from({ length: 4 }, (_, i) => (
                    <div key={i}>Div {i + 1}</div>
                ))}




                {offer.tabs[tabIndex].title.en === "drinks" && (
                    <div>
                        <ul className="list-disc list-inside text-white">
                            {offer.availableDrinks.map((drink, i) => (
                                <li key={i} className="text-lg text-black">
                                    {drink.title[i18n.language]} — ${drink.price}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div >
        </>
    );
}