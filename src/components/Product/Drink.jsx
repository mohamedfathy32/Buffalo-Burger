/* eslint-disable react/prop-types */
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { drinksList } from "../../utils/data";
import { useLocation } from "react-router-dom";

export default function Drink({ productDrink, onDrinkChange }) {
    const location = useLocation();
    const isDrink = location.state?.product?.details?.drinks || false;
    const radioStyles = { '& .MuiSvgIcon-root': { color: '#ff5f00' }, '&.Mui-checked': { color: '#ff5f00' } };
    const labelStyles = { '& .MuiTypography-root': { color: 'black' }, '& .Mui-checked + .MuiTypography-root': { color: '#ff5f00' } };

    return (
        <section className="p-6">
            <h2 className="font-bold uppercase text-2xl text-center mb-5 w-full">drinks</h2>
            <div className="w-fit m-auto">
                <RadioGroup value={productDrink} onChange={(e) => onDrinkChange(e.target.value)} aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                    <div className="flex flex-col capitalize lg:flex-wrap xl:flex-row gap-3">
                        {isDrink && drinksList.length > 0 && drinksList.map(drink => (
                            <div key={drink.title}>
                                <FormControlLabel value={drink.title} label={`${drink.title} ${drink.price === 0 ? '' : `(EGP ${drink.price})`}`} control={<Radio sx={radioStyles} />} sx={labelStyles} />
                            </div>))}
                    </div>
                </RadioGroup>
            </div>
        </section>
    );
}