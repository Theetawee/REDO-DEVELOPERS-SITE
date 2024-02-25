import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Appbar from "../components/Partials/AppBar/Appbar";
import DrawerProvider from "../context/DrawerContext";
import Drawer from "../components/Partials/Drawer";

const MainLayout = () => {
    return (
        <HelmetProvider>
            <DrawerProvider>
                <Appbar />
                <Drawer/>
                <Outlet />
            </DrawerProvider>
        </HelmetProvider>
    );
};

export default MainLayout;
