import React from "react";
import { MdDashboard } from "react-icons/md";
import { BsFillInboxesFill } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";
import { RiBillFill } from "react-icons/ri";
import { FaWeightHanging } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdGroups } from "react-icons/md";
import { BiNetworkChart } from "react-icons/bi";
import { MdOutlineSupport } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const sidebarToggle = React.createContext();
function Sidebar() {
  const [sidebar, setSidebar] = React.useState("16");
  const icons = [
    {
      name: "Dashboard",
      icon: <MdDashboard />,
      path: "home",
    },
    {
      name: "Orders",
      icon: <BsFillInboxesFill />,
      path: "orders",
    },
    {
      name: "Products",
      icon: <FaTruck />,
      path: "products",
    },
    {
      name: "Invoices",
      icon: <RiBillFill />,
      path: "invoices",
    },
    {
      name: "Customers",
      icon: <FaWeightHanging />,
      path: "customers",
    },
    {
      name: "Settings",
      icon: <BsTools />,
      path: "settings",
    },
    {
      name: "Users",
      icon: <MdGroups />,
      path: "users",
    },
    {
      name: "Reports",
      icon: <BiNetworkChart />,
      path: "reports",
    },
    {
      name: "Support",
      icon: <MdOutlineSupport />,
      path: "support",
    },
  ];
  return (
    <div
      className={`w-${sidebar} h-max-screen bg-skin-fill flex justify-center border-r border-base-dark sm:hidden`}>
      <div className="fixed">
        <sidebarToggle.Provider value={{ sidebar, setSidebar }}>
          <div className="flex flex-col items-start justify-around  h-[100vh]">
            <div
              className="flex active:animate-bounce transition ease-in-out delay-150"
              onClick={() => {
                if (sidebar === "16") {
                  setSidebar("60");
                } else {
                  setSidebar("16");
                }
              }}>
              <HiMenuAlt2 className="text-[25px] text-white mb-8 cursor-pointer" />
              <h3
                className={
                  sidebar === "16"
                    ? "hidden"
                    : "text-xl ml-2 font-sans text-skin-muted"
                }>
                Menu
              </h3>
            </div>
            <div>
              {icons.map((icon, idx) => {
                return (
                  <Icon
                    key={idx}
                    icon={icon.icon}
                    path={icon.path}
                    name={icon.name}
                  />
                );
              })}
            </div>
            <div className="flex-col items-center">
              <Icon name="Logout" icon={<RiLogoutCircleLine />} />
            </div>
          </div>
        </sidebarToggle.Provider>
      </div>
    </div>
  );
}

export default Sidebar;
const Icon = (props) => {
  const { sidebar } = React.useContext(sidebarToggle);
  return (
    <div className="">
      <NavLink
        to={`${props.path}`}
        className={({ isActive }) =>
          isActive ? "text-white" : "text-skin-muted"
        }>
        <div className="flex justify-left items-center text-[25px] text-inherit mb-8 cursor-pointer active:animate-bounce">
          {props.icon}
          <h3 className={sidebar === "16" ? "hidden" : "text-xl ml-2"}>
            {props.name}
          </h3>
        </div>
      </NavLink>
    </div>
  );
};
