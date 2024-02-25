const WhatWedo = () => {
    return (
        <div>
            <h2 className="text-3xl font-medium text-gray-800 text-center mb-3">
                What We Do...
            </h2>

            <div className="px-4 py-8 flex-wrap md:flex-nowrap flex items-center justify-center">
                <div>
                    <p className="text-lg text-gray-700 mb-8">
                        We specialize in developing software solutions for
                        individuals, startups, and enterprises. Whether you're
                        looking for a simple web app, a mobile application, or
                        enterprise-level software, we're your go-to partner for
                        all your software needs. Our products are built to scale
                        and efficiency, ensuring that your business stays ahead
                        in today's competitive landscape.
                    </p>
                </div>
                <div className="w-full md:ml-4 flex items-center justify-center">
                    <button className="bg-gray-900 hover:bg-gray-900/90 font-medium text-lg px-6 py-2.5 text-white">
                        Expolre&nbsp;services
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WhatWedo;
