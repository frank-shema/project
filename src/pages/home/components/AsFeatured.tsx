// import React from 'react'
import MarketWatch from '../../../assets/svg/MarketWatch'
import TheWall from '../../../assets/svg/TheWall'
import Bloomberg from '../../../assets/svg/Bloomberg'
import "../../../index.css"

const AsFeatured = () => {
        const keyfeatures =[
                {
                        title:"195+",
                        body:"Countries Covered"
                },{
                        title:"7hrs",
                        body:"Avg. Payout Time"
                },{
                        title:"1500+",
                        body:"Traders Worldwide"
                }
        ]
        const KeyFeature = ({
                title,
                body
        }: {
                title: string,
                body: string
        }) => {
                return (
                        <div className="shadow-[0_4px_16px_2px_rgba(0,0,0,0.1)] px-[2%] py-[2%] ">
                                <p className="font-bold bold  text-xl  md:text-4xl bg-gradient">{title}</p>
                                <p className='text-sm md:text-base'>{body}</p>
                        </div>
                )
        }
        return (
                <div className="px-[5%] text-center pt-5 lg:pt-9 pb-5 md:pb-10 lg:pb-20">
                        <p className="text-[#101828] font-bold text-base md:text-lg lg:text-4xl">AS FEATURED IN</p>
                        <div className="flex flex-row justify-around mt-2  md:mt-4  lg:mt-8 mb-7 md:mb-14 lg:mb-28">
                                <MarketWatch />
                                <TheWall />
                                <Bloomberg />
                        </div>
                        <p className="text-[#101828] font-bold text-xl md:text-2xl lg:text-4xl">Our Funds , <span>Empowering Traders! </span></p>
                        <div className="flex flex-row justify-around mt-4 md:mt-8 lg:mt-16 gap-2">
                                {keyfeatures.map((feature,index) =>{
                                        return <KeyFeature title={feature.title} key={index} body={feature.body} />
                                })}
                        </div>
                </div>
        )
}

export default AsFeatured