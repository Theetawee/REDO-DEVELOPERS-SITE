import Seo from "../components/utils/Seo";
import Logo from "../assets/logo.svg"
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <Seo
            title="About Redo Developers Inc. | Pioneering Innovation in Software and Technological services."
            description="Explore the journey of Redo Developers Inc. – where vision meets innovation. Learn about our commitment to reshaping the digital landscape, crafting software solutions that transcend boundaries, and our impact on industries and society."
        >
            <section className="bg-white">
                <div className="grid gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <img src={Logo} className="w-96 h-96" alt="Redo Developers Logo"/>
                    <div className="mt-4 px-4 pt-4 md:mt-0">
                        <ul className="relative text-gray-500 border-l border-gray-200">
                            <li className="mb-10 ml-6">
                                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                                        />
                                    </svg>
                                </span>
                                <h3 className="text-xl">Our Vision</h3>
                                <p className="text-base">
                                    From our inception in 2021, we set out with
                                    a common vision and a burst of inspiration.
                                    Our mission is to reshape the digital
                                    landscape by providing innovative software
                                    solutions, with a strong emphasis on AI
                                    (Artificial Intelligence) technologies.
                                </p>
                            </li>
                            <li className="mb-10 ml-6">
                                <span className="absolute flex items-center justify-center w-8 h-8 bg-yellow-400 rounded-full -left-4 ring-4 ring-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                                        />
                                    </svg>
                                </span>
                                <h3 className="text-xl">Our Journey</h3>
                                <p className="text-base">
                                    As we advanced, we faced challenges in
                                    various industries. Our dedicated team
                                    embraced these challenges as opportunities
                                    to transform businesses, harnessing the
                                    potential of AI to create innovative
                                    solutions.
                                </p>
                            </li>
                            <li className="mb-10 ml-6">
                                <span className="absolute flex items-center justify-center w-8 h-8 bg-rose-400 rounded-full -left-4 ring-4 ring-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                                        />
                                    </svg>
                                </span>
                                <h3 className="text-xl">Our Purpose</h3>
                                <p className="text-base">
                                    Our journey led us to develop groundbreaking
                                    solutions that address real-world problems.
                                    We designed collaborative tools, streamlined
                                    workflows, and enhanced user experiences to
                                    push the boundaries of innovation, driven by
                                    the power of AI technologies.
                                </p>
                            </li>
                            <li className="ml-6">
                                <span className="absolute flex items-center justify-center w-8 h-8 bg-orange-400 rounded-full -left-4 ring-4 ring-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.040.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                        />
                                    </svg>
                                </span>
                                <h3 className="text-xl">Our Impact</h3>
                                <p className="text-base">
                                    In 2023, Redo Developers Inc. stands as a
                                    testament to our capacity to transform
                                    challenges into stepping stones for
                                    progress. Our solutions resonate across
                                    industries, and our impact is felt through
                                    the efficiency, security, and innovation we
                                    infuse into every project, fueled by the
                                    possibilities of AI.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <hr />
            <section className="py-16 px-4 md:px-8">
                <div className="mb-10">
                    <h1 className="text-4xl tracking-tight text-stone-700 ">
                        Embark on a Journey with Redo Developers Inc.
                    </h1>
                    <p className="leading-relaxed text-gray-700 ">
                        Welcome to the vibrant world of Redo Developers Inc.,
                        where innovation converges with software excellence. We
                        are the architects of digital transformation, sculpting
                        solutions that redefine possibilities.
                    </p>
                    <p className="leading-relaxed text-gray-700 ">
                        Join us on this extraordinary journey, where creativity
                        knows no bounds. At Redo Developers Inc., we&apos;re
                        visionaries reshaping the digital sphere, transcending
                        industries with adaptable solutions.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
                    <div className="md:w-1/2">
                        <p className="mb-4 leading-relaxed text-gray-700 ">
                            Redo Developers Inc. is a fusion of logic and
                            aesthetics, a symphony of engineers, designers, and
                            strategists harmonizing to shatter boundaries. We
                            craft innovative software that paints the horizons
                            of tomorrow with vivid possibilities.
                        </p>
                        <p className="leading-relaxed text-gray-700 ">
                            Our mission is guided by core values: Innovation,
                            Excellence, Collaboration, and Growth. We aim to
                            empower businesses and individuals by offering
                            cutting-edge software, envisioning a future where
                            technology propels unprecedented success.
                        </p>
                    </div>

                    <div className="md:w-1/2">
                        <img
                            src={Logo}
                            alt="Redo Developers"
                            className="w-full h-72 object-cover rounded-md"
                        />
                    </div>
                </div>

                <div className="my-16">
                    <h2 className="text-3xl font-bold text-stone-700  mb-6">
                        Our Impact and Journey Through Time
                    </h2>
                    <p className="mb-4 leading-relaxed text-gray-700 ">
                        Redo Developers Inc. emerged as a beacon of change in
                        2021, transforming challenges into opportunities with
                        ingenious software solutions. Our impact spans
                        industries, streamlining processes, enhancing user
                        experiences, and driving growth.
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-700 ">
                        Our journey, Founded by{" "}
                        <Link
                            to="/profiles/ceo"
                            className="text-sky-500 hover:underline"
                        >
                            Khaotungkulmethee Pattawee Drake
                        </Link>
                        , began with a spark of inspiration and a passion for
                        innovation. From reshaping the digital landscape to
                        venturing into product development, our commitment to
                        excellence remains unwavering.
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-700 ">
                        In 2023, Redo Developers Inc. stands tall as a testament
                        to our capacity to reshape the future through
                        technology. Join us as we continue to innovate and solve
                        real-world problems, one software solution at a time.
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-stone-700  mb-6">
                        Vision, Commitment to Quality, and Social Responsibility
                    </h2>
                    <p className="mb-4 leading-relaxed text-gray-700 ">
                        At Redo Developers Inc., we envision a future where
                        technology transcends boundaries, empowering individuals
                        and businesses. Our commitment to quality ensures we
                        deliver software solutions that set new benchmarks for
                        excellence.
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-700 ">
                        Our customer-centric approach, innovation, and social
                        responsibility form the foundation of our work. We
                        engage in initiatives that support education,
                        sustainability, and social well-being, contributing to a
                        better world for everyone.
                    </p>
                </div>
            </section>
        </Seo>
    );
};

export default AboutPage;
