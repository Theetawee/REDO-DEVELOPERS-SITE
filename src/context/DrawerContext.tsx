import { createContext, useState, ReactNode } from "react";

interface DrawerContextProps {
    toggleSidebar: () => void;
    isOpen: boolean;
}

export const DrawerContext = createContext({
    toggleSidebar: () => {},
    isOpen: false,
});

interface DrawerProviderProps {
    children: ReactNode;
}

const DrawerProvider = ({ children }: DrawerProviderProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const contextData: DrawerContextProps = {
        toggleSidebar: toggleSidebar,
        isOpen: isOpen,
    };

    return (
        <DrawerContext.Provider value={contextData}>
            {children}
        </DrawerContext.Provider>
    );
};

export default DrawerProvider;
