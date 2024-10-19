import { useLocation } from "react-router-dom";
import { comboOptionsList } from "../../utils/data";

export default function ComboOption({ productComboOption, onCOChange }) {
    const location = useLocation();
    const isComboOptions = location.state?.product?.details?.comboOptions || false;

    return (
        <section className="p-6">
            <h2 className="font-bold uppercase text-2xl text-center mb-5 w-full">combo options</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-y-2 justify-items-center">
                {isComboOptions && comboOptionsList.length > 0 && comboOptionsList.map((c) => (
                    <button key={c.title} onClick={() => onCOChange(c.title)} className={`sm:w-96 w-full px-4 py-3 flex items-center border rounded-2xl ${c.title === productComboOption ? 'border-orange-600 bg-orange-50' : 'border-white bg-stone-50'}`}>
                        <img src={c.image} alt={c.title} className="w-20 h-20" />
                        <div className="text-start ms-4">
                            <h3 className="font-bold text-sm capitalize">{c.title}</h3>
                            <p className="text-sm">{c.description}<span>{c.price === 0 ? '' : `(EGP ${c.price})`}</span></p>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}
