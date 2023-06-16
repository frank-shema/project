import React from 'react'

const BenefitsFunding = () => {
        return (
                <div className="text-center bg-[#2a5aeb] pt-6 md:pt-12 lg:pt-24 px-14 md:px-28 lg:px-56 pb-2 md:pb-4 lg:pb-8">
                        <img src="/images/logo2.png" alt="" className="mx-auto  w-[50%] md:w-fit " />
                        <p className="mt-1 md:mt-2 lg:mt-4  text-xl md:text-3xl lg:text-6xl font-bold text-white">BENEFITS OF BEING FUNDED</p>
                        <div className="flex flex-row gap-3 md:gap-6 lg:gap-12 bg-white my-5 p-5 md:p-9 rounded-[20px]">
                                <img src="/images/huge-earning-potential.png" alt="" className='w-[20%] lg:w-fit ' />
                                <div className="flex flex-col items-start">
                                        <p className="text-xs md:text-2xl lg:text-4xl font-bold">1.HUGE EARNING POTENTIAL</p>
                                        <p className="text-[10px] md:text-[15px] lg:text-xl font-400">Receive 80% of the profits you earn with us. </p>
                                </div>
                        </div>
                        <div className="flex flex-row gap-3 md:gap-6 lg:gap-12 bg-white my-5 p-5 md:p-9 rounded-[20px]">
                                <img src="/images/no-profit-targets.png" alt="" className='w-[20%] lg:w-fit ' />
                                <div className="flex flex-col items-start">
                                        <p className="text-xs md:text-2xl lg:text-4xl font-bold">2. NO PROFIT TARGETS</p>
                                        <p className="text-[10px] md:text-[15px] lg:text-xl font-400">No profit targets once you are funded! Any profit you generate in 30 days is yours!</p>
                                </div>
                        </div>
                        <div className="flex flex-row gap-3 md:gap-6 lg:gap-12 bg-white my-5 p-5 md:p-9 rounded-[20px]">
                                <img src="/images/professional-support-team.png" alt="" className='w-[20%] lg:w-fit ' />
                                <div className="flex flex-col items-start">
                                        <p className="text-xs md:text-2xl lg:text-4xl font-bold">3. PROFESSIONAL SUPPORT TEAM</p>
                                        <p className="text-[10px] md:text-[15px] lg:text-xl font-400">Our support team is readily available to assist you with any queries.</p>
                                </div>
                        </div>
                </div>
        )
}

export default BenefitsFunding