// import React from 'react'
import { BsDiscord, BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs"
const InTouch = () => {
        return (
                <div className='text-center pt-[12px] md:pt-[25px] lg:pt-[50px]'>
                        <div className='mx-auto w-fit px-3 md:px-7  rounded-full border-white border-2 bg-gradient-to-r from-[#64ebf366] to-[#00a3ff9e] backdrop-blur-xl shadow-lg md:text-[36px] font-bold' >Contact</div>
                        <div className="flex flex-row gap-20 mt-[9.5px] justify-center  md:mt-[19.5px] lg:mt-[39px]">
                                <div className='w-[40%] '>
                                        <p className='bg-gradient text-[16px] md:text-[32px] lg:text-[64px]'>Get in Touch</p>
                                        <p className='text-[12px] md:text-[16px] lg:text-[18px]'>Feel free to contact us for further assistance during our business hours.</p>
                                        <div className="flex flex-row gap-4">
                                                <div className='bg-gray-800 w-fit h-fit rounded-full'>
                                                        <img src="/images/time.png" alt="" />
                                                </div>
                                                <div>
                                                        <p>Hours</p>
                                                        <p>24/5</p>
                                                </div>
                                        </div>
                                        <div className="flex flex-row gap-4">
                                                <div className='bg-gray-800 w-fit h-fit rounded-full'>
                                                        <img src="/images/time.png" alt="" />
                                                </div>
                                                <div>
                                                        <p>Email</p>
                                                        <p>support@oxtradefunding.com</p>
                                                </div>
                                        </div>
                                        <div className='w-fit text-white flex flex-row items-center  px-3 md:px-7  rounded-full border-white border-2 bg-gradient-to-r from-[#64ebf366] to-[#00a3ff9e] backdrop-blur-xl shadow-lg'>
                                                <BsTwitter />
                                                <BsInstagram />
                                                <BsFacebook />
                                                <BsDiscord />
                                        </div>
                                </div>
                                <div className="md:w-[40%]">
                                        <div className="text-center bg-gradient-to-r from-[#233C68] via-[#0057FF] to-[#3AF2FF]  py-3 md:py-7 px-4 md:px-8 rounded-t-[22px]">
                                                <p className="font-bold text-xs lg:text-xl text-white">Check Spread - MT5</p>
                                        </div>
                                        <form className="bg-white rounded-b-[22px] px-6 pt-1 text-left md:pt-3 pb-4 md:pb-9">
                                                <div className="my-1 md:my-3">
                                                        <label htmlFor="">Login ID</label><br />
                                                        <input type="text" className="bg-[#096fff1a] rounded-[4px] w-full py-2 px-3" />
                                                </div>
                                                <div className="my-1 md:my-3">
                                                        <label htmlFor="">Investor Password</label><br />
                                                        <input type="text" className="bg-[#096fff1a] rounded-[4px]  w-full  py-2 px-3" />
                                                </div>
                                                <div className="my-1 md:my-3">
                                                        <label htmlFor="">Server Name</label><br />
                                                        <input type="text" className="bg-[#096fff1a] rounded-[4px]  w-full py-2 px-3" />
                                                </div>
                                        </form>
                                </div>
                        </div>
                </div>
        )
}

export default InTouch