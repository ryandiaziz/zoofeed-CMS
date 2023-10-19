import React from 'react'

const MainContainer = ({ children }) => {
    return (
        <main className='p-4 mt-20 lg:mt-24 ml-0 md:ml-64 h-min w-full'>
            {children}
        </main>
    )
}

export default MainContainer