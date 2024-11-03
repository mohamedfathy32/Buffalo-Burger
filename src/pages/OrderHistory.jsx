import { useContext, useEffect, useState } from "react";
import { RxCountdownTimer } from "react-icons/rx";
import { getCollectionByName } from "../utils/firebase";
import { DataContext } from "../utils/context";
import Splash from "../components/Splash";
import { useNavigate } from "react-router-dom";

export default function OrderHistoryPage() {
    const { data, setData } = useContext(DataContext);
    const [loading, setLoading] = useState(true);
    const userID = localStorage.getItem("userId");

    const nav = useNavigate()
    useEffect(() => {
        async function fetchOrders() {
            try {
                if (!data.orders) {
                    const orders = await getCollectionByName("orders");
                    setData({ orders });
                }
            } catch (error) {
                console.error("Error fetching orders:", error);
            } finally {
                setLoading(false);
            }
        }

        // async function fetchUserInfo() {
        //     try {
        //         if (userID) {
        //             const userInfo = await getUserInfoById(userID);
        //             setEmail(userInfo.email);

        //         }
        //     } catch (error) {
        //         console.error("Error fetching user info:", error);
        //     }
        // }

        fetchOrders();
        // fetchUserInfo();
    }, [data, setData]);

    const Reorder = (id) => {
        nav(id)
    }



    return loading ? (
        <Splash />
    ) : (
        <>
            {console.log(data.orders)}
            {console.log(userID)}
            <div className="w-full flex justify-center px-2 md:px-10 pt-7 pb-2">

                <div className="w-full flex flex-col md:w-3/5">

                    <div className="flex bg-black rounded-t-md p-3">
                        <h1 className="PSS text-white tracking-wider uppercase text-5xl">Orders</h1>
                    </div>
                    <div className="w-full flex flex-col p-1 md:p-4">
                        <div className="flex flex-col py-8 px-2 bg-white md:w-full lg:w-full md:p-8 lg:p-8 md:min-h-[70vh] lg:min-h-[70vh] ">
                            {data.orders?.map(
                                (order) =>
                                    order?.userID?.toString().includes(userID) && (
                                        <div key={order.id} className="relative cursor-pointer flex shadow-lg rounded-lg mb-5 py-5 px-5 smd:py-5 smd:px-11">
                                            <div className="w-[60%]  md:w-[70%] lg:w-[80%]">

                                                <p className="font-main text-lg font-bold text-black">{order.date}</p>
                                                <p className="font-main text-sm  leading-6 tracking-wide text-[#707070] ">Order ID: {order.id}</p>
                                                {/* <p>Branch:</p> */}
                                                <p className="font-main text-sm text-primary-black md:text-base lg:text-base">Total EGP {order.totalPrice}</p>
                                                <p className="font-main text-xs md:text-xs text-[#707070]">Orders can be edited or cancelled within 7 minutes of order time</p>
                                            </div>
                                            <div className="flex flex-col justify-between w-[40%] md:w-[30%] lg:w-[20%]">
                                                <p className="flex items-end justify-center py-[2px] px-0 font-main text-base font-normal max-w-[13em] not-italic tracking-normal rounded leading-6 uppercase w-full  bg-green-700 text-white">Accepted</p>
                                                <button className="flex items-center justify-center p-0 text-[#ff5f00] relative" onClick={() => Reorder(order.id)}>
                                                    <RxCountdownTimer className="" />
                                                    <p className="ml-1">Reorder</p>
                                                </button>

                                            </div>
                                        </div>

                                    )
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
