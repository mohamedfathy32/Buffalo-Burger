import { useContext, useEffect, useState } from "react";
import { RxCountdownTimer } from "react-icons/rx";
import { getCollectionByName, getUserInfoById } from "../utils/firebase";
import { DataContext } from "../utils/context";
import Splash from "../components/Splash";

export default function OrderHistoryPage() {
    const { data, setData } = useContext(DataContext);
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState("");

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

        async function fetchUserInfo() {
            try {
                const userID = localStorage.getItem("userId");
                if (userID) {
                    const userInfo = await getUserInfoById(userID);
                    setEmail(userInfo.email);
                }
            } catch (error) {
                console.error("Error fetching user info:", error);
            }
        }

        fetchOrders();
        fetchUserInfo();
    }, [data, setData]);

    return loading ? (
        <Splash />
    ) : (
        <div className="lg:w-4/6 w-11/12 mx-auto bg-gray-200 rounded">
            <h1 className="PSS text-5xl p-2 text-white mt-5 bg-[#1c1c1b] uppercase">Orders</h1>
            {data.orders?.map(
                (order) =>
                    order?.id?.toString().includes(email) && (
                        <div key={order.id} className="shadow-lg shadow-gray-200 relative p-4 m-4 bg-orange-400">
                            <p>{order.Date}</p>
                            <p>Order ID: {order.id}</p>
                            <p>Branch:</p>
                            <p>Total Price: {order.TotalPrice}</p>
                            <p>Order Status:</p>
                            <p className="absolute top-4 end-4">Accepted</p>
                            <p className="flex justify-center items-center absolute bottom-4 end-4">
                                <RxCountdownTimer /> &nbsp; Reorder
                            </p>
                        </div>
                    )
            )}
        </div>
    );
}
