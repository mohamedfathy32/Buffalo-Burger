import { useContext, useEffect, useState } from "react";
import { RxCountdownTimer } from "react-icons/rx";
import { getCollectionByName } from "../utils/firebase";
import { HistoryContext } from "../utils/context";
export default function OrderHistoryPage() {
    const { history, setHistory } = useContext(HistoryContext)

    useEffect(() => {
        (async () => { history.length === 0 ? setHistory(await getCollectionByName('cart')) : null })()
    }, [history.length]);
    console.log(history)
    return (
        <div className="lg:w-4/6 w-11/12 mx-auto bg-gray-200 rounded">
            <h1 className="PSS text-5xl p-2 text-white mt-5 bg-[#1c1c1b] uppercase">orders</h1>
            {history.map(his =>
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