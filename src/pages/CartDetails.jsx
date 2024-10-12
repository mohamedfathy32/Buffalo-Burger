import { CiCircleMinus } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function CartDetails() {
    return (
        <>
            <div className="flex min-h-[100vh] gap-4 mx-4 md:mx-[60px] md:my-7 lg:flex-row flex-col">
                {/* Left */}
                <div className="flex flex-col md:flex-row w-full justify-between gap-x-8 my-8">

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

                                    <div className="w-1/3 flex justify-end">
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

                                    <div className="w-1/3 flex justify-end">
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

                                    <div className="w-1/3 flex justify-end">
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

                    </div>

                </div>

                {/* Right */}
                <div className="flex flex-col py-6">
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