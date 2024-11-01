import { branchesList } from "../utils/data";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function BranchesPage() {
    return (
        <>
            <div className="flex flex-col smd:inline-grid smd:grid-cols-2 md:inline-grid  md:grid-cols-3 gap-y-6 gap-x-6 w-full bg-[#1c1c1b] p-4 md:p-[60px] ">
                {branchesList.map((branch) =>
                    <div key={branch.title.en} className="flex flex-col justify-between h-[144px] bg-[#282827] p-4 rounded-lg ">
                        <p className="text-white text-base font-bold uppercase">{branch.title}</p>
                        <p className="text-white">{branch.address}</p>
                        <a className="flex flex-row gap-2" target="_blank" rel="noopener noreferrer" href={branch.src}>
                            <p className=" text-orange-500 font-bold text-base uppercase cursor-pointer">Get Location</p>
                            <FaLongArrowAltRight className="w-6 h-6 text-orange-500" />
                        </a>
                    </div>
                )}
            </div>
        </>
    )
}