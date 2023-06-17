
import Marquee from "react-fast-marquee"
import TradingFeatures from "./TradingFeatures"
import clsx from "clsx"

const TradingJourney = () => {
        const words = [
                {
                        body: "Hold Over Weekends ",
                        color: 1
                }, {
                        body: " Low Spreads ",
                        color: 0
                }, {
                        body: " Industry Leading Dashboard ",
                        color: 1
                }, {
                        body: " Scale Up To $600,000 ",
                        color: 0
                }, {
                        body: " Unlimited Trading Days ",
                        color: 0
                }, {
                        body: " No Consistency Rules ",
                        color: 1
                }, {
                        body: " 80% Profit Split ",
                        color: 0
                }, {
                        body: " Bi-Weekly Payouts ",
                        color: 1
                }
        ]
        return (
                <div className="pt-2.5 md:pt-5 lg:pt-10">
                        <Marquee autoFill>
                                {words.map((word) => {
                                        return <p className={clsx(`
                                        max-h-6 
                                        font-bold
                                        text-[10px]
                                        md:text-[14px]
                                        lg:text-[18px]
                                        min-w-fit`,
                                                word.color === 0 ? "text-[#306FF5]" : "text-[#101828]")
                                        }>&nbsp;{word.body}&nbsp;</p>
                                })}
                        </Marquee>
                        <Marquee autoFill delay={10}>
                                {words.map((word) => {
                                        return <p className={clsx(`
                                        max-h-6 
                                        font-bold
                                        text-[10px]
                                        md:text-[14px]
                                        lg:text-[18px]
                                        min-w-fit`,
                                                word.color === 0 ? "text-[#306FF5]" : "text-[#101828]")
                                        }>&nbsp;{word.body}&nbsp;</p>
                                })}
                        </Marquee>
                        <div className="text-center">
                                <p className="mt-3 md:mt-6 lg:mt-12 text-[#101828] font-bold text-[15px] md:text-[22px] lg:text-[44px]">YOUR <span>PROFESSIONAL TRADING JOURNEY</span> STARTS HERE</p>
                                <div className="px-7 md:px-14 lg:px-28 relative">
                                        <img src="/images/iphone.png" alt="" className="hidden md:block md:w-[30%] lg:w-fit absolute top-0 left-[35%]" />
                                        <div className="flex flex-row justify-between  gap-3 sm:gap-10">
                                                <TradingFeatures body="You don't require substantial personal funding capital; once you demonstrate your potential to become an Ox Funded Trader, we will handle the funding on your behalf." label="Professional Advantages" number={1} />
                                                <TradingFeatures body="You can retain up to 80% of your earnings, while we assume full responsibility for any potential risks involved." label="Risk-Free Trading" number={2} />
                                        </div>
                                        <div className="flex flex-row justify-between gap-3 sm:gap-10 mt-12 md:mt-24 lg:mt-52">
                                                <TradingFeatures body="Congratulations on becoming an Ox Funded Trader! With us, you'll receive your certificate of achievement and a funded account in less than 24 hours, without any delays." label="After Passing" number={3} />
                                                <TradingFeatures body="Enhance your trading skills with our flexible approach!" label="Trade Your Terms" number={4} />
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default TradingJourney