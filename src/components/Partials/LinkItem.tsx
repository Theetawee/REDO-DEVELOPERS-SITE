import { ReactNode } from "react";
import ReactGA from "react-ga";
import { Link, useNavigate } from "react-router-dom";

const LinkItem = ({
  label,
    className,
  children,
  to,
}: {
        children: ReactNode;
        label: string;
  className?: string;
  to: string;
}) => {
  const navigate = useNavigate();
  const handleClick = (label: string) => {
    ReactGA.event({
      label: label,
      action: "click",
      value: 0,
      category: "Navigation",
    });
    navigate(to);
  };

  return (
    <button
      onClick={() => handleClick(label)}
      className="outline-none border-0"
    >
      <Link to={to} className={className}>
        {children}
      </Link>
    </button>
  );
};

export default LinkItem;
