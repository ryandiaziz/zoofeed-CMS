import React from "react";
import { useSelector } from "react-redux";
import {
    FaStickerMule,
    FaUser,
} from "react-icons/fa";
import SidebarMenu from "./SidebarMenu";

const ProfileSideBar = () => {
    const { isLogin } = useSelector((state) => state.auth)
    const items = [
        {
            label: 'User Info',
            link: 'profile',
            icon: <FaUser />
        },
        {
            label: 'Animal Carer',
            link: 'profile/animals-cares',
            icon: <FaStickerMule />
        }
    ]
    return (
        <>
            <aside
                id="default-sidebar"
                className={`fixed top-[64px] left-0 z-10 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 ${!isLogin && 'hidden'}`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-800">
                    <ul className="mt-5 space-y-2 font-medium">
                        {
                            items.map((item) => {
                                return (
                                    <SidebarMenu
                                        link={item.link}
                                        label={item.label}
                                        icon={item.icon}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default ProfileSideBar