import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
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

const SideBar = ({ sidebarRef }) => {
  const { isLogin } = useSelector((state) => state.auth)
  const { isSidebarOpen } = useSelector((state) => state.menu)
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
    <aside ref={sidebarRef} className={`fixed top-20 lg:top-24 left-0 z-50 w-64 h-full transition-transform -translate-x-full md:translate-x-0 ${!isLogin && 'hidden'} ${isSidebarOpen && 'translate-x-0'}`}>
      <div className="h-full px-3 overflow-y-auto bg-gray-100 dark:bg-gray-800">
        <ul className="mt-3 space-y-2 font-medium">
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
  );
};

export default SideBar;
