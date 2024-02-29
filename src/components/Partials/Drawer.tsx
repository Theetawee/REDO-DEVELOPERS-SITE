import { useContext } from "react";
import { Link } from "react-router-dom";
import { DrawerContext } from "../../context/DrawerContext";
import AppBarLink from "./AppBar/AppBarLink";

const Drawer = () => {
    const { isOpen, toggleSidebar } = useContext(DrawerContext);

    return (
        <>
            {/* Dark overlay when sidebar is open */}
            {isOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed w-full h-full top-0 left-0 z-40 bg-white dark:bg-gray-800 opacity-20"
                ></div>
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 border-r-2 border-gray-100 dark:border-gray-800 left-0 z-50 w-[85%] md:hidden   h-screen transition-transform -translate-x-full ${
                    isOpen ? "translate-x-0" : "md:translate-x-0"
                } `}
                aria-label="Sidebar"
            >
                {/* Sidebar Content */}
                <div className="h-full px-3 relative py-4   bg-white dark:bg-gray-900">
                    {/* Waanverse Logo */}
                    <Link
                        to="/"
                        onClick={toggleSidebar}
                        className="justify-center text-center flex items-center mb-8"
                    >
                        Menu
                    </Link>
                    <div className="flex flex-col gap-y-4">
                        <AppBarLink label="Home" path="/" />
                        <AppBarLink label="About Us" path="/about" />
                        <AppBarLink label="Services and Products" path="/products" />
                        <AppBarLink label="Contact Us" path="/contact" />
                        <AppBarLink label="Company Profiles" path="/profiles" />
                        <AppBarLink label="Carrers" path="/carrers" />
                        </div>
                </div>
            </aside>
        </>
    );
};
export default Drawer;
