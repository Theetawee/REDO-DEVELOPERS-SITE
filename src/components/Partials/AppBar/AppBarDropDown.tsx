import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";

export default function AppBarDropDown() {

const handleClick = (label: string) => {
  ReactGA.event({
    label: label,
    action: "click",
    value: 0,
    category: "Navigation",
  });
};





    return (
        <div>
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button
                            className={`
                ${open ? "text-gray-700" : "text-gray-600"}
                flex items-center  outline-none`}
                        >
                            <span>Company</span>
                            <ChevronDownIcon
                                className={`${open ? "rotate-180" : ""}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-orange-300/80`}
                                aria-hidden="true"
                            />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute left-1/2 z-40 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                    <div
                                        className="p-4 "
                                        style={{ backgroundColor: "snow" }}
                                    >
                                        <div className="grid grid-cols-2 gap-4 mb-8">
                                            <Popover.Button onClick={() => handleClick("Products and services")}
                                                className={
                                                    "flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                                                }
                                                as={Link}
                                                to="/products"
                                            >
                                                <span className="flex items-center">
                                                    <span className="text-sm font-medium text-gray-900">
                                                        Services and Products
                                                    </span>
                                                </span>
                                                <span className="block text-sm text-gray-500">
                                                    Discover the diverse range
                                                    of innovative products and
                                                    expert services offered by
                                                    Redo Developers Inc
                                                </span>
                                            </Popover.Button>
                                            <Popover.Button onClick={() => handleClick("Company Profiles")} as={Link}
                                                to="/profiles"
                                                className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                                            >
                                                <span className="flex items-center">
                                                    <span className="text-sm font-medium text-gray-900">
                                                        Company Profiles
                                                    </span>
                                                </span>
                                                <span className="block text-sm text-gray-500">
                                                    Discover the leaders and
                                                    team players ensuring
                                                    quality of service and
                                                    growth of Redo Developers
                                                    Inc.
                                                </span>
                                            </Popover.Button>
                                        </div>
                                        <Popover.Button onClick={() => handleClick("About us")} as={Link}
                                            to="/about"
                                            className="flow-root  rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                                        >
                                            <span className="flex items-center">
                                                <span className="text-sm font-medium text-gray-900">
                                                    About Redo Developers Inc.
                                                </span>
                                            </span>
                                            <span className="block text-sm text-gray-500">
                                                Learn more about the roots and
                                                visions of Redo Developers Inc.
                                            </span>
                                        </Popover.Button>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    );
}
