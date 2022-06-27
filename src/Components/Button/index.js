import React from 'react'

const Button = ({text}) => {
    return (
        <div className='bg-lblack py-2 px-[1em] lg:py-3 lg:px-[3em] md:py-3 md:px-[3em] rounded-lg hover:drop-shadow-2xl hover:scale-[1.03]'>
            <p className='text-white text-center text-sm md:text-base lg:text-base font-semibold '>{text}</p>
        </div>
    )
}

export default Button
