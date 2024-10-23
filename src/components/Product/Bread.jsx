import { FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom"
import { breadList } from "../../utils/data";

export default function Bread({ selectedBread, onBreadChange }) {
    const { t, i18n } = useTranslation()
    const { state } = useLocation()
    const isBread = state.product.details.bread || false;
    const radioStyles = {
        '& .MuiSvgIcon-root': { color: '#ff5f00' },
        '&.Mui-checked': { color: '#ff5f00' }
    };
    const labelStyles = {
        '& .MuiTypography-root': { color: 'black' },
        '& .Mui-checked + .MuiTypography-root': { color: '#ff5f00' }
    };
    return (isBread &&
        <section className="w-full bg-stone-50 p-6" >
            <h2 className="font-bold uppercase text-2xl text-center mb-5">{t('bread')}</h2>
            <RadioGroup value={selectedBread || breadList[0].title[i18n.language]} onChange={(e) => { onBreadChange(e.target.value) }} aria-labelledby="demo-radio-buttons-group-label" defaultValue={breadList[0].title[i18n.language]} name="radio-buttons-group">
                <div className="flex flex-col gap-2 lg:gap-8 lg:flex-row justify-center items-center">
                    {breadList.map(bread =>
                        <div key={bread.title.en} className="bg-white rounded-xl capitalize lg:w-72 w-52 px-4 py-2">
                            <FormControlLabel value={bread.title[i18n.language]} control={<Radio sx={radioStyles} />} sx={labelStyles}
                                label={`${bread.title[i18n.language]} ${i18n.language === 'en' ? 'Bread' : ''}  ${bread.price === 0 ? '' : `(${i18n.language === 'en' ? 'EGP' : 'ج.م'} ${bread.price})`}`} />
                        </div>
                    )}
                </div>
            </RadioGroup>
        </section >
    )
}