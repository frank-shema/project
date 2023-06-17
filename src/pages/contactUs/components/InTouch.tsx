// import React from 'react'
import { BsDiscord, BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs"
const InTouch = () => {
        return (
                <div className='text-center pt-[12px] md:pt-[25px] lg:pt-[50px]'>
                        <div className='mx-auto w-fit px-3 md:px-7  rounded-full border-white border-2 bg-gradient-to-r from-[#64ebf366] to-[#00a3ff9e] backdrop-blur-xl shadow-lg md:text-[36px] font-bold' >Contact</div>
                        <div className="block md:flex flex-row gap-20 mt-[9.5px] justify-center  md:mt-[19.5px] lg:mt-[39px] px-12 md:px-24 lg:px-48">
                                <div className='w-[100%] md:w-[40%] my-3 text-center '>
                                        <p className='bg-gradient text-[16px] md:text-[32px] lg:text-[64px]'>Get in Touch</p>
                                        <p className='text-[12px] md:text-[16px] lg:text-[18px]'>Feel free to contact us for further assistance during our business hours.</p>
                                        <div className="flex flex-row gap-4 items-center  my-2">
                                                <div className='bg-gray-800 w-fit h-fit rounded-full'>
                                                        <img src="/images/time.png" alt="" />
                                                </div>
                                                <div className='flex flex-col items-start'>
                                                        <p className='text-[10px] md:text-[14px] lg:text-[18px]'>Hours</p>
                                                        <p className='text-[10px] md:text-[14px] lg:text-[18px]'>24/5</p>
                                                </div>
                                        </div>
                                        <div className="flex flex-row gap-4 items-center" my-2>
                                                <div className='bg-gray-800 w-fit h-fit rounded-full'>
                                                        <img src="/images/time.png" alt="" />
                                                </div>
                                                <div className='flex flex-col items-start'>
                                                        <p className='text-[10px] md:text-[14px] lg:text-[18px]'>Email</p>
                                                        <p className='text-[10px] md:text-[14px] lg:text-[18px]'>support@oxtradefunding.com</p>
                                                </div>
                                        </div>
                                        <div className='w-fit  text-white flex flex-row items-center mx-auto my-2 gap-3 px-3 md:px-7  rounded-full border-white border-2 bg-gradient-to-r from-[#64ebf366] to-[#00a3ff9e] backdrop-blur-xl shadow-lg py-2'>
                                                <BsTwitter />
                                                <BsInstagram />
                                                <BsFacebook />
                                                <BsDiscord />
                                        </div>
                                </div>
                                <div className="md:w-[40%] my-3 text-center">
                                        <p className="font-bold text-xs lg:text-xl text-black">Contact Us</p>
                                        <form className="bg-white rounded-b-[22px] px-6 pt-1 text-left md:pt-3 pb-4 md:pb-9">
                                                <div className='flex flex-row gap-3 '>
                                                        <div className="my-1 md:my-3 w-[100%]">
                                                                <label htmlFor="" className="text-[10px] md:text-xs lg:text-base">Your name</label><br />
                                                                <input type="text" className="bg-[#096fff1a] rounded-[4px] w-full py-2 px-3 text-[10px] md:text-xs lg:text-base" placeholder='Your name' />
                                                        </div>
                                                        <div className="my-1 md:my-3 w-[100%]">
                                                                <label htmlFor="" className="text-[10px] md:text-xs lg:text-base">Subject</label><br />
                                                                <input type="text" className="bg-[#096fff1a] rounded-[4px] w-full py-2 px-3 text-[10px] md:text-xs lg:text-base" placeholder='Subject' />
                                                        </div>
                                                </div>
                                                <div className="my-1 md:my-3">
                                                        <label htmlFor="" className="text-[10px] md:text-xs lg:text-base">Your Email</label><br />
                                                        <input type="text" className="bg-[#096fff1a] rounded-[4px]  w-full  py-2 px-3 text-[10px] md:text-xs lg:text-base" placeholder='Your Email' />
                                                </div>
                                                <div className="my-1 md:my-3">
                                                        <label htmlFor="" className="text-[10px] md:text-xs lg:text-base">Your message</label><br />
                                                        <textarea className="bg-[#096fff1a] rounded-[4px]  w-full py-2 px-3 text-[10px] md:text-xs lg:text-base h-[100px]" placeholder='Enter your message'></textarea>
                                                </div>
                                        </form>
                                </div>
                        </div>
                </div>
        )
}

export default InTouch