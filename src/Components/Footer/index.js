import React from 'react'
import { FaGithub, FaDiscord, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IconContext } from "react-icons";


const Footer = () => {
    return (
        <div>
            <div className='flex justify-center md:justify-between lg:justify-between items-center flex-wrap w-full px-16'>
                <p className='font-courier'>
                    Website last updated: June 23, 2022
                </p>
                <div className='flex items-center justify-center'>
                <IconContext.Provider value={{ color: "#696969", className: "global-class-name" }}>
                    <div className='p-2'>
                        <FaGithub size={35}  />
                    </div>
                    <div className='p-2'>
                        <FaTwitter size={35}/>
                    </div>
                    <div className='p-2'>
                        <FaYoutube size={35}/>
                    </div>
                    <div className='p-2'>
                        <FaDiscord size={35}/>
                    </div>
                    </IconContext.Provider>


                </div>
            </div>

        </div>
    )
}

export default Footer
