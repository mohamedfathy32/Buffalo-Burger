import { useLocation } from "react-router-dom";
import { comboOptionsList } from "../../utils/data";
import { useTranslation } from "react-i18next";

export default function ComboOption({ selectedComboOption, onComobOptionChange }) {
    const { t, i18n } = useTranslation()

    const { state } = useLocation();
    const isComboOptions = state.product.details.comboOptions || false;

    return (isComboOptions &&
        <section className="p-6">
            <h2 className="font-bold uppercase text-2xl text-center mb-5 w-full">{t('comboOptions')}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-y-2 justify-items-center">
                {comboOptionsList.map((co) => (
                    <button key={co.title.en} onClick={() => onComobOptionChange(co.title.en)} className={`sm:w-96 w-full px-4 py-3 flex items-center border rounded-2xl ${co.title.en === selectedComboOption ? 'border-orange-600 bg-orange-50' : 'border-white bg-stone-50'}`}>
                        <img src={co.image} alt={co.title.en} className="w-20 h-20" />
                        <div className="text-start ms-4">
                            <h3 className="font-bold text-sm capitalize">{co.title.en !== 'no combo' && (i18n.language === 'en' ? co.title.en : co.title.ar)}</h3>
                            <p className="text-sm">{i18n.language === 'en' ? co.description.en : co.description.ar}<span>{co.price === 0 ? '' : `(${i18n.language === 'en' ? 'EGP' : 'ج.م'} ${co.price})`}</span></p>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}
