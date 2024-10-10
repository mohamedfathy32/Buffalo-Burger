import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function ProductDetails() {
    const location = useLocation()
    const [size, setSize] = useState('150')
    const [bread, setBread] = useState('white')
    const [CO, setCO] = useState("1");
    const [order, setorder] = useState({

    })
    const product = location.state?.product;

    const comboOptions = product.details.comboOptions
    const drinks = product.details.drinks



    function handleCombo() { }

    return (
        <>
            {console.log(CO)}
            <section id="image" className="bg-stone-900 flex justify-center items-center lg:flex-row flex-col p-4">
                <img src={product.imageURL} alt={product.title} className=" place-items-center w-[150px] h-[150px]" />
                <div className="lg:text-start text-center md:my md:mx-16 ">
                    <h2 className="text-orange-600 font-bold text-2xl capitalize">{product.title}</h2>
                    <p className="text-white max-w-[500px]">{product.description}</p>
                </div>
            </section>
            <section id="size" className="p-6">
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
            </section>
            <section id="bread" className="w-full bg-stone-50 p-6">
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
            </section>
            <section id="comboOptions" className="p-6">
                <h2 className="font-bold uppercase text-2xl text-center mb-5 w-full">combo options</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3  gap-y-2 justify-items-center">
                    {comboOptions.map((c) => {
                        return (
                            <button key={c.id} onClick={() => { setCO(c.id); }} className={`sm:w-96 w-full px-4 py-3 flex items-center border rounded-2xl ${c.id === CO ? 'border-orange-600 bg-orange-50 ' : 'border-white bg-stone-50'}`}>
                                <img src={c.imageURL} alt={c.title} className="w-20 h-20" />
                                <div className="text-start ms-4">
                                    <h3 className="font-bold text-sm">{c.title}</h3>
                                    <p className="text-sm">{c.description}</p>
                                </div>
                            </button>
                        )
                    })}
                </div>
            </section>
            {CO !== "1" &&
                <section id="drinks" className="p-6">
                    <h2 className="font-bold uppercase text-2xl text-center mb-5 w-full">drinks</h2>
                    <div className="flex gap-3">
                        {
                            drinks.map(drink => {
                                return (
                                    <div key={drink.id} className="w-12 h-12 bg-orange-300">

                                    </div>
                                )
                            })
                        }

                    </div>
                </section>
            }
        </>
    )
}