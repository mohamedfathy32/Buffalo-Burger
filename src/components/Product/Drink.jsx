/* eslint-disable react/prop-types */
import { FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { drinksList } from "../../utils/data"
import { useLocation } from "react-router-dom"

export default function Drink({ productDrink, onDrinkChange }) {
    const location = useLocation()
    const isDrink = location.state.product.details.drinks

    return (
        <section id="drinks" className="p-6">
            <h2 className="font-bold uppercase text-2xl text-center mb-5 w-full">drinks</h2>
            <div className="w-fit m-auto">
                <RadioGroup value={productDrink} onChange={(e) => { onDrinkChange(e.target.value) }} aria-labelledby="demo-radio-buttons-group-label" defaultValue="orange juice" name="radio-buttons-group">
                    <div className="flex flex-col lg:flex-wrap xl:flex-row gap-3">
                        {isDrink && drinksList.map(drink => {
                            return <div key={drink.title}>
                                <FormControlLabel
                                    value={drink.title} label={`${drink.title} (EGP ${drink.price})`}
                                    control={<Radio sx={{ '& .MuiSvgIcon-root': { color: '#ff5f00' }, '&.Mui-checked': { color: '#ff5f00' } }} />}
                                    sx={{ '& .MuiTypography-root': { color: 'black' }, '& .Mui-checked + .MuiTypography-root': { color: '#ff5f00' } }} />
                            </div>
                        })}
                    </div>
                </RadioGroup>
            </div>
        </section >
    )
}