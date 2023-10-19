import React from 'react'

const MainContainer = ({ children }) => {
    return (
        <main className='p-4 sm:ml-64 pt-[85px] h-min border-2 border-red-500'>
            {children}
        </main>
    )
}

export default MainContainer