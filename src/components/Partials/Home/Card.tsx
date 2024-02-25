
const Card = ({icon,label,description}:{icon:string,label:string,description:string}) => {
  return (
      <div className="bg-white rounded-lg p-6 shadow">
          <img src={icon} alt="Icon" className="w-16 mx-auto h-16" />
          <h3 className="text-xl text-gray-700 font-semibold  mb-4">
              {label}
          </h3>
          <p className="text-gray-600">
              {description}
          </p>
      </div>
  );
}

export default Card
