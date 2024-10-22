import { Checkbox, FormControlLabel } from "@mui/material";
import { extrasList } from "../../utils/data";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export default function Extras({ selectedExtras, onExtrasChange }) {
    const { t, i18n } = useTranslation()
    const { state } = useLocation()
    const isExtras = state.product.details.extras || false

    const handleExtraChange = (extraTitle, isChecked) => {
        const updatedExtras = isChecked
            ? [...selectedExtras, extraTitle]
            : selectedExtras.filter((item) => item !== extraTitle);
        onExtrasChange(updatedExtras);
    };
    const checkboxStyles = {
        '& .MuiSvgIcon-root': { color: '#ff5f00' },
        '&.Mui-checked': { color: '#ff5f00' },
    };
    const labelStyles = {
        '& .MuiTypography-root': { color: 'black', '&:hover': { color: '#ff5f00' }, },
        '& .Mui-checked + .MuiTypography-root': { color: '#ff5f00', },
    };

    return (isExtras &&
        <section className="p-6">
            <h2 className="font-bold uppercase text-2xl text-center mb-5 w-full">{t('extras')}</h2>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-start bg-stone-50 rounded-xl p-8">
                    {extrasList.map((extra) => (
                        <div key={extra.title.en} className="w-full p-4 capitalize bg-white rounded-lg">
                            <FormControlLabel control={<Checkbox checked={selectedExtras.includes(extra.title.en)}
                                onChange={(e) => handleExtraChange(extra.title.en, e.target.checked)} sx={checkboxStyles} />}
                                label={`${i18n.language === 'en' ? extra.title.en : extra.title.ar} (${i18n.language === 'en' ? 'EGP' : 'ج.م'} ${extra.price})`} sx={labelStyles} />
                        </div>))}
                </div>
            </div>
        </section>
    );
}