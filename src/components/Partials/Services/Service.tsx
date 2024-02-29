const Service = ({ name, onclick, label, service }: { service: string, name: string, onclick: (service: string) => void, label: string }) => {




    return (
        <li className={`mb-4 ${service === label ? 'text-primary-500' : ''} text-lg`}>
            <button onClick={()=>onclick(label)}>{name}</button>
        </li>
    );
};

export default Service;
