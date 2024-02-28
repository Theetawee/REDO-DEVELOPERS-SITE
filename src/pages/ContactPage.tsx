import Seo from "../components/utils/Seo"
import CallCenter from "../assets/call.jfif"
import { PhoneIcon,EnvelopeIcon } from "@heroicons/react/20/solid";
const ContactPage = () => {
    return (
        <Seo
            title="Contact Us | Redo Developers Inc."
            description="Contact Redo Developers Inc. for inquiries, support, or collaborations. Whether you have questions about our services, need technical assistance, or wish to explore collaboration opportunities, we're here to help. Feel free to reach out to us via email, phone, or our online contact form. Our dedicated team is committed to providing timely and helpful responses to all inquiries."
        >
            <section className="px-4 bg-gray-50 py-8">
                <div className="flex flex-wrap md:flex-nowrap justify-center gap-x-10 items-center ">
                    <div className="md:w-1/2 w-full">
                        <h1 className="text-4xl text-gray-700 mb-6 font-bold">
                            Contact Us About Redo Developers Inc. Software
                            Products and Services
                        </h1>
                        <p className="text-lg">
                            We'd love to show you how you can increase your
                            sales productivity, provide better customer service,
                            or all of the above! Here are a few ways to reach
                            out to our sales team.
                        </p>
                    </div>
                    <div className="w-full mt-6 md:mt-0 md:w-auto">
                        <div className="flex justify-center items-center w-full">
                            <img
                                src={CallCenter}
                                className="w-96 h-96 rounded-full"
                                alt="call center"
                            />
                        </div>
                    </div>
                </div>
                <div className="py-10">
                    <div className="flex flex-wrap gap-y-10 py-10 items-center gap-x-10 justify-center">
                        <div className="py-8 px-4 max-w-sm w-full grid grid-cols-1 text-center gap-4 bg-white rounded-lg shadow">
                            <PhoneIcon className="w-9 h-9 mx-auto text-gray-700" />
                            <p className="text-lg ">Call us Directly</p>
                            <a
                                className="hover:underline text-2xl"
                                href="tel:+256779730256"
                            >
                                +256-779730256
                            </a>
                        </div>
                        <div className="py-8 px-4 max-w-sm w-full grid grid-cols-1 text-center gap-4 bg-white rounded-lg shadow">
                            <EnvelopeIcon className="w-9 h-9 mx-auto text-gray-700" />
                            <p className="text-lg ">Email us</p>
                            <a
                                className="hover:underline text-2xl"
                                href="mailto:support@redodevelopers.site"
                            >
                                support@redodevelopers.site
                            </a>
                        </div>
                        <div className="py-8 px-4 max-w-sm w-full grid grid-cols-1 text-center gap-4 bg-white rounded-lg shadow">
                            <span>
                                <svg className="w-9 h-9 mx-auto text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                            </span>
                            <p className="text-lg ">WhatsApp us ASAP.</p>
                            <a
                                className="hover:underline text-2xl"
                                href="https://wa.me/+256765846845"
                            >
                                +256 765 846845
                            </a>
                        </div>
                    </div>
                    <div className="bg-white max-w-screen-lg mx-auto rounded-xl p-4">
                        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">
                            Contact Us and Let Us Know
                        </h2>
                        <ul className="list-disc pl-6 mb-4">
                            <li className="mb-2">
                                Describe the specific problems or challenges you
                                are facing.
                            </li>
                            <li className="mb-2">
                                Let us know which services or products you are
                                interested in.
                            </li>
                            <li className="mb-2">
                                Provide information about your budget or
                                financial constraints, if applicable.
                            </li>
                            <li className="mb-2">
                                Share any other questions, concerns, or comments
                                you may have.
                            </li>
                        </ul>
                        <p className="text-gray-700 mb-4">
                            We'd love to hear from you! Your input helps us
                            tailor our solutions to your needs. Expect a prompt
                            reply from our dedicated support team with our best
                            possible solutions.
                        </p>
                        {/* You can add contact form or contact information here */}
                    </div>
                </div>
            </section>
        </Seo>
    );
}

export default ContactPage
