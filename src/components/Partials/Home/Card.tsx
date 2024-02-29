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
        <div className="max-w-lg w-full py-4 px-2 mx-auto">
            <div className="bg-white w-full rounded-xl shadow border border-gray-100 ring-0 ring-primary-500 overflow-hidden">
                <div className="px-6 py-8">
                    <div className="flex items-center mb-4">
                        <img
                            src={image}
                            className="w-14 h-14 rounded-full mr-4"
                            alt={name}
                        />
                        <div>
                            <p className="text-xl mb-0 font-medium text-gray-700">
                                {name}
                            </p>
                            <p className="text-gray-600 leading-3 italic text-sm">&#8212; {title}</p>
                        </div>
                    </div><span>
                        <svg className="w-6 h-6 text-primary-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
                    </span>
                    <p className="text-gray-700  pl-8">{description}</p>
                    <span className="flex mb-6 items-center justify-end">
                        <svg className="w-6 h-6 text-primary-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"/></svg>
                    </span>
                    <div className="border-t border-gray-200 pt-4">
                        <div className="flex items-center justify-center">
                            {/* display the stars equivalent to the number */}
                            {[...Array(stars)].map((_, i) => (
                                <StarIcon className="w-5 h-5 text-yellow-500" key={i} />
                            ))}
                        </div>
                    </div>

                </div><div className="items-center flex text-sm text-primary-600 justify-center"><p>Swipe to read more</p></div>
            </div>
        </div>
    );
};

export default TestimonialCard;
