/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import Size from "../components/Product/Size";
import { Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup } from "@mui/material";
import ComboOption from "../components/Product/ComboOption";
import Drink from "../components/Product/Drink";
import { extrasList } from "../utils/data";
import Bread from "../components/Product/Bread";
import Extras from "../components/Product/Extras";
export default function ProductPage() {
    const location = useLocation()
    const navigate = useNavigate()
    const product = location.state?.product;

    const [size, setSize] = useState('150gm')
    const [bread, setBread] = useState('white')
    const [CO, setCO] = useState('');
    const [drink, setDrink] = useState("orange juice");
    const [extras, setExtras] = useState([]);
    const [totalPrice, setTotalPrice] = useState()

    const [order, setOrder] = useState(() => {
        const savedOrder = localStorage.getItem('order');
        return savedOrder ? JSON.parse(savedOrder) : {};
    });

    useEffect(() => {
        // Calculate the base price from the selected size and bread
        const selectedSize = product?.details.size.find(s => s.title === size);
        const selectedBread = product?.details.bread.find(b => b.title === bread);

        // Extras price calculation
        const extrasTotal = extras.reduce((acc, extraTitle) => {
            const extraItem = extrasList.find(e => e.title === extraTitle);
            return acc + (extraItem ? extraItem.price : 0);
        }, 0);

        // Combo option and drink price calculation
        const comboPrice = CO ? 10 : 0; // Assuming combo price is static, or you can fetch it from the product details
        const drinkPrice = CO ? 10 : 0; // Similarly, the drink price is static for simplicity

        // Total price calculation
        setTotalPrice((selectedSize?.price || 0) + (selectedBread?.price || 0) + extrasTotal + comboPrice + drinkPrice);

        // Create new order object
        const newOrder = {
            product: product?.title,
            size,
            bread,
            CO,
            drink: CO !== '' ? drink : null,
            extras,
            price: totalPrice,
        };

        // Set the order state and save to localStorage
        setOrder(newOrder);
        localStorage.setItem('order', JSON.stringify(newOrder));
    }, [size, bread, CO, drink, extras, product]);

    function addtocart() {
        navigate('/Cart')
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
            <Bread productBread={bread} onBreadChange={(bread) => { setBread(bread) }} />

            <ComboOption productComboOption={CO} onCOChange={(co) => { setCO(co) }} />
            {CO !== "" &&
                <Drink productDrink={drink} onDrinkChange={(drink) => { setDrink(drink) }} />
            }
            <Extras productExtras={extras} onExtrasChange={(newExtras) => setExtras(newExtras)} />

            <section id="total" className="w-full p-4 flex flex-col lg:flex-row-reverse sticky bottom-0 justify-center items-center gap-6 bg-gray-50">
                <div className="flex justify-center gap-3 items-center">
                    <div>
                        <h2 className="capitalize text-2xl font-bold">total</h2>
                        <span className="capitalize text-sm text-gray-500">including VAT</span>
                    </div>
                    <span className="text-lg font-bold mt-auto mb-2">EGP {totalPrice}</span>
                </div>
                <button onClick={addtocart} className="px-12 py-3 flex justify-center items-center gap-1 bg-orange-600 rounded-lg text-white text-xl uppercase">
                    <MdShoppingCart className="text-2xl" /> add to cart
                </button>
            </section>
        </>
    )
}