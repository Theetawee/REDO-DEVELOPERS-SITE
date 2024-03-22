import Seo from "../components/utils/Seo";
import WhatWedo from "../components/Partials/Home/WhatWedo";
import StatSect from "../components/Partials/Home/StatSect";
import BgImage from "../assets/bg.webp";
import LinkTag from "../components/Partials/LinkTag";
import Video from "../components/Partials/Home/Video";

const HomePage = () => {



    return (
      <Seo
        title="Redo Developers Inc. | Pioneering Technology Solutions for Success"
        description="Discover a transformative partnership with Redo Developers Inc. We're your trailblazing ally, delivering cutting-edge technology and innovative software solutions to propel businesses and individuals towards success in the dynamic digital landscape.">
        <section className="relative flex items-center justify-center h-[90vh] overflow-hidden">
          <div className="absolute z-10 px-4 inset-0 flex items-center justify-center bg-black/70">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-white text-5xl font-bold mb-6">
                Welcome to{" "}
                <div className="inline-flex items-center justify-center flex-col">
                  Redo Developers Inc.
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 554 43"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <g
                      id="Group"
                      transform="matrix(0.99939084 0.034899496 -0.034899496 0.99939084 3.2138672 2.5857239)">
                      <path
                        d="M0 18C0 18 346.671 -10.224 542 5.80723"
                        transform="translate(1.9487305 0)"
                        id="Path"
                        fill="none"
                        fillRule="evenodd"
                        stroke="#ee6435"
                        strokeWidth={5}
                        strokeLinecap="round"
                      />
                      <path
                        d="M1.18829e-16 13C1.18829e-16 13 351.31 -10.2525 548 8.0857"
                        transform="translate(0.00048828125 3.9641724)"
                        id="Path"
                        fill="none"
                        fillRule="evenodd"
                        stroke="#ee6435"
                        strokeWidth={5}
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                </div>
              </h1>
              <p className="text-white text-lg italic mb-8">
                &#8212; Home to the most efficient and innovative software
                solutions built for success.
              </p>
              <div className="flex items-center justify-center">
                <LinkTag
                  to="/contact"
                  label="Contact us"
                  className="border hover:bg-white/10 rounded border-white text-white px-6 py-2.5 text-lg font-medium"
                />
                <LinkTag
                  to={"/products"}
                  className="py-2.5 rounded hidden sm:block px-6 bg-primary-500 text-white ml-6 text-lg font-medium hover:bg-primary-500/80"
                  label="Services and Products"
                />
              </div>
            </div>
          </div>
          <Video />
        </section>
        <section className="py-8 bg-gray-50  px-4">
          <WhatWedo />
        </section>
        <section
          className=" min-h-screen bg-cover bg-no-repeat flex items-center justify-between"
          style={{ backgroundImage: `url(${BgImage})` }}>
          <div className="w-full h-full py-8 px-4 bg-white/70">
            <StatSect />
          </div>
        </section>
      </Seo>
    );
};

export default HomePage;
