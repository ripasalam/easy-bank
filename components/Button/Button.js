import React from 'react'

const Button = ({ children }) => {
    return (
        <button className='rounded-full text-xl px-8 py-3 bg-gradient-to-r from-Lime-Green to-Bright-Cyan text-white hover:opacity-75'>
            {children}
        </button>
    )
}

export default Button