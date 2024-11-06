import { useContext, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { DataContext } from "../utils/context";
import { getCollectionByName } from "../utils/firebase";

export default function BranchesPage() {
    const { data, setData } = useContext(DataContext);
    useEffect(() => {
        async function fetchData() {
            try {
                if (!data.branches) {
                    const branches = await getCollectionByName('branches');
                    setData({ branches });
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);
    return (
        <>
            <div className="flex flex-col smd:inline-grid smd:grid-cols-2 md:inline-grid  md:grid-cols-3 gap-y-6 gap-x-6 w-full bg-[#1c1c1b] p-4 md:p-[60px] ">
                {data.branches?.map((branch) =>
                    <div key={branch.title.en} className="flex flex-col justify-between h-[144px] bg-[#282827] p-4 rounded-lg ">
                        <p className="text-white text-base font-bold uppercase">{branch.title.en}</p>
                        <p className="text-white">{branch.address}</p>
                        <a className="flex flex-row gap-2" target="_blank" rel="noopener noreferrer" href={branch.location}>
                            <p className=" text-[#ff5f00] font-bold text-base uppercase cursor-pointer">Get Location</p>
                            <FaLongArrowAltRight className="w-6 h-6 text-[#ff5f00]" />
                        </a>
                    </div>
                )}
            </div>
        </>
    )
}