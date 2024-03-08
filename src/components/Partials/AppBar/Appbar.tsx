import AppBarDropDown from "./AppBarDropDown";
import Logo from "../../../assets/logo.svg";
import { useLocation } from "react-router-dom";
import AppBarLink from "./AppBarLink";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { DrawerContext } from "../../../context/DrawerContext";
import { XMarkIcon } from "@heroicons/react/20/solid";
import LinkItem from "../LinkItem";
import LinkTag from "../LinkTag";





const Appbar = () => {
    const location = useLocation();

    const {toggleSidebar,isOpen } = useContext(DrawerContext);
    return (
        <header className="bg-white border-b border-gray-100">
            <nav className="flex items-center px-4 py-2.5 max-w-screen-lg mx-auto justify-between">
                <div>
                    <LinkItem label="Home" to={"/"} className="flex items-center gap-x-2">
                        <img
                            src={Logo}
                            alt="Redo Developers Inc"
                            className="w-10 h-10"
                        />
                        <span className="hidden md:block text-2xl text-gray-700 font-medium">
                            Redo Developers Inc
                        </span>
                    </LinkItem>
                </div>
                {location.pathname !== "/contact" && (
                    <div className="items-center hidden md:flex gap-x-6">
                        <div>
                            <AppBarLink label="Home" path="/" />
                        </div>
                        <div>
                            <AppBarDropDown />
                        </div>
                        <div>
                            <AppBarLink label="Carrers" path="/carrers" />
                        </div>
                    </div>
                )}
                <div className="flex items-center gap-x-6">
                    <div className="md:hidden">
                        <button
                            onClick={toggleSidebar}
                            className="p-2 hover:bg-gray-50 rounded-md text-gray-600"
                        >
                            {isOpen ? (
                                <XMarkIcon className="w-6 h-6" />
                            ) : (
                                <Bars3Icon className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                    {location.pathname === "/contact" ? (
                        <div>
                            <a href="tel:+256779730256" className="text-gray-700 font-medium">+256-779730256</a>
                        </div>
                    ) : (
                        <div>
                            <LinkTag
                                    to="/contact"
                                    label="Contact Us"
                                className="py-2 px-5 border transition-all duration-500 ease-in-out border-primary-400 rounded hover:bg-primary-500 hover:text-white hover:border-primary-500 font- text-gray-700"
                            />
                               
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Appbar;
