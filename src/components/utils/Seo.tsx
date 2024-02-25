import { Helmet } from "react-helmet-async";

interface Props {
    children: React.ReactNode;
    title: string;
    description: string;
}

const Seo = ({ children, title, description }: Props) => {
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
