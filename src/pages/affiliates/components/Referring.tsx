import React from 'react'
import ToJoin from './ToJoin'
import LogoTBody from '../../../components/TradingFeatures'

function Referring() {
        return (
                <div className='pt-[27px] md:pt-[45px] lg:pt-[90px] text-center bg-[#F2F4F7] pb-[22px] md:pb-[45px] lg:pb-[90px]'>
                        <p className='text-[#101828] font-bold text-[16px] md:text-[32px] lg:text-[64px]'>Earn More By <span className="bg-gradient">Referring</span></p>
                        <div className='relative h-[60vh] sm:h-[80vh] md:h-[100vh] lg:h-[130vh]' >
                                <img src="/images/arrow.png" alt="" className='absolute w-[14%] left-[48%] top-[10%]' />
                                <img src="/images/arrow.png" alt="" className='absolute w-[14%] left-[13%] top-[45%]' />
                                <div className="absolute left-[66%] bg-white w-[28%] rounded-[11px] pb-[10px] px-[9px] md:px-[19px] lg:px-[38px] pt-3 md:pb-[21px] lg:pb-[43px] md:rounded-[22px] lg:rounded-[45px]">
                                        <div className=" w-fit px-3 md:px-7  rounded-full border-white border-2 bg-gradient-to-r from-[#64ebf366] to-[#00a3ff9e] backdrop-blur-xl shadow-lg font-bold text-[#101828] text-[12px] md:text-[18px] lg:text-[36px] ">Tier Three</div>
                                        <div className='text-center'>
                                                <p className='text-[24px] md:text-[48px] lg:text-[96px] font-bold'>12%</p>
                                                <p className='font-bold text-[12px] md:text-base lg:text-[24px]'>Commision</p>
                                        </div>
                                        <p className='text-[9px] md:text-[12px] lg:text-[16px]'>You will receive 12% commission per referral </p>
                                </div>
                                <div className="absolute left-[35%] top-[33%] bg-white w-[28%] rounded-[11px] pb-[10px] px-[9px] md:px-[19px] lg:px-[38px] pt-3 md:pb-[21px] lg:pb-[43px] md:rounded-[22px] lg:rounded-[45px]">
                                        <div className=" w-fit px-3 md:px-7  rounded-full border-white border-2 bg-gradient-to-r from-[#64ebf366] to-[#00a3ff9e] backdrop-blur-xl shadow-lg font-bold text-[#101828] text-[12px] md:text-[18px] lg:text-[36px] ">Tier Two</div>
                                        <div className='text-center'>
                                                <p className='text-[24px] md:text-[48px] lg:text-[96px] font-bold'>10%</p>
                                                <p className='font-bold text-[12px] md:text-base lg:text-[24px]'>Commision</p>
                                        </div>
                                        <p className='text-[9px] md:text-[12px] lg:text-[16px]'>You will receive 12% commission per referral </p>
                                </div>
                                <div className="absolute left-[4%] top-[66%] bg-white w-[28%] rounded-[11px] pb-[10px] px-[9px] md:px-[19px] lg:px-[38px] pt-3 md:pb-[21px] lg:pb-[43px] md:rounded-[22px] lg:rounded-[45px]">
                                        <div className=" w-fit px-3 md:px-7  rounded-full border-white border-2 bg-gradient-to-r from-[#64ebf366] to-[#00a3ff9e] backdrop-blur-xl shadow-lg font-bold text-[#101828] text-[12px] md:text-[18px] lg:text-[36px] ">Tier One</div>
                                        <div className='text-center'>
                                                <p className='text-[24px] md:text-[48px] lg:text-[96px] font-bold'>7.5%</p>
                                                <p className='font-bold text-[12px] md:text-base lg:text-[24px]'>Commision</p>
                                        </div>
                                        <p className='text-[9px] md:text-[12px] lg:text-[16px]'>You will receive 12% commission per referral </p>
                                </div>
                        </div>
                        <p className='mt-[25px] md:mt-[50px] lg:mt-[100px] text-[24px] md:text-[48px] lg:text-[96px] text-[#101828] font-bold'>How To Join</p>
                        <div className='flex flex-row mx-5   gap-20 items-center justify-center '>
                                <div className='w-[50%] md:w-[40%] lg:w-[30%] '>
                                        <ToJoin body="Click the signup button and get started with creating an account!" label="Sign Up For Free" number={1}  />
                                        <ToJoin body="In your trader’s dashboard you will see a tab that says, “Affiliates” click on this to see your personal affiliate link." label="Go To Affiliates" number={2} />
                                        <ToJoin body="Our affiliate system is instant approval and you will be able to track in real-time your earnings and those who have paid via using your affiliate referral link!" label="Start Earning" number={3} />
                                </div>
                                <div>
                                        <img src="/images/join-pic.png" alt=""  className='w-[50%]'/>
                                </div>
                        </div>
                </div>
        )
}

export default Referring