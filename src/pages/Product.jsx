/* eslint-disable no-unused-vars */
import { Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { extrasList } from "../utils/data";
import Size from "../components/Product/Size";
import Drinks from "../components/Product/Drinks";
import ComboOptions from "../components/Product/ComboOptions";

export default function ProductDetails() {
    const location = useLocation()
    const navigate = useNavigate()
    const product = location.state?.product;

    const [size, setSize] = useState('150gm')
    const [bread, setBread] = useState('white')
    const [CO, setCO] = useState("");
    const [drink, setDrink] = useState("orange juice");
    const [extras, setExtras] = useState([]);

    const [order, setOrder] = useState(() => {
        const savedOrder = localStorage.getItem('order');
        return savedOrder ? JSON.parse(savedOrder) : {};
    });

    useEffect(() => {
        const newOrder = {
            product: product?.title,
            size,
            bread,
            CO,
            drink: CO !== '' ? drink : null,
            extras,
            price: size.price + bread.price + CO.price
        };

        setOrder(newOrder);
        localStorage.setItem('order', JSON.stringify(newOrder));
    }, [size, bread, CO, drink, extras, product]);

    // function handleSizeChange(size) {
    //     setSize(size)
    // }

    function addtocart() {
        navigate('/CartDetails')
    }
    return (
        <>
            <section id="image" className="bg-stone-900 flex justify-center items-center lg:flex-row flex-col p-4">
                <img src={product.image} alt={product.title} className=" place-items-center w-[150px] h-[150px]" />
                <div className="lg:text-start text-center md:my md:mx-16 ">
                    <h2 className="text-orange-600 font-bold text-2xl capitalize">{product.title}</h2>
                    <p className="text-white max-w-[500px]">{product.description}</p>
                </div>
            </section>
            <Size productSize={size} onSizeChange={(size) => { setSize(size) }} />
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
            <ComboOptions productComboOption={CO} onCOChange={(co) => { setCO(co) }} />
            {CO !== "" &&
                <Drinks productDrink={drink} onDrinkChange={(drink) => { setDrink(drink) }} />
            }
            <section id="extras" className="p-6">
                <h2 className="font-bold uppercase text-2xl text-center mb-5 w-full">Extras</h2>
                <div className="flex justify-center">
                    <FormGroup aria-labelledby="demo-radio-buttons-group-label" name="extras-group">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-start bg-stone-50 rounded-xl p-8">
                            {extrasList.map((extra) => (
                                <div key={extra.title} className="w-full p-4 bg-white rounded-lg">
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={extras.includes(extra.title)} onChange={(e) => {
                                                if (e.target.checked) {
                                                    setExtras([...extras, extra.title]);
                                                }
                                                else {
                                                    setExtras(extras.filter((item) => item !== extra.title))
                                                }
                                            }} sx={{ '& .MuiSvgIcon-root': { color: '#ff5f00' }, '&.Mui-checked': { color: '#ff5f00' }, }} />}
                                        label={`${extra.title} (EGP ${extra.price})`}
                                        sx={{
                                            '& .MuiTypography-root': { color: 'black', '&:hover': { color: '#ff5f00', } }, '& .Mui-checked + .MuiTypography-root': { color: '#ff5f00' }
                                        }} />
                                </div>))}
                        </div>
                    </FormGroup>
                </div>
            </section>
            <section id="total" className="w-full p-4 flex flex-col lg:flex-row-reverse sticky bottom-0 justify-center items-center gap-6 bg-gray-50">
                <div className="flex justify-center gap-3 items-center">
                    <div>
                        <h2 className="capitalize text-2xl font-bold">total</h2>
                        <span className="capitalize text-sm text-gray-500">including VAT</span>
                    </div>
                    <span className="text-lg font-bold mt-auto mb-2">EGP 170</span>
                </div>
                <button onClick={addtocart} className="px-12 py-3 flex justify-center items-center gap-1 bg-orange-600 rounded-lg text-white text-xl uppercase">
                    <MdShoppingCart className="text-2xl" /> add to cart
                </button>
            </section>
        </>
    )
}