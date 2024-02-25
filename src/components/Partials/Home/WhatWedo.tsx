import Web from "../../../assets/web.png";
import App from "../../../assets/app.png";
import Cons from "../../../assets/cons.png";
import Card from "./Card";
const WhatWedo = () => {
    return (
        <div className="px-4 py-8">
            <h2 className="text-3xl font-medium text-gray-800 text-center mb-6">
                What We Do...
            </h2>

            <p className="text-lg text-gray-700 mb-8 text-center">
                We specialize in developing software solutions for individuals,
                startups, and enterprises. Whether you're looking for a simple
                web app, a mobile application, or enterprise-level software,
                we're your go-to partner for all your software needs. Our
                products are built to scale and efficiency, ensuring that your
                business stays ahead in today's competitive landscape.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card
                    label="Web Development"
                    icon={Web}
                    description="We specialize in creating custom, responsive websites
                        tailored to your needs. From simple landing pages to
                        complex web applications, we've got you covered."
                />
                <Card
                    label="App Development"
                    icon={App}
                    description="Our team builds native and cross-platform mobile
                        applications for iOS and Android platforms. Let us turn
                        your app ideas into reality."
                />
                <Card
                    label="Consulting Services"
                    icon={Cons}
                    description="Need expert advice on technology strategy, architecture,
                        or project management? Our consultants are here to help
                        you navigate the ever-changing landscape of technology.
                    "
                />
            </div>
        </div>
    );
};

export default WhatWedo;
