import Customer from "../../../assets/cust.jpg";

const StatSect = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-8">
            <h2 className="text-4xl text-gray-700 font-bold mb-4 text-center">
                Empowering Businesses and Individuals
            </h2>
            <p className="text-center text-gray-600  mb-8 text-lg">
                Whether you're a business owner or an individual, Redo
                Developers Inc. is here to support you every step of the way.
                Explore some of the most common challenges our customers face
                and see how our integrated software and solutions can help you
                overcome these obstacles and propel your goals forward.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div>
                    <img
                        src={Customer}
                        alt="Happy Customer"
                        className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover"
                    />
                </div>
                <div className="text-gray-700">
                    <p className="mb-2 text-xl">
                        Join the group of people who use our software to drive
                        business success.
                    </p>
                    <p className="mb-2 text-xl">
                        Experience the transformative synergy of innovation and
                        excellence.
                    </p>
                    <p className="mb-2 text-xl">
                        Our unwavering commitment to excellence and a trail of
                        success stories set us apart.
                    </p>
                    <div className="grid grid-cols-1 mt-4 md:grid-cols-3 gap-4">
                        <div className="text-center">
                            <p className="text-2xl md:text-3xl font-bold text-primary-400">
                                100+
                            </p>
                            <p className="font-medium">Projects</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl md:text-3xl font-bold text-primary-400">
                                20M+
                            </p>
                            <p className="font-medium">Hours Saved for Clients</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl md:text-3xl font-bold text-primary-400">
                                200+
                            </p>
                            <p className="font-medium">Satisfied Client Collaborations</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatSect;
