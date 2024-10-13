export default function FindUs() {
    return (
        <div className="bg-black min-h-screen">
            <div className="container mx-auto flex flex-col items-center">
                <h1
                    className="mt-4 mb-6 text-7xl font-thin tracking-wider PSS text-orange-500"
                >
                    FIND US
                </h1>

                <div className="text-white mb-3 border-b border-orange-500">
                    <p className="text-2xl text-center max-w-2xl">
                        Buffalo Burger is constantly expanding to deliver an unmatched gourmet experience at every customers’ doorstep. Today, we take pride in boasting flagship restaurants across Egypt, bringing the ‘real deal’ closer to your home. Looking for the branch closest to you? Find us wherever you are.
                    </p>
                </div>

                <div className="w-full sm:w-2/3 lg:w-1/3 flex flex-col items-center mb-5">
                    <h5 className="text-white text-lg mb-2">Find Branch</h5>
                    <select
                        className="form-select bg-gray-700 text-white rounded px-3 py-2 w-full"
                        aria-label="Branch select"
                    >
                        <option selected disabled>
                            Select a Branch
                        </option>
                        <option>Al-Ahly</option>
                        <option>Alex-Semouha</option>
                        <option>Concord Mall</option>
                        <option>Port Said</option>
                        <option>Triumph</option>
                        <option>Zayed</option>
                        <option>Almaza Mall</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
