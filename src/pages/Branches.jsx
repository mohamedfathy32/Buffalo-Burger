import Branch from "../components/Branch";
import { branchesList } from "../utils/data";

export default function BranchesPage() {
    return (
        <>
            <div className="flex flex-col smd:inline-grid smd:grid-cols-2 md:inline-grid  md:grid-cols-3 gap-y-6 gap-x-6 w-full bg-stone-900 p-4 md:p-[60px] ">
                {branchesList.map((branch) =>
                    <Branch
                        key={branch.name}
                        name={branch.name}
                        address={branch.address}
                        src={branch.src}
                    />
                )}
            </div>
        </>
    )
}