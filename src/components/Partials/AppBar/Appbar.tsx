import AppBarDropDown from "./AppBarDropDown";
import Logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import AppBarLink from "./AppBarLink";
import { Bars3Icon } from "@heroicons/react/24/outline";
const Appbar = () => {
    return (
        <header className="bg-white border-b border-gray-100">
            <nav className="flex items-center p-4 max-w-screen-lg mx-auto justify-between">
                <div>
                    <Link to={"/"} className="flex items-center gap-x-2">
                        <img
                            src={Logo}
                            alt="Redo Developers Inc"
                            className="w-10 h-10"
                        />
                        <span className="hidden md:block text-2xl text-gray-700 font-medium">
                            Redo Developers Inc
                        </span>
                    </Link>
                </div>
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
                <div className="flex items-center gap-x-6">
                    <div className="md:hidden">
                        <button>
                            <Bars3Icon className="w-6 h-6" />
                        </button>
                    </div>
                    <div>
                        <button className="py-2 px-5 border-2 border-primary-400 rounded-md hover:bg-gradient-to-tr from-primary-300 to-primary-500 hover:text-white hover:border-primary-500 font-medium text-gray-700">
                            Contact us
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Appbar;
