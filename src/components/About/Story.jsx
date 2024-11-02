export default function Story() {
    return (
        <div id="story" className="content bg-[#1c1c1b] text-white py-10">
            <div className="pt-12 px-24 md:x-24 flex flex-col md:w-full md:flex-row">
                {/* container mx-auto px-4 lg:px-0 */}
                {/* pt-12 px-2 md:x-24 flex flex-col md:w-full md:flex-row */}
                <div className="flex flex-wrap items-center justify-between">
                    {/* Text Section */}
                    <div className="lg:w-6/12">
                        <h1 className="py-5 text-orange-500 font-thin tracking-wider text-4xl PSS">
                            OUR STORY
                        </h1>
                        <h6 className="text-lg mb-4">
                            It all started in 2008, with four passionate brothers who shared
                            one big appetite, an obsession with juicy burgers, and a
                            demanding palate.
                        </h6>
                        <h6 className="text-lg mb-4">
                            They focused their energy on challenging the conventional idea
                            that food served fast must be “junk-food” and instead worked on
                            refining it to become an elevated culinary adventure where the
                            ingredients are natural and the taste is spectacular.
                        </h6>
                        <h6 className="text-lg mb-4">
                            This vision has won over the Egyptian market, and now, Buffalo
                            Burger operates over 44 branches in Egypt, as well as launching
                            across the MENA region.
                        </h6>
                        <h1 className="my-4 text-light font-thin tracking-wider md:text-6xl text-3xl PSS">
                            WHERE WE ARE NOW
                        </h1>

                        {/* Icons Section */}
                        <div className="flex flex-col sm:flex-row gap-8 md:gap-24 mb-4 justify-start items-center">
                            <img
                                className="w-20"
                                src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/Since-2008.png"
                                alt="Since 2008"
                            />
                            <img
                                className="w-20"
                                src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/44-branches.png"
                                alt="44 Branches"
                            />
                            <img
                                className="w-20"
                                src="https://buffalonlineorderingapp.s3-accelerate.amazonaws.com/static_images/Keto.png"
                                alt="Keto"
                            />
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="lg:w-4/12 mt-8 lg:mt-0">
                        <img
                            src="https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingapp.s3-accelerate.amazonaws.com%2Fstatic_images%2FBM-Jack.png&w=384&q=75"
                            alt="Buffalo Burger"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};