/* eslint-disable react/prop-types */
import { FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { useLocation } from "react-router-dom"

export default function Bread({ productBread, onBreadChange }) {
    const location = useLocation()
    const breadList = location.state?.product?.details?.bread || [];
    const radioStyles = {
        '& .MuiSvgIcon-root': { color: '#ff5f00' },
        '&.Mui-checked': { color: '#ff5f00' }
    };
    const labelStyles = {
        '& .MuiTypography-root': { color: 'black' },
        '& .Mui-checked + .MuiTypography-root': { color: '#ff5f00' }
    };
    return (
        <section id="bread" className="w-full bg-stone-50 p-6">
            <h2 className="font-bold uppercase text-2xl text-center mb-5">bread</h2>
            <RadioGroup value={productBread || breadList?.[0]?.title} onChange={(e) => { onBreadChange(e.target.value) }} aria-labelledby="demo-radio-buttons-group-label" defaultValue={breadList?.[0]?.title} name="radio-buttons-group">
                <div className="flex flex-col gap-2 lg:gap-8 lg:flex-row justify-center items-center">
                    {breadList && breadList.map(bread =>
                        <div key={bread.title} className="bg-white rounded-xl capitalize lg:w-72 w-52 px-4 py-2">
                            <FormControlLabel value={bread.title} control={<Radio sx=
                                {radioStyles} />
                            } label={`${bread.title} Bread  ${bread.price === 0 ? '' : `(EGP ${bread.price})`}`} sx={labelStyles} />
                        </div>
                    )}
                </div>
            </RadioGroup>
        </section>
    )
}