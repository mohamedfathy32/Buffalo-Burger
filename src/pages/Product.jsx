import { FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { useState } from "react"
import { useLocation } from "react-router-dom"


export default function ProductDetails() {
    const location = useLocation()
    const [size, setSize] = useState('150')
    const [bread, setBread] = useState('white')
    const [comboOptions, setcomboOptions] = useState();
    const product = location.state?.product;



    // if (product.details) {

    // }

    console.log(product.details.compoOptions);


    return (
        <>
            <div id="image" className="bg-stone-900 flex justify-center items-center lg:flex-row flex-col p-4">
                <img src={product.imageURL} alt={product.title} className=" place-items-center w-[150px] h-[150px]" />
                <div className="lg:text-start text-center md:my md:mx-16 ">
                    <h2 className="text-orange-600 font-bold text-2xl capitalize">{product.title}</h2>
                    <p className="text-white max-w-[500px]">{product.description}</p>
                </div>
            </div>
            <div id="size" className="p-6">
                <h2 className="font-bold uppercase text-2xl text-center">size</h2>
                {/* mobileScreen */}
                <div className="lg:hidden flex justify-center">
                    <RadioGroup value={size} onChange={(e) => { setSize(e.target.value) }} aria-labelledby="demo-radio-buttons-group-label" defaultValue="150" name="radio-buttons-group">
                        { }
                        <FormControlLabel value="150" control={<Radio sx=
                            {{ '& .MuiSvgIcon-root': { color: '#ff5f00' }, '&.Mui-checked': { color: '#ff5f00' } }} />
                        } label="150 gm (EGP 155)" sx={{ '& .MuiTypography-root': { color: 'black' }, '& .Mui-checked + .MuiTypography-root': { color: '#ff5f00' } }} />
                        <FormControlLabel value="200" control={<Radio sx=
                            {{ '& .MuiSvgIcon-root': { color: '#ff5f00' }, '&.Mui-checked': { color: '#ff5f00' } }} />
                        } label="200 gm (EGP 190)" sx={{ '& .MuiTypography-root': { color: 'black' }, '& .Mui-checked + .MuiTypography-root': { color: '#ff5f00' } }} />
                        <FormControlLabel value="400" control={<Radio sx=
                            {{ '& .MuiSvgIcon-root': { color: '#ff5f00' }, '&.Mui-checked': { color: '#ff5f00' } }} />
                        } label="400 gm (EGP 280)" sx={{ '& .MuiTypography-root': { color: 'black' }, '& .Mui-checked + .MuiTypography-root': { color: '#ff5f00' } }} />
                    </RadioGroup>
                </div>
                {/* largeScreen */}
                <div className="hidden lg:flex justify-center items-center gap-x-12">
                    <div className="relative cursor-pointer" onClick={() => { setSize('150') }}>
                        <img src={size === '150' ? 'https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/weight.svg' : 'https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/weight-1.svg'} alt="img" />
                        <p className="text-white absolute top-7 start-1/2 -translate-x-1/2 ">150 gm</p>
                        <div className={`absolute w-3 h-3 rounded-full top-1.5 start-1/2 -translate-x-1/2 ${size === '150' ? 'bg-orange-600' : 'bg-white'}`}></div>
                        <p className="text-center mt-3">&nbsp;</p>
                    </div>
                    <div className="relative cursor-pointer" onClick={() => { setSize('200') }}>
                        <img src={size === '200' ? 'https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/weight.svg' : 'https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/weight-1.svg'} alt="img" />
                        <p className="text-white absolute top-7 start-1/2 -translate-x-1/2 ">200 gm</p>
                        <div className={`absolute w-3 h-3 rounded-full top-1.5 start-1/2 -translate-x-1/2 ${size === '200' ? 'bg-orange-600' : 'bg-white'}`}></div>
                        <p className="text-center mt-3">+EGP35</p>
                    </div>
                    <div className="relative cursor-pointer" onClick={() => { setSize('400') }}>
                        <img src={size === '400' ? 'https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/weight.svg' : 'https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/weight-1.svg'} alt="img" />
                        <p className="text-white absolute top-7 start-1/2 -translate-x-1/2 ">400 gm</p>
                        <div className={`absolute w-3 h-3 rounded-full top-1.5 start-1/2 -translate-x-1/2 ${size === '400' ? 'bg-orange-600' : 'bg-white'}`}></div>
                        <p className="text-center mt-3">+EGP125</p>
                    </div>
                </div >
            </div>
            <div id="bread" className="w-full bg-stone-50 p-6">
                <h2 className="font-bold uppercase text-2xl text-center mb-5">bread</h2>
                <RadioGroup value={bread} onChange={(e) => { setBread(e.target.value) }} aria-labelledby="demo-radio-buttons-group-label" defaultValue="150" name="radio-buttons-group">
                    <div className="flex flex-col gap-2 lg:gap-8 lg:flex-row justify-center items-center">
                        <div className="bg-white rounded-xl lg:w-72 w-52 px-4 py-2">
                            <FormControlLabel value="white" control={<Radio sx=
                                {{ '& .MuiSvgIcon-root': { color: '#ff5f00' }, '&.Mui-checked': { color: '#ff5f00' } }} />
                            } label="White Bread" sx={{ '& .MuiTypography-root': { color: 'black' }, '& .Mui-checked + .MuiTypography-root': { color: '#ff5f00' } }} />
                        </div>
                        <div className="bg-white rounded-xl lg:w-72 w-52 px-4 py-2">
                            <FormControlLabel value="brown" control={<Radio sx=
                                {{ '& .MuiSvgIcon-root': { color: '#ff5f00' }, '&.Mui-checked': { color: '#ff5f00' } }} />
                            } label="Brown Bread (EGP5)" sx={{ '& .MuiTypography-root': { color: 'black' }, '& .Mui-checked + .MuiTypography-root': { color: '#ff5f00' } }} />
                        </div>
                    </div>
                </RadioGroup>
            </div>
            <div id="comboOptions" className="p-6">
                <h2 className="font-bold uppercase text-2xl text-center mb-5">combo options</h2>
                {product.details.compoOptions.forEach(() => {
                    return (
                        <button className="w-52 h-52 border border-black focus:border-orange-600"></button>
                    )
                })}
            </div>
        </>
    )
}