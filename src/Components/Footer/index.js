import React from 'react'
import { FaGithub, FaDiscord, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IconContext } from "react-icons";

const style = {
    footerLink: "font-courier font-thin text-[#929292] cursor-pointer text-sm pb-2",
    footerHeader: "font-courier font-bold  tracking-wider pb-4",
    footerDiv:" w-[200px] my-2"
}
const Footer = () => {
    return (
        <div className='bg-white mt-20 px-16 py-10'>
            <div className='flex justify-center md:justify-between lg:justify-between items-center flex-wrap w-full'>
                <p className='font-courier'>
                    Website last updated: June 23, 2022
                </p>
                <div className='flex items-center justify-center'>
                    <IconContext.Provider value={{ color: "#696969", className: "global-class-name" }}>
                        <div className='p-2'>
                            <FaGithub size={35} />
                        </div>
                        <div className='p-2'>
                            <FaTwitter size={35} />
                        </div>
                        <div className='p-2'>
                            <FaYoutube size={35} />
                        </div>
                        <div className='p-2'>
                            <FaDiscord size={35} />
                        </div>
                    </IconContext.Provider>


                </div>
            </div>

            <div className='flex items-center justify-between flex-wrap mt-2'>
                <div className={style.footerDiv}>
                    <h1 className={style.footerHeader}>Company</h1>
                    <p className={style.footerLink}>About</p>
                    <p className={style.footerLink}>Advertise</p>
                    <p className={style.footerLink}>Contact</p>
                    <p className={style.footerLink}>Career</p>
                    <p className={style.footerLink}>Support</p>
                    <p className={style.footerLink}>Site Map</p>
                    <p className={style.footerLink}>User Agreement</p>
                    {/* <p className={style.footerLink}>Privacy Policy</p> */}


                </div>
                <div className={style.footerDiv}>
                    <h1 className={style.footerHeader}>Educate</h1>
                    <p className={style.footerLink}>Dinar Whitepaper</p>
                    <p className={style.footerLink}>Get Started</p>
                    <p className={style.footerLink}>Buy Dinar</p>
                    <p className={style.footerLink}>Sell Dinar</p>
                    <p className={style.footerLink}>Crypto Market</p>
                    <p className={style.footerLink}>Zakat 2.5 Charity</p>
                </div>
                <div className={style.footerDiv}>
                    <h1 className={style.footerHeader}>Products & Services</h1>
                    <p className={style.footerLink}>Get Started</p>
                    <p className={style.footerLink}>Wallets</p>
                    <p className={style.footerLink}>Developers</p>
                    <p className={style.footerLink}>Dinar Data</p>
                    <p className={style.footerLink}>Block Explorer</p>
                    <p className={style.footerLink}>Markets</p>
                </div>
                <div className={style.footerDiv}>
                    <h1 className={style.footerHeader}>Follow Us</h1>
                    <p className={style.footerLink}>News</p>
                    <p className={style.footerLink}>Telegram</p>
                    <p className={style.footerLink}>Youtube</p>
                    <p className={style.footerLink}>Instagram</p>
                    <p className={style.footerLink}>Twitter</p>
                    <p className={style.footerLink}>Facebook</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
