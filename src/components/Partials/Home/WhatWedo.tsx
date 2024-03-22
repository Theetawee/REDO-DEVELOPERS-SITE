import LinkTag from "../LinkTag";

const WhatWedo = () => {
    return (
      <div>
        <h2 className="text-3xl flex items-center justify-center flex-col font-medium text-gray-800 text-center mb-3">
          What We Do...
          <svg
            className="w-full h-4"
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
                strokeWidth="{5}"
                strokeLinecap="round"
              />
              <path
                d="M1.18829e-16 13C1.18829e-16 13 351.31 -10.2525 548 8.0857"
                transform="translate(0.00048828125 3.9641724)"
                id="Path"
                fill="none"
                fillRule="evenodd"
                stroke="#ee6435"
                strokeWidth="{5}"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </h2>

        <div className="px-4 py-8 flex-wrap md:flex-nowrap flex items-center justify-center">
          <div>
            <p className="text-lg text-gray-700 mb-8">
              We specialize in developing software solutions for individuals,
              startups, and enterprises. Whether you're looking for a simple web
              app, a mobile application, or enterprise-level software, we're
              your go-to partner for all your software needs. Our products are
              built to scale and efficiency, ensuring that your business stays
              ahead in today's competitive landscape.
            </p>
          </div>
          <div className="w-full md:ml-4 flex items-center justify-center">
            <LinkTag
              to={"/products"}
              className="bg-gray-900 hover:bg-gray-900/90 font-medium text-lg px-6 py-3 rounded text-white"
              label="Expolre&nbsp;services"
            />
          </div>
        </div>
      </div>
    );
};

export default WhatWedo;
