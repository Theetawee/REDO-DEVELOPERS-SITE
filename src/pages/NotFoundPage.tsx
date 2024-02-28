import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-5xl text-gray-700 font-bold mb-4">
                    404 - Page Not Found
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                    Oops! The page you are looking for does not exist.
                </p>
                <Link to="/" className="text-blue-500 hover:underline">
                    Go back to home
                </Link>
            </div>
        </section>
    );
};

export default NotFoundPage;
