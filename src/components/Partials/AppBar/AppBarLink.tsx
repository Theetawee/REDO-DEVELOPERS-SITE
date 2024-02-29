import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { DrawerContext } from "../../../context/DrawerContext"

const AppBarLink = ({ label, path }: { label: string, path: string }) => {
  const {toggleSidebar } = useContext(DrawerContext);
  return (
    <NavLink title={label} onClick={toggleSidebar} className={"appbar-link"} to={path}>{label}</NavLink>
  )
}

export default AppBarLink
