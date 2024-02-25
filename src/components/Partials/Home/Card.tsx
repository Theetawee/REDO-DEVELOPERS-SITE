import { StarIcon } from "@heroicons/react/20/solid";

const TestimonialCard = ({
    name,
    title,
    description,
    stars,
    image,
}: {
        name: string;
    stars: number;
    title: string;
    description: string;
    image: string;
}) => {
    return (
        <div className="max-w-lg mx-auto pb-4">
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-8">
                    <div className="flex items-center mb-4">
                        <img
                            src={image}
                            className="w-20 h-20 rounded-full mr-4"
                            alt={name}
                        />
                        <div>
                            <p className="text-xl uppercase mb-0 font-medium text-gray-700">
                                {name}
                            </p>
                            <p className="text-gray-600 leading-3 italic text-sm">{title}</p>
                        </div>
                    </div>
                    <p className="text-gray-700 mb-4">{description}</p>
                    <div className="border-t border-gray-200 pt-4">
                        <div className="flex items-center justify-center">
                            {/* display the stars equivalent to the number */}
                            {[...Array(stars)].map((_, i) => (
                                <StarIcon className="w-5 h-5 text-yellow-500" key={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
