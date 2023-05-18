import React from 'react'
import { Link } from 'react-router-dom'

const SidebarMenu = (props) => {
    return (
        <li>
            <Link to={props.link}
                className="flex gap-2 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            >
                {props.icon}
                <span className="ml-3 font-medium">{props.label}</span>
            </Link>
        </li>
    )
}

export default SidebarMenu