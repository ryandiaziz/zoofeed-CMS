import React, { useState, useRef, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
    Tooltip,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Typography,
} from "@material-tailwind/react";

const NavBar = () => {
    const { user, isLogin } = useSelector((state) => state.auth)
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState("light")
    const menuRef = useRef();
    const imgRef = useRef();

    const logoutHandler = () => {
        localStorage.clear()
        navigate('/login')
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


    window.addEventListener('click', (e) => {
        if (e.target !== menuRef.current && e.target !== imgRef.current) {
            setOpen(false);
        }
    })

    return (
        <header className={`z-20 bg-[#019267] dark:bg-gray-800 sticky top-0 flex flex-wrap items-center justify-between p-4 border-2 border-red-600 w-screen ${!isLogin && 'hidden'}`}>
            <Link to='/'>
                <span className="font-inter font-bold cursor-pointer self-center text-2xl text-white whitespace-nowrap dark:text-white">Zoo Feed</span>
            </Link>
            <div className="flex items-center md:order-2">
                {/* Dark mode button */}
                <Tooltip
                    className='z-30 p-3'
                    content={`${theme === 'light' ? 'Dark Mode' : 'Light Mode'}`}
                >
                    <div onClick={handleThemeSwitch} className='hover:bg-slate-700 rounded-full p-2 cursor-pointer mr-7 dark:hover:bg-slate-700 h-8 w-8 flex justify-center items-center'>
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
                            alt="candice wu"
                            className="cursor-pointer"
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