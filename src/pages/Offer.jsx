import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function OfferPage() {
    const [index, setIndex] = useState(0);
    const location = useLocation();
    const offer = location.state;

    return (
        <>
            <section id="image" className="bg-stone-900 flex justify-center items-center lg:flex-row flex-col p-4">
                <img src={offer.images.details} alt={offer.title} className="place-items-center w-[150px] h-[150px]" />
                <div className="lg:text-start text-center md:my md:mx-16">
                    <h2 className="text-orange-600 font-bold text-2xl capitalize">{offer.title}</h2>
                    <p className="text-white max-w-[500px]">{offer.description}</p>
                </div>
            </section>

            <div className="overflow-x-scroll sbw-none">
                <div className="w-fit min-w-full flex justify-center px-4 bg-stone-900 text-white">
                    {offer.tab.map((tab, i) => (
                        <p
                            key={tab.title}
                            id={tab.title}
                            className={`flex justify-center items-center font-bold px-2 py-2 m-2 min-w-[6em] cursor-pointer 
                                rounded-md text-white transition-colors duration-200
                                ${i === index ? 'bg-orange-600' : 'bg-stone-900'} 
                                hover:bg-orange-600`}
                            onClick={() => setIndex(i)}
                        >
                            {tab.title}
                        </p>
                    ))}
                </div>

                    <div className="p-4">
                        <h3 className="text-xl font-bold">تفاصيل {offer.tab[index].title}</h3>
                        <p>{offer.tab[index].content}</p>
                    </div>
            </div>
        </>
    );
}
