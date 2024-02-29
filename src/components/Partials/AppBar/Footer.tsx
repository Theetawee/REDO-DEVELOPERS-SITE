import Logo from "../../../assets/logo.svg";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-100 border-t border-gray-300 text-gray-700">
            <div className="container mx-auto py-10 md:py-16 lg:py-20 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h5 className="text-lg font-medium mb-2">Company</h5>
                        <ul className="text-gray-700">
                            <li className="mb-3">
                                <Link
                                    to="/about"
                                    className="hover:text-primary-500 text-sm"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link
                                    to="/carrers"
                                    className="hover:text-primary-500 text-sm"
                                >
                                    Carrers
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-medium mb-2">
                            Help Center
                        </h5>
                        <ul className="text-gray-700">
                            <li className="mb-3">
                                <Link
                                    to="/contact"
                                    className="hover:text-primary-500 text-sm"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-medium mb-2">Legal</h5>
                        <ul className="text-gray-700">
                            <li className="mb-3">
                                <Link
                                    to="#"
                                    className="hover:text-primary-500 text-sm"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-medium mb-2">Relations</h5>
                        <ul className="text-gray-700">
                            <p>Profiles</p>

                            <li className="mb-3">
                                <Link
                                    to="/profiles/founder"
                                    className="hover:text-primary-500 text-sm"
                                >
                                    Founder
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link
                                    to="/meeting"
                                    className="hover:text-primary-500 text-sm"
                                >
                                    Demo
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-8 border-gray-400" />
                <div className="text-center">
                    <Link
                        to="/about"
                        className="flex items-center justify-center mb-5 text-xl font-medium"
                    >
                        <img
                            src={Logo}
                            className="w-8 h-8 mr-2"
                            alt="Redo Developers Inc. logo"
                        />
                        Redo Developers Inc.
                    </Link>
                    <p className="text-sm text-gray-700">
                        &copy; 2021-2023 Redo Developers Inc. All Rights
                        Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
