import React from 'react'
import banner from '../../assets/banner.jpg'
import Button from '../../Components/Button'
import person from '../../assets/person.webp'
import Card from '../../Components/Card'
import robot from '../../assets/roboot.webp'
import dog from '../../assets/dog.webp'
import people from '../../assets/people.webp'
import hand from '../../assets/hand.webp'
import wall from '../../assets/wall.webp'
import hand2 from '../../assets/hand2.webp'
import locker from '../../assets/locker.webp'
import keyboard from '../../assets/keyboard.webp'


const Home = () => {
    return (
        <div className='bg-[#F6F1EB]' >
            <img src={banner} alt="banner" className='h-[50vh] lg:h-[75vh] md:h-[65vh] w-full' />
            <div className='px-[1rem] py-[2rem] lg:px-[20vw] lg:py-[2rem] md:px-[20vw] md:py-[2rem]'>
                <h1 className='text-center font-bold text-4xl text-lblack font-courier tracking-widest'>Welcome to Ethereum</h1>
                <p className='text-center text-lblack text-lg font-courier pt-5 pb-3'>
                    Ethereum is the community-run technology powering the cryptocurrency ether (ETH) and thousands of decentralized applications.
                </p>
                <div className='flex item-center justify-center'>
                    <Button text={"Explore Ethereum"} />
                </div>
            </div>

            <div className='flex items-center justify-center flex-wrap bg-[#e2dcd5] '>
                <div className='px-8 mt-4 md:px-28 lg:px-28 lg:w-1/2 md:w-1/2 '>
                    <h1 className=' font-bold text-2xl text-lblack font-courier tracking-widest'>Get Started</h1>
                    <p className=' text-lblack text-lg font-courier pt-5  '>
                        ethereum.org is your portal into the world of Ethereum. The tech is new and ever-evolving  it helps to have a guide. Here's what we recommend you do if you want to dive in.
                    </p>
                </div>
                <div className='w-full lg:w-1/2 md:w-1/2 '>
                    <img src={person} alt="person" className='' />

                </div>
            </div>

            <div className='flex items-center justify-between px-10 py-10 flex-wrap border-b-2 border-white'>
                <div className='w-full lg:w-[49%] md:w-[49%] '>
                    <Card banner={robot} title={"Get Started"} description={"A wallet lets you connect to Ethereum and manage your funds."} />
                </div>
                <div className='w-full lg:w-[49%] md:w-[49%]'>
                    <Card banner={people} title={"Get ETH"} description={"Eth is the currency of Ethereum - you can use it in applications."} />
                </div>
                <div className='w-full lg:w-[49%] md:w-[49%]'>
                    <Card banner={dog} title={"Use a dapp"} description={"Dapps are applications powered by Ethereum. See what you can do."} />
                </div>
                <div className='w-full lg:w-[49%] md:w-[49%]'>
                    <Card banner={hand} title={"Start building"} description={"If you want to start coding with Ethereum, we have documentation, tutorials, and more ."} />
                </div>
            </div>

            <div className='py-20 border-b-2 border-white flex items-center px-10 bg-[#e2dcd5] flex-wrap'>
                <div className='lg:w-1/2 md:w-1/2'>
                    <img src={wall} alt="wall" />
                </div>
                <div className='w-full lg:w-1/2 md:w1/2 md:px-20 lg:px-20  '>
                    <h1 className=' font-bold text-2xl text-lblack font-courier tracking-widest'>What is Ethereum?</h1>
                    <p className=' text-lblack text-lg font-courier pt-2 pb-5  '>
                        Ethereum is a technology that's home to digital money, global payments, and applications. The community has built a booming digital economy, bold new ways for creators to earn online, and so much more. It's open to everyone, wherever you are in the world – all you need is the internet.
                    </p>
                    <div className='flex items-center flex-wrap '>
                        <div className='pt-2 pr-2 pb-2'>
                            <Button text={"What is Ethereum?"} />
                        </div>
                        <div className='pt-2 pr-2 pb-2'>
                            <Button text={"More on digital money"} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-20 border-b-2 border-white flex items-center justify-center flex-wrap px-10'>

                <div className='lg:w-1/2 md:w-1/2 md:px-20 lg:px-20 '>
                    <h1 className=' font-bold text-2xl text-lblack font-courier tracking-widest'>A fairer financial system</h1>
                    <p className=' text-lblack text-lg font-courier pt-2 pb-5  '>
                        Today, billions of people can’t open bank accounts, others have their payments blocked. Ethereum's decentralized finance (DeFi) system never sleeps or discriminates. With just an internet connection, you can send, receive, borrow, earn interest, and even stream funds anywhere in the world.
                    </p>
                    <div className='w-32 lg:w-52 md:w-52'>
                        <Button text={"Explore Defi"} />
                    </div>
                </div>
                <div className='lg:w-1/2 md:w-1/2'>
                    <img src={hand2} alt="hand ethereum" />
                </div>
            </div>

            <div className='py-20 border-b-2 border-white flex items-center justify-center flex-wrap px-10 bg-[#dbd1c5]'>
                <div className='w-full lg:w-1/2 md:w-1/2'>
                    <img src={locker} alt="locekr" />
                </div>
                <div className='lg:w-1/2 md:2-1/2 md:px-20 lg:px-20 '>
                    <h1 className=' font-bold text-2xl text-lblack font-courier tracking-widest'>The internet of assets</h1>
                    <p className=' text-lblack text-lg font-courier pt-2 pb-5  '>
                        Ethereum isn't just for digital money. Anything you can own can be represented, traded and put to use as non-fungible tokens (NFTs). You can tokenise your art and get royalties automatically every time it's re-sold. Or use a token for something you own to take out a loan. The possibilities are growing all the time.
                    </p>
                    <div className='flex items-center '>
                        <div className=''>
                            <Button text={"More on NFTs"} />
                        </div>

                    </div>
                </div>
            </div>

            <div className='py-20 border-b-2 border-white flex items-center justify-center flex-wrap px-10'>

                <div className='lg:w-1/2 md:w-1/2 md:px-20 lg:px-20 '>
                    <h1 className=' font-bold text-2xl text-lblack font-courier tracking-widest'>An open internet</h1>
                    <p className=' text-lblack text-lg font-courier pt-2 pb-5  '>
                        Today, we gain access to 'free' internet services by giving up control of our personal data. Ethereum services are open by default – you just need a wallet. These are free and easy to set up, controlled by you, and work without any personal info.
                    </p>
                    <div className='flex items-center flex-wrap '>
                        <div className='pt-2 pr-2 pb-2 '>
                            <Button text={"More on NFTs"} />
                        </div>
                        <div className='pt-2 pr-2 pb-2 '>

                            <Button text={"Explore Defi"} />
                        </div>

                    </div>

                </div>
                <div className='w-full lg:w-1/2 md:w-1/2'>
                    <img src={keyboard} alt="keyboard" />
                </div>
            </div>
        </div>
    )
}

export default Home
