import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Appbar from "../components/Partials/AppBar/Appbar";
import DrawerProvider from "../context/DrawerContext";
import Drawer from "../components/Partials/Drawer";
import Footer from "../components/Partials/AppBar/Footer";
import SuspenseLoader from "../components/utils/SuspenseLoader";
const MainLayout = () => {
    return (
        <HelmetProvider>
            <DrawerProvider>
                <Appbar />
                <Drawer />
                <main className="min-h-screen">
                    <SuspenseLoader>
                    <Outlet />
                    </SuspenseLoader>
                </main>
                <Footer />
            </DrawerProvider>
        </HelmetProvider>
    );
};

export default MainLayout;
