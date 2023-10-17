import React from 'react'

import Image from '../../../assets/zoofeed-bg.png'
import Logo from '../../../assets/zoo_feed-01.png'

const BodyAuthPage = ({ children }) => {
    return (
        <main className='flex lg:max-w-[1536px] m-auto h-screen overflow-y-auto'>
            <aside className='md:w-2/3 h-full md:relative w-full absolute'>
                <div className='bg-black w-full h-full opacity-10 z-40 absolute'></div>
                <img
                    src={Image}
                    alt="Background"
                    className='h-full object-left-bottom object-cover'
                />
            </aside>
            <section className="my-10 md:my-0 h-min mx-auto w-80 md:h-screen flex justify-center items-center z-50 bg-transparent lg:w-1/3 md:w-2/3 md:bg-white">
                <div className="w-full p-3 space-y-4 bg-white rounded-xl py-5">
                    <img src={Logo} alt="Logo" className='w-28 m-auto' />
                    <h1 className="font-inter text-xl font-semibold leading-tight tracking-tight text-blue-gray-900 md:text-2xl">
                        Sign in to your account
                    </h1>
                    {children}
                </div>
            </section>
        </main>
    )
}

export default BodyAuthPage