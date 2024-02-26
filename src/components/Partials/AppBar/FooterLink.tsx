import { Link } from "react-router-dom"

const FooterLink = ({label, path}:{label:string, path:string}) => {
  return (
      <div>
          <Link to={path} className="text-gray-600 hover:text-primary-500 hover:underline font-medium">{label}</Link>
    </div>
  )
}

export default FooterLink
