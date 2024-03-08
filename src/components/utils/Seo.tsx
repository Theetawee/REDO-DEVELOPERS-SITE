import { Helmet } from "react-helmet-async";
import ReactGA from "react-ga";
import { useEffect } from "react";


interface Props {
    children: React.ReactNode;
    title: string;
    description: string;
}

const Seo = ({ children, title, description }: Props) => {

    useEffect(() => {
        ReactGA.pageview(window.location.href);
        },[])


    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>

            {children}
        </>
    );
};

export default Seo;
