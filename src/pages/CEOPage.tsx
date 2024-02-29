import Seo from "../components/utils/Seo";
import { Link } from "react-router-dom";


const FounderPage = () => {
    return (
        <Seo
            title="Founder, CEO, and Chairman | Redo Developers Inc."
            description="Meet Khaotungkulmethee Pattawee Drake and discover his journey in leading innovation and technology."
        >
            <section className="py-8 px-4">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                    className="w-96 h-96 rounded-full mx-auto"
                                    alt="Founder of Redo Developers Inc. Khaotungkulmethee Pattawee Drake"
                                />
                            </div>
                            <div className="max-w-md mx-auto py-4">
                                <p>
                                    <span className="title">Names</span>:
                                    Khaotungkulmethee Pattawee
                                </p>
                                <p>
                                    <span className="title">Born</span>: March
                                    5, 2004 (Age: 20)
                                </p>
                                <p>
                                    <Link
                                        to="https://en.wikipedia.org/wiki/Chiang_Rai"
                                        target="_blank"
                                        className="text-blue-500 hover:underline"
                                    >
                                        (Chiang Rai, Thailand)
                                    </Link>
                                </p>
                                <p>
                                    <span className="title">Other names</span>:
                                    Drake, Kanghan
                                </p>
                                <p>
                                    <span className="title">Education</span>:
                                    Indian Institute of Health and Allied
                                    Sciences
                                </p>
                                <p>
                                    <span className="title">Occupations</span>:
                                    Computer Programmer &middot; Businessman
                                </p>
                                <p>
                                    <span className="title">Years active</span>:
                                    2021 - Present
                                </p>
                                <p>
                                    <span className="title">Title</span>:
                                    Founder, Executive CEO, and Chairman of Redo
                                    Developers Inc., Founder and Chairman of
                                    Waanverse Corp
                                </p>
                                <p>
                                    {" "}
                                    <span className="title">Spouse</span>: null
                                </p>
                            </div>
                        </div>
                        <div>
                            <p>
                                Khaotungkulmethee (Kow-tung-kul-meh-thee)
                                Pattawee Drake [Thai: เขาตั้งกุลเมธี ปัทธวี
                                เดรก] born March 5, 2004, is a Ugandan
                                businessman, computer programmer, and Laboratory
                                technician. He founded Redo Developers Inc., of
                                which he is executive chairman, chief executive
                                officer, and controlling shareholder.
                            </p>
                            <p className="mb-6">
                                As of 2023, Drake attends the Indian Institute
                                of Health and Allied Sciences, pursuing a Course
                                in Medical Laboratory Technology. He is also a
                                businessman and is the founder and chairman of
                                Waanverse Corp, a beta Social and Knowledge
                                platform.
                            </p>
                            <h2 className="text-2xl">
                                Early Life and Education
                            </h2>
                            <hr className="h-px border-t border-gray-300 mb-7" />
                            <p>
                                Khaotungkulmethee Pattawee Drake was born on
                                March 5, 2004, in Chiang Rai, Thailand, to
                                businesswoman Edith (Naluzze). He and his two
                                sisters (Aarah and Ariana) were raised in
                                Kampala, Uganda.
                            </p>
                            <p className="mb-6">
                                Growing up, Drake showed an early interest in
                                computers and technology. His parents recognized
                                his potential and encouraged his curiosity. At a
                                young age, he started experimenting with coding
                                and developed a passion for software
                                development.
                            </p>
                            <h3 className="text-xl">Software Development</h3>
                            <h4 className="text-lg mb-2">Early Years</h4>
                            <p className="mb-6">
                                Drake began using computers and writing software
                                in high school with proficiency in Python, which
                                introduced him to computer programming and more
                                related skills like Web development using HTML,
                                CSS, and JavaScript, and more later as a
                                full-stack web and app programmer.
                            </p>
                            <h4 className="text-lg mb-2">Education</h4>
                            <p>
                                Despite his young age, Drake demonstrated
                                exceptional skills and a deep understanding of
                                software architecture. He is a self-taught
                                computer programmer who continuously seeks
                                knowledge and stays updated with the latest
                                industry trends.
                            </p>
                            <p className="mb-4">
                                Currently, Drake is pursuing a course in Medical
                                Laboratory Technology at the Indian Institute of
                                Health and Allied Sciences. His diverse
                                educational background reflects his commitment
                                to continuous learning and exploring various
                                facets of technology.
                            </p>
                            <h2 className="text-2xl mb-2">
                                Founding Redo Developers Inc.
                            </h2>
                            <hr className="h-px border-t border-gray-300 mb-2" />
                            <p>
                                In 2021, at the age of 17, Drake founded Redo
                                Developers Inc. fueled by his vision to reshape
                                the digital landscape through innovative
                                software solutions. His leadership and
                                commitment to excellence have been instrumental
                                in the company&apos;s success, pushing
                                boundaries and creating impactful software
                                across industries.
                            </p>
                            {/* Add more relevant sections as needed */}
                        </div>
                    </div>
                </div>
            </section>
        </Seo>
    );
};

export default FounderPage;
