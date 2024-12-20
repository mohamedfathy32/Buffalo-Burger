import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { DataContext } from "../../utils/context";

export default function Drink({ selectedDrink, onDrinkChange }) {
    const { t, i18n } = useTranslation();
    const { state } = useLocation();
    const isDrink = state?.product.details.drinks || false;
    const { data } = useContext(DataContext);


    const radioStyles = {
        '& .MuiSvgIcon-root': { color: '#ff5f00' },
        '&.Mui-checked': { color: '#ff5f00' }
    };
    const labelStyles = {
        '& .MuiTypography-root': { color: 'black' },
        '& .Mui-checked + .MuiTypography-root': { color: '#ff5f00' }
    };

    return (isDrink &&
        <section className="p-6">
            <h2 className="font-bold uppercase text-2xl text-center mb-5 w-full">{t('drinks')}</h2>
            <div className="w-fit m-auto">
                <RadioGroup value={selectedDrink?.[i18n.language] || null} aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group"
                    onChange={(e) => { const selected = data.drinks?.find(drink => drink.title[i18n.language] === e.target.value); onDrinkChange(selected ? selected.title : {}); }}>
                    <div className="flex flex-col capitalize lg:flex-wrap xl:flex-row gap-3">
                        {data.drinks?.map(drink => (
                            <FormControlLabel key={drink.title.en} value={drink.title[i18n.language]} control={<Radio sx={radioStyles} />}
                                sx={labelStyles} label={`${drink.title[i18n.language]} ${drink.price === 0 ? '' : `( ${drink.price} ${t('EGP')} )`}`} />))
                        }
                    </div>
                </RadioGroup>
            </div>
        </section>
    )
}