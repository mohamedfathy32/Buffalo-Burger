import { useContext, useEffect, useState } from "react";
import { RxCountdownTimer } from "react-icons/rx";
import { getCollectionByName } from "../utils/firebase";
import { DataContext } from "../utils/context";
import Splash from "../components/Splash";
export default function OrderHistoryPage() {

    const { data, setData } = useContext(DataContext);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                if (!data.orders) {
                    const orders = await getCollectionByName('orders');
                    setData({ orders });
                    setLoading(false);
                }
                else {
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);
    return (loading ? <Splash /> :
        <div className="lg:w-4/6 w-11/12 mx-auto bg-gray-200 rounded">
            <h1 className="PSS text-5xl p-2 text-white mt-5 bg-[#1c1c1b] uppercase">orders</h1>
            {data.orders?.map(his =>
                <div key={his.id} className="shadow-lg shadow-gray-200 relative p-4 m-4 bg-orange-400">
                    <p>{his.Date}</p>
                    <p>order id {his.id}</p>
                    <p>branch </p>
                    <p>total price {his.TotalPrice}</p>
                    <p>order can be</p>
                    <p className="absolute top-4 end-4">accepted</p>
                    <p className="flex justify-center items-center absolute bottom-4 end-4"><RxCountdownTimer />&nbsp;reorder</p>
                </div>
            )}
        </div>
    )
}