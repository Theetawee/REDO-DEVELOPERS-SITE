import Seo from "../components/utils/Seo";
import Bg from "../assets/bg.mp4";

const HomePage = () => {
    return (
        <Seo
            title="Redo Developers Inc. | Pioneering Technology Solutions for Success"
            description="Discover a transformative partnership with Redo Developers Inc. We're your trailblazing ally, delivering cutting-edge technology and innovative software solutions to propel businesses and individuals towards success in the dynamic digital landscape."
        >
            <section className="relative flex items-center justify-center h-[90vh] overflow-hidden">
                <div className="absolute z-10 px-4 inset-0 flex items-center justify-center bg-gray-900/70">
                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-white text-4xl mb-6">
                            <span className="text-primary-400">
                                Better Software
                            </span>{" "}
                            = Better{" "}
                            <span className="text-primary-400 inline-flex items-center font-medium">
                                Life
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 ml-2 text-green-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 00-2 0v4a1 1 0 102 0V7zm-1 9a1 1 0 100-2 1 1 0 000 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>{" "}
                        </p>
                        <h1 className="text-white text-5xl font-bold mb-6">
                            Welcome to Redo Developers Inc.
                        </h1>
                        <p className="text-white text-lg italic mb-8">
                            &#8212; Home to the most efficient and innovative
                            software solutions built for success.
                        </p>
                        <div className="flex items-center justify-center">
                            <button className="border hover:bg-white/10 border-white text-white px-6 py-2.5 text-lg font-medium">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={Bg}
                    autoPlay
                    loop
                    muted
                />
            </section>
            <section className="py-8 px-4">
                <h2 className="text-center text-2xl font-bold text-gray-600">What we do</h2>
            </section>
        </Seo>
    );
};

export default HomePage;
