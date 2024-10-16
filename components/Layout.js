import React from 'react'


const Layout = ({ children }) => {
    return (
        <div className='w-full flex flex-col relative overflow-x-hidden'>
            {children}
        </div>
    )
}

export default Layout