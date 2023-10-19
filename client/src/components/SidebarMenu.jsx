import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setsidebar } from '../redux/menuSlice'

const SidebarMenu = (props) => {
    const dispatch = useDispatch()
    return (
        <li onClick={() => dispatch(setsidebar())}>
            <Link to={props.link}
                className="flex gap-2 items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
                {props.icon}
                <span className="font-inter ml-3 font-medium text-[#384b42] dark:text-[#e5f1e2]">{props.label}</span>
            </Link>
        </li>
    )
}

export default SidebarMenu