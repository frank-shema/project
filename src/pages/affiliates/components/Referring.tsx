// import React from 'react'
import ToJoin from './ToJoin'

function Referring() {
        return (
                <div className='pt-[27px] md:pt-[45px] lg:pt-[90px] text-center bg-[#F2F4F7] pb-[22px] md:pb-[45px] lg:pb-[90px]'>
                        <p className='text-[#101828] font-bold text-[16px] md:text-[32px] lg:text-[64px]'>Earn More By <span className="bg-gradient">Referring</span></p>
                        <div className='relative h-[130vh]' >
                                <img src="/images/arrow.png" alt="" className='absolute right-[33%] top-10' />
                                <img src="/images/arrow.png" alt="" className='absolute left-[19%] bottom-[40%]' />
                                <div className="absolute right-10 bg-white w-[28%] rounded-[11px] pb-[10px] px-[9px] md:px-[19px] lg:px-[38px] pt-3 md:pb-[21px] lg:pb-[43px] md:rounded-[22px] lg:rounded-[45px]">
                                        <div className=" w-fit px-3 md:px-7  rounded-full border-white border-2 bg-gradient-to-r from-[#64ebf366] to-[#00a3ff9e] backdrop-blur-xl shadow-lg">Tier Three</div>
                                        <div className='text-center'>
                                                <p className='text-[24px] md:text-[48px] lg:text-[96px] font-bold'>12%</p>
                                                <p className='font-bold text-[12px] md:text-base lg:text-[24px]'>Commision</p>
                                        </div>
                                        <p className='text-[9px] md:text-[12px] lg:text-[16px]'>You will receive 12% commission per referral </p>
                                </div>
                                <div className="absolute right-[35vw] top-[30%] bg-white w-[28%] rounded-[11px] pb-[10px] px-[9px] md:px-[19px] lg:px-[38px] pt-3 md:pb-[21px] lg:pb-[43px] md:rounded-[22px] lg:rounded-[45px]">
                                        <div className=" w-fit px-3 md:px-7  rounded-full border-white border-2 bg-gradient-to-r from-[#64ebf366] to-[#00a3ff9e] backdrop-blur-xl shadow-lg">Tier Two</div>
                                        <div className='text-center'>
                                                <p className='text-[24px] md:text-[48px] lg:text-[96px] font-bold'>10%</p>
                                                <p className='font-bold text-[12px] md:text-base lg:text-[24px]'>Commision</p>
                                        </div>
                                        <p className='text-[9px] md:text-[12px] lg:text-[16px]'>You will receive 12% commission per referral </p>
                                </div>
                                <div className="absolute left-10 bottom-0 bg-white w-[28%] rounded-[11px] pb-[10px] px-[9px] md:px-[19px] lg:px-[38px] pt-3 md:pb-[21px] lg:pb-[43px] md:rounded-[22px] lg:rounded-[45px]">
                                        <div className=" w-fit px-3 md:px-7  rounded-full border-white border-2 bg-gradient-to-r from-[#64ebf366] to-[#00a3ff9e] backdrop-blur-xl shadow-lg">Tier One</div>
                                        <div className='text-center'>
                                                <p className='text-[24px] md:text-[48px] lg:text-[96px] font-bold'>7.5%</p>
                                                <p className='font-bold text-[12px] md:text-base lg:text-[24px]'>Commision</p>
                                        </div>
                                        <p className='text-[9px] md:text-[12px] lg:text-[16px]'>You will receive 12% commission per referral </p>
                                </div>
                        </div>
                        <p className='mt-[25px] md:mt-[50px] lg:mt-[100px] text-[24px] md:text-[48px] lg:text-[96px] text-[#101828] font-bold'>How To Join</p>
                        <div className='flex flex-row   gap-20 items-center justify-center '>
                                <div className='w-[30%] '>
                                        <ToJoin body="You don't require substantial personal funding capital; once you demonstrate your potential to become an Ox Funded Trader, we will handle the funding on your behalf." label="Professional Advantages" number={2}  />
                                        <ToJoin body="You don't require substantial personal funding capital; once you demonstrate your potential to become an Ox Funded Trader, we will handle the funding on your behalf." label="Professional Advantages" number={2} />
                                        <ToJoin body="You don't require substantial personal funding capital; once you demonstrate your potential to become an Ox Funded Trader, we will handle the funding on your behalf." label="Professional Advantages" number={2} />
                                </div>
                                <div>
                                        <img src="/images/join-pic.png" alt="" />
                                </div>
                        </div>
                </div>
        )
}

export default Referring