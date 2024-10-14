/* eslint-disable react/prop-types */
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Branch({ name, address, src }) {
    return (
        <>
            <div className="flex flex-col justify-between h-[144px] bg-[#282827] p-4 rounded-lg ">
                <p className="text-white text-base font-bold uppercase">{name}</p>
                <p className="text-white">{address}</p>
                <a className="flex flex-row gap-2" target="_blank" rel="noopener noreferrer" href={src}>
                    <p className=" text-orange-500 font-bold text-base uppercase cursor-pointer">Get Location</p>
                    <FaLongArrowAltRight className="w-6 h-6 text-orange-500" />
                </a>
            </div>
        </>
    )
}