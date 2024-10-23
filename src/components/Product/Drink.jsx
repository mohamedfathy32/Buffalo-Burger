import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { drinksList } from "../../utils/data";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Drink({ selectedDrink, onDrinkChange }) {
    const { t, i18n } = useTranslation()
    const { state } = useLocation();
    const isDrink = state?.product.details.drinks || false;
    const radioStyles = { '& .MuiSvgIcon-root': { color: '#ff5f00' }, '&.Mui-checked': { color: '#ff5f00' } };
    const labelStyles = { '& .MuiTypography-root': { color: 'black' }, '& .Mui-checked + .MuiTypography-root': { color: '#ff5f00' } };
    return (isDrink &&
        <section className="p-6">
            <h2 className="font-bold uppercase text-2xl text-center mb-5 w-full">{t('drinks')}</h2>
            <div className="w-fit m-auto">
                <RadioGroup value={selectedDrink || null} onChange={(e) => onDrinkChange(e.target.value)} aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                    <div className="flex flex-col capitalize lg:flex-wrap xl:flex-row gap-3">
                        {drinksList.map(drink =>
                            <FormControlLabel key={drink.title.en} value={drink.title[i18n.language]} control={<Radio sx={radioStyles} />} sx={labelStyles}
                                label={`${drink.title[i18n.language]} ${drink.price === 0 ? '' : `(${i18n.language === 'en' ? 'EGP' : 'ج.م'} ${drink.price})`}`}
                            />)}
                    </div>
                </RadioGroup>
            </div>
        </section>
    );
}