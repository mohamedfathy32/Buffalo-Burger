import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export default function Size({ selectedSize, onSizeChange }) {
    const { t, i18n } = useTranslation()
    const { state } = useLocation();
    const sizesList = state.product.details.size || [];

    const radioStyles = {
        '& .MuiSvgIcon-root': { color: '#ff5f00' },
        '&.Mui-checked': { color: '#ff5f00' }
    };

    const labelStyles = {
        '& .MuiTypography-root': { color: 'black' },
        '& .Mui-checked + .MuiTypography-root': { color: '#ff5f00' }
    };

    return (
        <section className="p-6">
            <h2 className="font-bold uppercase text-2xl text-center mb-6">{t('size')}</h2>
            {/* Mobile Screen */}
            <div className="lg:hidden flex justify-center">
                <RadioGroup value={selectedSize} onChange={(e) => onSizeChange(e.target.value)} aria-labelledby="demo-radio-buttons-group-label" defaultValue={sizesList[0].title} name="radio-buttons-group">
                    {sizesList.map(size => (<FormControlLabel key={size.title} value={size.title}
                        control={<Radio sx={radioStyles} />} label={`${size.title}${i18n.language === 'en' ? 'gm' : 'جرام'} (${i18n.language === 'en' ? 'EGP' : 'ج.م'} ${size.price})`} sx={labelStyles} />
                    ))}
                </RadioGroup>
            </div>

            {/* Large Screen */}
            <div className="hidden lg:flex justify-center items-center gap-x-12">
                {sizesList.map(size => (
                    <div key={size.title} className="relative cursor-pointer" onClick={() => onSizeChange(size.title)}>
                        <img src={size.title === selectedSize ? 'https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/weight.svg' : 'https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/weight-1.svg'} alt={size.title} />
                        <p className={`text-white absolute top-7 start-1/2 ${i18n.language === 'en' ? '-translate-x-1/2' : 'translate-x-1/2'}`}>{size.title}</p>
                        <div className={`absolute w-3 h-3 rounded-full top-1.5 start-1/2 ${i18n.language === 'en' ? '-translate-x-1/2' : 'translate-x-1/2'} ${size.title === selectedSize ? 'bg-orange-600' : 'bg-white'}`}></div>
                        <p className="text-center mt-3">{size.price === 155 ? <br /> : size.price > 0 ? `+${i18n.language === 'en' ? 'EGP' : 'ج.م'} ${size.price - 155}` : ''}</p>
                    </div>))}
            </div>
        </section>
    );
}