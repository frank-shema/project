import clsx from 'clsx'
import React from 'react'
import Marquee from 'react-fast-marquee'

const JourneySlideshow = ({num}:{num:number}) => {
             
            
        const words=[
                {
                        body:"Hold Over Weekends ",
                        color:1
                },{
                        body:" Low Spreads ",
                        color:0
                },{
                        body:" Industry Leading Dashboard ",
                        color:1
                },{
                        body:" Scale Up To $600,000 ",
                        color:0
                },{
                        body:" Unlimited Trading Days ",
                        color:0
                },{
                        body:" No Consistency Rules ",
                        color:1
                },{
                        body:" 80% Profit Split ",
                        color:0
                },{
                        body:" Bi-Weekly Payouts ",
                        color:1
                }
        ]
        return (
                <Marquee autoFill>
                        {words.map((word) => {
                                return  <p className={clsx(`
                                        max-h-5 
                                        font-bold
                                        text-[12px]
                                        md:text-[10px]
                                        lg:text-[20px]
                                        min-w-fit`,
                                        word.color === 0 ? "text-[#306FF5]" : "text-[#101828]")
                                }>{word.body}</p>
                        })}
                </Marquee>
                // <div className={`relative -left-${num} flex flex-row gap-2 overflow-hidden  py-1  text-sm max-h-6 my-2`}>
                //         {words.map((word) => {
                //                 return  <p className={clsx(`
                //                         max-h-5 
                //                         font-bold
                //                         text-[12px]
                //                         md:text-[18px]
                //                         lg:text-[36px]
                //                         min-w-fit`,
                //                         word.color === 0 ? "text-[#306FF5]" : "text-[#101828]")
                //                 }>{word.body}</p>
                //         })}
                // </div>
        )
}

export default JourneySlideshow