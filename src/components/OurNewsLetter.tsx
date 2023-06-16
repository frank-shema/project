const OurNewsLetter = () => {
        return (
                <div className="flex flex-col  md:flex-row bg-[#2a5aeb] pt-5 md:pt-10 lg:pt-20 px-7 md:px-14  lg:px-28 gap-10 pb-8 md:pb-16 lg:pb-36">
                        <div>
                                <p className="text-white font-bold text-[12px]  md:text-[16px] lg:text-[32px]">Subscribe to</p>
                                <p className="text-white font-bold text-[16px]  md:text-[24px] lg:text-[48px]">Our Newsletter</p>
                                <div className="flex flex-row gap-[10px]">
                                        <div className="morphism flex flex-row gap-1 bg-[] py-1 md:py-3 px-1 md:px-3 shadow-[0_4px_28px_rgba(2,92,255,0.19)] backdrop-blur-[21px] rounded-full items-center border-[2px] border-white">
                                                <img src="/images/checkhover.png" alt="" className="w-[10%]" />
                                                <p className="text-white font-bold text-[9px]  md:text-[14px]">Receive Exclusive Discounts</p>
                                        </div>
                                        <div className="morphism flex flex-row gap-1 bg-[] py-1 md:py-3 px-1 md:px-3 shadow-[0_4px_28px_rgba(2,92,255,0.19)] backdrop-blur-[21px] rounded-full items-center border-[2px] border-white">
                                                <img src="/images/checkhover.png" alt="" className="w-[10%]" />
                                                <p className="text-white font-bold text-[9px] md:text-[14px]">Receive Our Latest updates</p>
                                        </div>
                                </div>
                                <div className="mt-[7.5px] md:mt-[15px] lg:mt-[30px] relative">
                                        <input type="text" placeholder="Enter Your Email Address" className="rounded-[10px] md:rounded-[21px] py-1.5 md:py-3 lg:py-6 px-2 md:px-3.5 lg:px-7 shadow-[0_4px_28px_rgba(2,92,255,0.19)] backdrop-blur-[21px] text-white text-[14px] font-400 w-full" />
                                        <button className="absolute top-[2px] right-1  lg:right-4 lg:top-4 bg-[#000AFF] text-white py-1.5 px-1.5 md:px-3 lg:px-6 rounded-lg text-xs md:text-sm lg:text-base">SUBSCRIBE</button>
                                </div>
                        </div>
                        <div className="morphism w-[40%] shadow-[0_4px_28px_rgba(2,92,255,0.19)] backdrop-blur-[21px] rounded-[21px] border-white border-[2px] text-center py-[61px]">
                                <img src="/images/discord-text.png" alt="" className="mx-auto w-[50%] md:w-fit" />
                                <p className="text-sm md:text-base lg:text-lg font-500 text-white">Contact Us! We are here for you 24/5</p>
                                <p className="text-xs md:text-[18px] lg:text-[36px] font-bold text-white my-4 mx-4">Join Our Global Community For The Traders</p>
                                <button className="bg-white text-black py-[2.5px] md:py-[5px] lg:py-[11px] px-1 md:px-3 lg:px-6 rounded-[8px] text-xs md:text-sm lg:text-base">Join Our Discord</button>
                        </div>
                </div>
        )
}

export default OurNewsLetter