import ReactGA from "react-ga";
import { Link, useNavigate } from "react-router-dom";

const LinkTag = ({
  label,
  className,
  to,
}: {
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
      <button onClick={() => handleClick(label)} className="outline-none border-0">
          <Link to={to} className={className}>{label }</Link>
      
    </button>
  );
};

export default LinkTag;
