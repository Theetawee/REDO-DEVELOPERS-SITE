import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { DrawerContext } from "../../../context/DrawerContext"

const AppBarLink = ({ label, path }: { label: string, path: string }) => {
  const { toggleSidebar,isOpen } = useContext(DrawerContext);
  const handleOnclick = () => {
    if (isOpen) {
      toggleSidebar()
    }
  }
  return (
    <NavLink title={label} onClick={handleOnclick} className={"appbar-link"} to={path}>{label}</NavLink>
  )
}

export default AppBarLink
