import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { extrasList } from "../../utils/data";

export default function Extras({ productExtras, onExtrasChange }) {
    return (
        <section id="extras" className="p-6">
            <h2 className="font-bold uppercase text-2xl text-center mb-5 w-full">Extras</h2>
            <div className="flex justify-center">
                <FormGroup aria-labelledby="demo-radio-buttons-group-label" name="extras-group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-start bg-stone-50 rounded-xl p-8">
                        {extrasList.map((extra) => (
                            <div key={extra.title} className="w-full p-4 bg-white rounded-lg">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={productExtras.includes(extra.title)}
                                            onChange={(e) => {
                                                const updatedExtras = e.target.checked
                                                    ? [...productExtras, extra.title]
                                                    : productExtras.filter((item) => item !== extra.title);
                                                onExtrasChange(updatedExtras); // Communicate the change back to ProductPage
                                            }}
                                            sx={{
                                                '& .MuiSvgIcon-root': { color: '#ff5f00' },
                                                '&.Mui-checked': { color: '#ff5f00' },
                                            }}
                                        />
                                    }
                                    label={`${extra.title} (EGP ${extra.price})`}
                                    sx={{
                                        '& .MuiTypography-root': {
                                            color: 'black',
                                            '&:hover': { color: '#ff5f00' },
                                        },
                                        '& .Mui-checked + .MuiTypography-root': {
                                            color: '#ff5f00',
                                        },
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </FormGroup>
            </div>
        </section>
    );
}
