import React from "react";
import { useSelector } from "react-redux";
import {
  FaStickerMule,
  FaApple,
  FaMountain,
  FaPaw,
  FaUser,
  FaChartPie,
  FaTicketAlt,
  FaCcVisa,
} from "react-icons/fa";
import SidebarMenu from "./SidebarMenu";

const SideBar = () => {
  const { isLogin } = useSelector((state) => state.auth)
  const items = [
    {
      link: '/',
      icon: <FaChartPie className="fill-[#384b42] dark:fill-[#9bb0a5]" />,
      label: 'Dashboard'
    },
    {
      link: 'animals',
      icon: <FaStickerMule className="fill-[#384b42] dark:fill-[#9bb0a5]" />,
      label: 'Animal'
    },
    {
      link: 'foods',
      icon: <FaApple className="fill-[#384b42] dark:fill-[#9bb0a5]" />,
      label: 'Food'
    },
    {
      link: 'classTypes',
      icon: <FaPaw className="fill-[#384b42] dark:fill-[#9bb0a5]" />,
      label: 'Class'
    },
    {
      link: 'habitats',
      icon: <FaMountain className="fill-[#384b42] dark:fill-[#9bb0a5]" />,
      label: 'Habitat'
    },
    {
      link: 'users',
      icon: <FaUser className="fill-[#384b42] dark:fill-[#9bb0a5]" />,
      label: 'User'
    },
    {
      link: 'transactions',
      icon: <FaCcVisa className="fill-[#384b42] dark:fill-[#9bb0a5]" />,
      label: 'Transaction'
    },
    {
      link: 'tickets',
      icon: <FaTicketAlt className="fill-[#384b42] dark:fill-[#9bb0a5]" />,
      label: 'Ticket'
    },
    {
      link: 'userTickets',
      icon: <FaTicketAlt className="fill-[#384b42] dark:fill-[#9bb0a5]" />,
      label: 'User Ticket'
    },
  ]

  return (
    <>
      <aside className={`fixed top-[64px] left-0 z-10 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-2 border-red-500 ${!isLogin && 'hidden'}`}>
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-800">
          <ul className="mt-5 space-y-2 font-medium">
            {
              items.map((item, i) => {
                return (
                  <SidebarMenu
                    key={i}
                    link={item.link}
                    icon={item.icon}
                    label={item.label}
                  />
                )
              })
            }
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
