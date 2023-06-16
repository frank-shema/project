import React from 'react'

const JourneySlideshow = () => {
             
            
        const words=[
                {
                        body:"Hold Over Weekends",
                        color:"#101828"
                },{
                        body:"Low Spreads",
                        color:"#306FF5"
                },{
                        body:"Industry Leading Dashboard ",
                        color:"#101828"
                },{
                        body:"Scale Up To $600,000 ",
                        color:"#306FF5"
                },{
                        body:"Unlimited Trading Days",
                        color:"#306FF5"
                },{
                        body:"No Consistency Rules",
                        color:"#101828"
                },{
                        body:" 80% Profit Split ",
                        color:"#306FF5"
                },{
                        body:"Bi-Weekly Payouts",
                        color:"#101828"
                }
        ]
        return (
                <div className="w-[1000vw] flex flex-row gap-2 overflow-hidden slideshow-text py-1 text-sm">
                        {words.map((word) => {
                                return  <div className={`text-[${word.color}] w-[200px] `}>{word.body}</div>
                        })}
                </div>
        )
}

export default JourneySlideshow