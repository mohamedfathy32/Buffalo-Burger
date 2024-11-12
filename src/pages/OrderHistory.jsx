import { useContext, useEffect, useState } from "react";
import { RxCountdownTimer } from "react-icons/rx";
import { getCollectionByName } from "../utils/firebase";
import { DataContext } from "../utils/context";
import Splash from "../components/Splash";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function OrderHistoryPage() {
    const { data, setData } = useContext(DataContext);
    const [loading, setLoading] = useState(true);
    const userID = localStorage.getItem("userId");
    const { t, i18n } = useTranslation()
    const lang = i18n.language
    var flag = true;
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
        fetchOrders();
    }, [data, setData]);

    const Reorder = (id) => {
        nav(id)
    }



    return loading ? (
        <Splash />
    ) : (
        <>
            {data.orders?.map(
                (order) => order?.userID?.toString().includes(userID) &&
                    <>
                        {flag = false}
                    </>
            )}
            {flag ?
                <div className="w-full flex justify-center px-2 md:px-10 pt-7 pb-2 min-h-screen">
                    <div className="w-full flex flex-col items-center md:w-3/5 bg-white rounded-lg p-8">
                        <p className="text-2xl font-bold text-gray-500">{t("You haven't placed any orders yet.")}</p>
                        <p className="text-gray-400 mt-2">{t("Explore our menu!")}</p>

                        <button
                            onClick={() => nav("/menu")}
                            className="mt-6 px-6 py-3 text-white font-semibold bg-[#ff5f00] hover:bg-[#ff5f00] rounded-lg shadow-md transition duration-300 ease-in-out"
                        >
                            {t("Go to Menu")}
                        </button>
                    </div>
                </div> :
                <div className="w-full flex justify-center px-2 md:px-10 pt-7 pb-2">

                    <div className="w-full flex flex-col md:w-3/5">

                        <div className="flex bg-black rounded-t-md p-3">
                            <h1 className={`PSS text-white tracking-wider uppercase ${lang == 'en' ? 'text-5xl' : 'text-2xl'} `}>{t("Previous Orders")}</h1>
                        </div>
                        <div className="w-full flex flex-col p-1 md:p-4">
                            <div className="flex flex-col py-8 px-2 bg-white md:w-full lg:w-full md:p-8 lg:p-8 md:min-h-[70vh] lg:min-h-[70vh] ">
                                {data.orders?.map(
                                    (order) =>
                                        order?.userID?.toString().includes(userID) && (
                                            <>
                                                <div key={order.id} className="relative cursor-pointer flex shadow-lg rounded-lg mb-5 py-5 px-5 smd:py-5 smd:px-11">
                                                    <div className="w-[60%]  md:w-[70%] lg:w-[80%]">

                                                        <p className="font-main text-lg font-bold text-black">{order.date}</p>
                                                        <p className="font-main text-sm  leading-6 tracking-wide text-[#707070] ">{t("Order ID")}: {order.id}</p>
                                                        <p className="font-main text-sm text-primary-black md:text-base lg:text-base">{`${t("Total")} ${order.totalPrice} ${t("EGP")}`}</p>
                                                        <p className="font-main text-xs md:text-xs text-[#707070]">{t("Orders can be edited or cancelled within 7 minutes of order time")}</p>
                                                    </div>
                                                    <div className="flex flex-col justify-between w-[40%] md:w-[30%] lg:w-[20%]">
                                                        <p className="flex items-end justify-center py-[2px] px-0 font-main text-base font-normal max-w-[13em] not-italic tracking-normal rounded leading-6 uppercase w-full  bg-green-700 text-white">{t("Accepted")}</p>
                                                        <button className="flex items-center justify-center p-0 text-[#ff5f00] relative" onClick={() => Reorder(order.id)}>
                                                            <RxCountdownTimer className="" />
                                                            <p className="ml-1">{t("Reorder")}</p>
                                                        </button>

                                                    </div>
                                                </div>

                                            </>
                                        )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            }

        </>
    );
}
