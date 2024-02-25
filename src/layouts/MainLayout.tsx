import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const MainLayout = () => {
    return (
        <HelmetProvider>
            <Outlet />
        </HelmetProvider>
    );
};

export default MainLayout;
