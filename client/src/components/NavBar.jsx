/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
    Tooltip,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Typography,
} from "@material-tailwind/react";

import LOGOWHITE from '../assets/zoo feed-03.png'
import { setsidebar } from '../redux/menuSlice'
import { logout } from '../redux/authSlice'

const NavBar = ({ menuRef }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user, isLogin } = useSelector((state) => state.auth)
    const [theme, setTheme] = useState("light")

    const logoutHandler = () => {
        dispatch(logout())
    }

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }


    useEffect(() => {
        if (!isLogin) {
            navigate('/login')
        }
    }, [isLogin])

    return (
        <header className={`bg-[#019267] z-50 fixed top-0 flex flex-wrap items-center justify-between p-2 h-20 w-full md:px-10 lg:h-24 dark:bg-blue-gray-900 ${!isLogin && 'hidden'}`}>
            <div
                onClick={() => dispatch(setsidebar())}
                ref={menuRef}
                className='static md:hidden'
            >
                <FiMenu color='white' size={'2em'} />
            </div>
            <Link to='/'>
                <img src={LOGOWHITE} alt="Logo" className='w-12 md:w-20' />
            </Link>
            <div className="flex items-center">
                {/* Dark mode button */}
                <Tooltip
                    className='z-50 p-3'
                    content={`${theme === 'light' ? 'Dark Mode' : 'Light Mode'}`}
                >
                    <div onClick={handleThemeSwitch} className='hover:bg-slate-700 rounded-full p-2 cursor-pointer mr-7 dark:hover:bg-slate-700 h-8 w-8 md:flex justify-center items-center hidden md:static'>
                        {
                            theme === 'light'
                                ? <FaMoon className='fill-slate-200' />
                                : <FaSun color='#9bb0a5' />
                        }
                    </div>
                </Tooltip>
                <Menu>
                    <MenuHandler>
                        <Avatar
                            variant="circular"
                            alt="Profile"
                            className="cursor-pointer w-12"
                            src={`https://zoofeed-api-gamma.vercel.app/${user.imageUrl}`}
                        />
                    </MenuHandler>
                    <MenuList>
                        <MenuItem className="flex items-center gap-2">
                            <Link to='profile'>
                                <Typography variant="small" className="font-normal">
                                    My Profile
                                </Typography>
                            </Link>
                        </MenuItem>
                        <MenuItem className="flex items-center gap-2">
                            <Link to='profile/animals-cares'>
                                <Typography variant="small" className="font-normal">
                                    Animal Carer
                                </Typography>
                            </Link>
                        </MenuItem>
                        <hr className="my-2 border-blue-gray-50" />
                        <MenuItem className="flex items-center gap-2 ">
                            <Typography onClick={() => logoutHandler()} variant="small" className="font-normal">
                                Sign Out
                            </Typography>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </header>
    )
}

export default NavBar