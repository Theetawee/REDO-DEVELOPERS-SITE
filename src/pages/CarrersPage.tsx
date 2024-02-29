import Seo from "../components/utils/Seo";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
const CarrersPage = () => {
    return (
        <Seo
            title="Careers | Redo Developers Inc."
            description="Explore career opportunities at Redo Developers Inc. Currently, there are no open positions available. Check back later for updates."
        >
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-lg mx-auto">
                    <h1 className="text-4xl  font-bold text-gray-700 mb-4">
                        Careers
                    </h1>
                    <div className="flex justify-center">
                        <ExclamationTriangleIcon className="w-12 h-12 text-red-500 mb-4" />
                    </div>
                    <p className="text-lg text-gray-600 mb-8">
                        Currently, there are no open positions available. Check
                        back later for updates.
                    </p>

                    {/* You can add more content or links here */}
                </div>
            </div>
        </Seo>
    );
};

export default CarrersPage;
