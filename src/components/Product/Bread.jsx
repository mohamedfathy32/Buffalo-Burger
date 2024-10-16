/* eslint-disable react/prop-types */
import { FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { useLocation } from "react-router-dom"

export default function Bread({ productBread, onBreadChange }) {
    const location = useLocation()
    const breadList = location.state?.product.details.bread
    return (
        <section id="bread" className="w-full bg-stone-50 p-6">
            <h2 className="font-bold uppercase text-2xl text-center mb-5">bread</h2>
            <RadioGroup value={productBread} onChange={(e) => { onBreadChange(e.target.value) }} aria-labelledby="demo-radio-buttons-group-label" defaultValue="150" name="radio-buttons-group">
                <div className="flex flex-col gap-2 lg:gap-8 lg:flex-row justify-center items-center">
                    {breadList.map(bread =>
                        <div key={bread.title} className="bg-white rounded-xl capitalize lg:w-72 w-52 px-4 py-2">
                            <FormControlLabel value={bread.title} control={<Radio sx=
                                {{ '& .MuiSvgIcon-root': { color: '#ff5f00' }, '&.Mui-checked': { color: '#ff5f00' } }} />
                            } label={`${bread.title} Bread  ${bread.price === 0 ? '' : `(EGP ${bread.price})`}`} sx={{ '& .MuiTypography-root': { color: 'black' }, '& .Mui-checked + .MuiTypography-root': { color: '#ff5f00' } }} />
                        </div>
                    )}

                </div>
            </RadioGroup>
        </section>
    )
}