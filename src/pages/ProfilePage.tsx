import { Link } from "react-router-dom";
import Seo from "../components/utils/Seo";
import Founder from "../assets/thoe.png";
const ProfilePage = () => {
    return (
        <Seo
            title="Profiles | Redo Developers Inc. "
            description="Explore the talented and dedicated leaders and team members at Redo Developers Inc. Meet our diverse team of professionals who bring expertise, creativity, and innovation to every project. From seasoned executives to passionate developers, each member of our team plays a vital role in driving our company's success. Get to know the faces behind our company and discover the skills and experiences that make us a trusted partner for your technology needs."
        >
            <section className="py-10 px-4">
                <div className="max-w-2xl text-center mx-auto">
                    <h1 className="text-4xl font-bold text-gray-700">
                        Meet our talented and dedicated leaders and team members
                        at Redo Developers Inc
                    </h1>
                </div>
                <div className="py-20 max-w-screen-lg mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <Link to="/profiles/ceo" className="block">
                        <div className="max-w-sm bg-white shadow rounded-xl p-4">
                            <img
                                src={Founder}
                                className="w-40 h-40 mx-auto object-cover rounded-full mb-8"
                                alt="Khaotungkulmethee Pattawee Drake"
                            />
                            <div className="text-center">
                                <h2 className="text-2xl font-bold text-gray-700">
                                    Khaotungkulmethee Pattawee
                                </h2>
                                <p className="text-gray-600 italic">&#8212; Chairman and CEO - Redo Developers Inc.</p>
                            </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </Seo>
    );
};

export default ProfilePage;
