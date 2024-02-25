import AppBarDropDown from "./AppBarDropDown";
import Logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import AppBarLink from "./AppBarLink";
const Appbar = () => {
    return (
        <header className="bg-white">
            <nav className="flex items-center p-4 max-w-screen-lg mx-auto justify-between">
                <div>
                    <Link to={"/"} className="flex items-center gap-x-2">
                        <img
                            src={Logo}
                            alt="Redo Developers Inc"
                            className="w-10 h-10"
                        />
                        <span className="text-2xl text-gray-700 font-medium">
                            Redo Developers Inc
                        </span>
                    </Link>
                </div>
          <div className="flex items-center gap-x-6">
            <div>
              <AppBarLink label="Home" path="/"/>
            </div>
                    <AppBarDropDown />
                </div>
            </nav>
        </header>
    );
};

export default Appbar;
