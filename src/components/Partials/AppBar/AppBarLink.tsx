import { NavLink } from "react-router-dom"

const AppBarLink = ({label, path}:{label:string, path:string}) => {
  return (
    <NavLink to={path}>{label}</NavLink>
  )
}

export default AppBarLink
