/* eslint-disable react/prop-types */
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { extrasList } from "../../utils/data";

export default function Extras({ productExtras, onExtrasChange }) {
    const handleExtraChange = (extraTitle, isChecked) => {
        const updatedExtras = isChecked
            ? [...productExtras, extraTitle]
            : productExtras.filter((item) => item !== extraTitle);
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

    return (
        <section id="extras" className="p-6">
            <h2 className="font-bold uppercase text-2xl text-center mb-5 w-full">Extras</h2>
            <div className="flex justify-center">
                <FormGroup aria-labelledby="demo-radio-buttons-group-label" name="extras-group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-start bg-stone-50 rounded-xl p-8">
                        {extrasList.length > 0 && extrasList.map((extra) => (
                            <div key={extra.title} className="w-full p-4 capitalize bg-white rounded-lg">
                                <FormControlLabel control={<Checkbox checked={productExtras.includes(extra.title)}
                                    onChange={(e) => handleExtraChange(extra.title, e.target.checked)} sx={checkboxStyles} />}
                                    label={`${extra.title} (EGP ${extra.price})`} sx={labelStyles} />
                            </div>))}
                    </div>
                </FormGroup>
            </div>
        </section>
    );
}