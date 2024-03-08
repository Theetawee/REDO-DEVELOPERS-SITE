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
      <button onClick={() => handleClick(label)} className={className}>
          <Link to={to}>{label }</Link>
      
    </button>
  );
};

export default LinkTag;
