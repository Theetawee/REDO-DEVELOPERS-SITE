import { Link } from "react-router-dom";
import Seo from "../components/utils/Seo"
import { useState } from "react";
import Service from "../components/Partials/Services/Service";
import CustomDev from "../components/Partials/Services/CustomDev";
import WebDev from "../components/Partials/Services/WebDev";
import MobDev from "../components/Partials/Services/MobDev";
import SoftwareConst from "../components/Partials/Services/SoftwareConst";
import Renov from "../components/Partials/Services/Renov";

const ServicesPage = () => {

    const [service, setService] = useState('custom-dev')

    const handleChange = (service:string) => {
        setService(service);
    }

    let content = <CustomDev />;

    if(service === 'custom-dev') {
        content = <CustomDev />
    }else if(service === 'web-dev') {
        content = <WebDev />
    }else if(service === 'mobile-dev') {
        content = <MobDev />
    }else if(service === 'software') {
        content = <SoftwareConst />
    }else if(service === 'renov') {
        content = <Renov />
    }


  return (
      <Seo
          title="Services and Products | Redo Developers Inc."
          description="Discover the diverse range of innovative products and expert services offered by Redo Developers Inc. Solutions tailored to meet your unique needs, spanning from custom software development and web design to mobile app development and digital marketing. With a focus on quality, efficiency, and client satisfaction, we strive to deliver cutting-edge solutions that drive growth and success for your business."
      >
          <section className="py-8 bg-gray-50 px-4">
              <div className="max-w-2xl mx-auto text-center">
                  <h1 className="text-4xl py-6 text-gray-700 font-medium">
                      Get started with our Redo Developers Inc. Services and
                      Products
                  </h1>
                  <div className="my-6">
                      <Link
                          to="/contact"
                          className="text-white hover:bg-primary-500/90 text-lg bg-primary-500 py-3 px-8"
                      >
                          Contact us
                      </Link>
                  </div>
                  <div className="py-10">
                      <p className="italic">
                          Looking for a specific service or product?
                      </p>
                  </div>
              </div>
<div className="bg-gray-50">
              <div className="max-w-screen-lg mx-auto py-10">
                  <div className="flex flex-wrap gap-6 items-center justify-between">
                      <div>
                          <p className="text-xl font-semibold text-gray-800 mb-4">
                              Our products and services include:
                          </p>
                          <ul className="list-disc pl-6">
                              <Service
                              service={service}
                                  name="Custom Software Development"
                                  onclick={handleChange}
                                  label="custom-dev"
                              />

                              <Service
                              service={service}
                                  name="Web development"
                                  onclick={handleChange}
                                  label="web-dev"
                              />
                              <Service
                              service={service}
                                  name="Mobile App Development"
                                  onclick={handleChange}
                                  label="mobile-dev"
                              />
                              <Service
                              service={service}
                                  name="Software Consulting"
                                  onclick={handleChange}
                                  label="software"
                              />
                              <Service
                              service={service}
                                  name="Software Renovation and Support"
                                  onclick={handleChange}
                                  label="renov"
                              />
                          </ul>
                      </div>
                      <div className="bg-white mx-auto w-full p-4 rounded-xl shadow">
                          {content}
                      </div>
                  </div>
                  </div>
                  </div>
          </section>
      </Seo>
  );
}

export default ServicesPage
