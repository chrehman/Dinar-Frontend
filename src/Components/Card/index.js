import React from 'react'

const Card = ({banner,title,description}) => {
    return (
        <div className='bg-white w-full mb-5 hover:scale-[1.03] hover:border-[#e2dcd5] hover:border-r-4 hover:border-b-4'>
            <div className='flex items-center justify-center'>
            <img src={banner} alt="banner" className=' h-[15rem] ' />
            </div>
            <div className='px-6'>
            <h1 className=' font-bold text-2xl text-lblack font-courier tracking-widest py-5'>{title}</h1>
            <p className=' text-lblack text-lg font-courier pb-5 '>
                {description}        
            </p>
            </div>
        </div>
    )
}

export default Card
