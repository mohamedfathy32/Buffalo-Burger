import { CiCircleMinus } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DishCard from "../components/DishCard";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function CartDetails() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        nextArrow: (
            <div>
                <div className="next-slick-arrow text-orange-500">
                    <FaArrowAltCircleRight className="text-xl" />
                </div>
            </div>
        ),

        prevArrow: (
            <div>
                <div className="prev-slick-arrow text-orange-500">
                    <FaArrowAltCircleRight className="text-xl" />
                </div>
            </div>
        )
    };

    const products = [
        {
            id: 1, title: 'Shiitake Mushroom', price: '280',
            description: 'Sautéed mushroom, cheddar cheese, and creamy mayonnaise spread on top of our pure beef burger..',
            image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fa76de047b66f2511962b600232c60769.png&w=256&q=75'
        },

        {
            id: 2, title: 'Bacon Mushroom Jack', price: '190',
            description: 'Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.',
            image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fd845c9309b0d95d8c5d945b6b2552491.png&w=256&q=75'
        },

        {
            id: 3, title: 'Caesar Salad', price: '169',
            description: 'Fresh lettuce with pieces of grilled chicken topped with croutons bread and parmesan cheese with..',
            image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fb969e186dcb089185c6d63d6774d02d6.png&w=384&q=75'
        },

        {
            id: 4, title: 'Chicken Buster', price: '135',
            description: 'Chicken strips with Buffalo sauce and melted cheddar cheese.',
            image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2F5f9673352a1f5fafd00e3e2ae90af631.png&w=384&q=75'
        },

        {
            id: 5, title: 'Apple Pie', price: '30',
            description: 'Apple & cinnamon pie',
            image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Ff5afb2abb2f7e443a2d999d1c13164d2.png&w=256&q=75'
        },

        {
            id: 6, title: 'Chicken Fries', price: '80',
            description: '10 Pieces of Chicken Fries served with Ranch Cup',
            image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fb666406ac37bf44f8b31849ec0ee48ed.png&w=384&q=75'
        },

    ];

    return (
        <>
            <div className="flex min-h-[100vh] gap-4 mx-4 md:mx-[60px] lg:flex-row flex-col">
                {/* Left */}
                <div className="lg:w-2/3 flex flex-col md:flex-row w-full justify-between gap-x-8 my-8 lg:mb-8 mb-0">

                    <div className="w-full">

                        <div className="bg-gray-100 flex flex-col pb-6 rounded-[20px] lg:min-w-[512px] w-[100%]  lg:w-full">

                            <div className="w-full px-4 py-6 md:p-6 rounded-2xl flex justify-between">

                                <div className="flex items-center w-1/3">
                                    <span className="uppercase text-3xl font-bold">
                                        CART
                                    </span>
                                    {/* Cart Number */}
                                    <span className="flex items-center justify-center bg-black rounded-full h-6 w-6 text-white text-sm mx-2">3</span>
                                </div>

                                {/* Quantity & Total */}
                                <div className="lg:flex items-center w-1/3 hidden">

                                    <span className="w-1/2 text-gray-400 text-center ml-6">
                                        Qty
                                    </span>

                                    <span className="w-1/2 text-gray-400 text-center ml-6">
                                        Total
                                    </span>

                                </div>

                            </div>

                            {/* No items */}

                            {/* <div className="w-1/3 mx-auto text-sm">
                                There are no items in your cart
                            </div> */}

                            {/* Meal */}
                            <div className="w-full flex lg:flex-row flex-col ml-auto items-center mb-3">

                                <div className="w-11/12 lg:w-2/3 flex items-center bg-white p-2 mx-4 rounded-[10px] rounded-b-none md:rounded-b-[10px]">
                                    <img alt="Apple Pie" width={70} height={70} src="https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F034cfbc60474394ed0317cd5a7ab5a65.jpeg&w=256&q=75" />
                                    <span className="font-bold mx-3">Apple Pie</span>
                                </div>

                                <div className="w-1/3 flex justify-around">

                                    <div className="w-1/3 flex justify-end mt-3">
                                        <button>
                                            <CiCircleMinus className="text-2xl" />
                                        </button>
                                        <span className="mx-5 font-bold">5</span>
                                        <button>
                                            <IoIosAddCircleOutline className="text-2xl text-orange-600" />
                                        </button>
                                    </div>
                                    <div className="w-1/3 hidden lg:flex justify-center font-bold"><span className="">150</span></div>

                                </div>

                            </div>

                            {/* Meal */}
                            <div className="w-full flex lg:flex-row flex-col ml-auto items-center mb-3">

                                <div className="w-11/12 lg:w-2/3 flex items-center bg-white p-2 mx-4 rounded-[10px] rounded-b-none md:rounded-b-[10px]">
                                    <img alt="Chicken Fries" width={70} height={70} src="https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fce02a48e1f2548e603770011c8e5f4e6.png&w=256&q=75" />

                                    <div className="flex flex-col">
                                        <span className="font-bold mx-3">Chicken Fries</span>
                                        <span className="mx-3 text-gray-400">Ranch Sauce</span>
                                    </div>

                                </div>

                                <div className="w-1/3 flex justify-around">

                                    <div className="w-1/3 flex justify-end mt-3">
                                        <button>
                                            <CiCircleMinus className="text-2xl" />
                                        </button>
                                        <span className="mx-5 font-bold">3</span>
                                        <button>
                                            <IoIosAddCircleOutline className="text-2xl text-orange-600" />
                                        </button>
                                    </div>
                                    <div className="w-1/3 hidden lg:flex justify-center font-bold"><span className="">240</span></div>

                                </div>

                            </div>

                            {/* Meal */}
                            <div className="w-full flex lg:flex-row flex-col ml-auto items-center mb-3">

                                <div className="w-11/12 lg:w-2/3 flex items-center bg-white p-2 mx-4 rounded-[10px] rounded-b-none md:rounded-b-[10px]">
                                    <img alt="Keto Shiitake Mushroom" width={70} height={70} src="https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2F084465fc13ed66144c17a5bc9f37524d.png&w=256&q=75" />
                                    <span className="font-bold mx-3">Keto Shiitake Mushroom</span>
                                </div>

                                <div className="w-1/3 flex justify-around">

                                    <div className="w-1/3 flex justify-end mt-3">
                                        <button>
                                            <CiCircleMinus className="text-2xl" />
                                        </button>
                                        <span className="mx-5 font-bold">1</span>
                                        <button>
                                            <IoIosAddCircleOutline className="text-2xl text-orange-600" />
                                        </button>
                                    </div>
                                    <div className="w-1/3 hidden lg:flex justify-center font-bold"><span className="">170</span></div>

                                </div>

                            </div>

                        </div>

                        {/* 'You might add' Title */}
                        <div className="mt-4 mb-4 text-[28px] text-center md:text-left md:text-3xl font-bold md:ml-8">YOU MIGHT LIKE TO ADD</div>
                        {/* Slider should be here */}
                        <div className="w-full my-6">
                            <Slider {...settings} >
                                {products.map(product => (
                                    <div
                                        key={product.id}
                                        style={{ height: 500 }}
                                        className="pt-28 px-10 flex items-center justify-center rounded-md">
                                        <DishCard
                                            key={product.id}
                                            image={product.image}
                                            title={product.title}
                                            price={product.price}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>


                    </div>

                </div>

                {/* Right */}
                <div className="lg:w-1/3 flex flex-col lg:py-6 py-0">
                    {/* Special Requests */}
                    <div className=" w-full bg-gray-100  p-4 my-2 mx-0 rounded-xl md:p-6 lg:p-6">
                        <div className="w-full flex flex-col">
                            <p className="font-main text-base font-bold text-primary-gray  uppercase">Special Requests</p>
                            <p className=" text-xs bg-gray-100 mb-2 text-gray-400">No extras are allowed as a special request.</p>
                            <textarea className="border-[1px] border-gray-300 resize-none focus:outline-none focus:border-transparent bg-secondary-gray-10 focus:bg-secondary-main-10 rounded-[10px] py-3 px-2 h-[80px] border-none bg-white" autoComplete="off" placeholder="Special Requests" rows="5" maxLength="250"></textarea>
                        </div>
                    </div>

                    {/* Total */}
                    <div className=" w-full bg-gray-100  p-4 my-2 mx-0 rounded-xl md:p-6 lg:p-6">
                        <div className="w-full flex flex-col">

                            <div className="flex justify-between">
                                <span>Sub total :</span>
                                <span>EGP 491.26</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Vat :</span>
                                <span>EGP 68.74</span>
                            </div>

                            <div className="flex justify-between border-t border-dashed border-t-gray-400 pt-3 my-1">
                                <span className="text-xl text-orange-500 font-bold">TOTAL </span>
                                <span className="text-xl text-orange-500 font-bold">EGP 560</span>
                            </div>
                            <div>
                                <span className="text-gray-400 text-xs">Including VAT</span>
                            </div>

                        </div>
                    </div>

                    {/* Buttons */}
                    <button className="p-3 uppercase border border-orange-500 rounded-lg text-orange-500 font-bold my-1">
                        + add more items
                    </button>

                    <button className="p-3 uppercase bg-orange-500 rounded-lg font-bold text-white my-1">
                        Checkout
                    </button>

                </div>

            </div>
        </>
    )
}