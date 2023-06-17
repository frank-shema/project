import React from 'react'

const GetFunded = () => {
        const fundingSteps = [
                {
                        img:"/images/account-type.png",
                        title:"CHOOSE YOUR ACCOUNT TYPE",
                        body:"Pick between our Phase1 of Phase2 Challenges."
                },{
                        img:"/images/passEvaluation.png",
                        title:"PASS YOUR EVALUATION",
                        body:"Take your time and proceed through each evaluation phase carefully, demonstrating your trading profits while adhering to our trading rules.",
                },{
                        img:"/images/becomeOx.png",
                        title:"BECOME AN OX FUNDED TRADER",
                        body:"Congratulations! You are a certified OX FUNDED TRADER; start enjoying 80% of profit split!"
                }
        ]
        const FundingStep = ({
                img,
                title,
                body,
                index
        }:{
                img:string,
                title:string,
                body:string,
                index:number
        }) => {
                return (
                        <div className="flex flex-row gap-3 md:gap-6 lg:gap-12 bg-white my-5 p-5 md:p-9 rounded-[20px]">
                        <img src={img} alt="" className='w-[20%] lg:w-fit ' />
                        <div className="flex flex-col items-start">
                                <p className="text-xs md:text-2xl lg:text-4xl font-bold">{`${index}. ${title}`}</p>
                                <p className="text-[10px] md:text-[15px] lg:text-xl font-400">{body}</p>
                        </div>
                </div>
                )
        }
        return (
                <div className="text-center bg-[#2a5aeb] pt-6 md:pt-12 lg:pt-24 px-7 sm:px-14 md:px-28 lg:px-56 pb-2 md:pb-4 lg:pb-8">
                        <img src="/images/logo2.png" alt="" className="mx-auto  w-[50%] md:w-fit " />
                        <p className="mt-1 md:mt-2 lg:mt-4  text-xl md:text-3xl lg:text-6xl font-bold text-white">GET FUNDED IN 3 STEPS</p>
                        {
                                fundingSteps.map((step,index) => {
                                        return <FundingStep index={index+1} img={step.img} body={step.body} title={step.title}  />
                                })
                        }
                </div>
        )
}

export default GetFunded