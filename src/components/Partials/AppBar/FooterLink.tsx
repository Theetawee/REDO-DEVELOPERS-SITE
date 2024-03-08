import LinkTag from "../LinkTag"

const FooterLink = ({label, path}:{label:string, path:string}) => {
  return (
      <div>
      <LinkTag to={path} className="text-gray-600 hover:text-primary-500 hover:underline font-medium" label={ label} />
    </div>
  )
}

export default FooterLink
