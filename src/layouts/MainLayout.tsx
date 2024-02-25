import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Appbar from "../components/Partials/AppBar/Appbar";

const MainLayout = () => {
    return (
        <HelmetProvider>
            <Appbar/>
            <Outlet />
        </HelmetProvider>
    );
};

export default MainLayout;
