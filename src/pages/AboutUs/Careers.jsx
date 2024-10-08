export default function Careers() {
    return (
        <div className="bg-black text-white font-sans">
            {/* Apply Now Section */}
            <div className="flex flex-col lg:flex-row mb-3">
                {/* Left Section */}
                <div className="w-full lg:w-1/2 bg-white text-black p-5 lg:p-10">
                    <h3 className="text-6xl tracking-wider font-thin mb-4 text-orange-500 PSS" >
                        APPLY NOW
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <i className="fa-solid fa-diamond text-2xl text-orange-500"></i>
                            <p className="ml-2">
                                A different kind of burger requires a different kind of person.
                            </p>
                        </div>
                        <div className="flex items-start">
                            <i className="fa-solid fa-diamond text-2xl text-orange-500"></i>
                            <p className="ml-2">
                                Each Buffalo Addict who joins our team builds our culture by never leaving their personality at the door.
                            </p>
                        </div>
                        <div className="flex items-start">
                            <i className="fa-solid fa-diamond text-2xl text-orange-500"></i>
                            <p className="ml-2">
                                We don’t just look for passion to serve food, but we are looking for individuals that have a desire to serve our community and people.
                            </p>
                        </div>
                        <div className="flex items-start">
                            <i className="fa-solid fa-diamond text-2xl text-orange-500"></i>
                            <p className="ml-2">
                                We want every person to leave our doors with a smile on their faces, and that includes our team!
                            </p>
                        </div>
                    </div>
                    {/* Apply Button */}
                    <div className="flex justify-center mt-5">
                        <button className="bg-orange-500 text-white py-2 px-8 rounded">
                            APPLY NOW
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div
                    className="w-full lg:w-1/2 flex justify-center items-center bg-cover bg-center"
                    style={{
                        backgroundImage:
                            'url(https://pbs.twimg.com/media/EnRpwhGW4AAOSvl.jpg)',
                    }}
                >
                    <div className="text-center space-y-3">
                        <h6 className="text-white">JOIN OUR FAMILY</h6>
                        <button className="bg-orange-500 text-white py-2 px-8 rounded">
                            APPLY NOW
                        </button>
                    </div>
                </div>
            </div>

            {/* Employee Training Section */}
            <div className="p-5 lg:p-10">
                <h1 className="text-7xl font-thin mb-4 text-orange-500 PSS tracking-wider">
                    EMPLOYEE TRAINING
                </h1>
                <p className="text-orange-500">
                    As part of our family, we invest in employee training as a cornerstone of our key values, and as the key ingredient to our success.
                </p>
                <p className="mt-2">
                    Our aim is to create a consistent benchmark that enhances the experience of both our customers and our employees. We train our employees in the following areas:
                </p>

                <div className="flex flex-col lg:flex-row mt-5">
                    {/* Training Sections */}
                    <div className="space-y-5 w-full lg:w-1/2">
                        <div>
                            <h6 className="text-lg font-semibold">DEVELOPING TALENT</h6>
                            <p>
                                Many employees start in entry-level positions and work their way up into higher-level jobs. We ensure that all employees have equal access to training programs.
                            </p>
                        </div>

                        <div>
                            <h6 className="text-lg font-semibold">TEAMWORK & DIVERSITY TRAINING</h6>
                            <p>
                                Our team is our family. Teamwork and diversity training ensure our employees know how to work together under pressure.
                            </p>
                        </div>

                        <div>
                            <h6 className="text-lg font-semibold">PROBLEM SOLVING SKILLS</h6>
                            <p>
                                Our team is trained to resolve any problems that arise in a friendly and positive manner, focusing on customer satisfaction.
                            </p>
                        </div>

                        <div>
                            <h6 className="text-lg font-semibold">SAFETY & SECURITY</h6>
                            <p>
                                Employees are trained on the basics of safety to handle emergency situations, ensuring customer safety.
                            </p>
                        </div>

                        <div>
                            <h6 className="text-lg font-semibold">FOOD SAFETY & SANITIZATION</h6>
                            <p>
                                We have a well-designed sanitation and food safety program to protect customers and maintain our position in the industry.
                            </p>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 mt-5 lg:mt-0 lg:ml-5">
                        <img
                            className="rounded-lg shadow-lg"
                            src="https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingapp.s3-accelerate.amazonaws.com%2Fstatic_images%2Fabout_training.webp&w=640&q=75"
                            alt="Employee Training"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};