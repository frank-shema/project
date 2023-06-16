
import JourneySlideshow from "./JourneySlideshow"
import TradingFeatures from "./TradingFeatures"

const TradingJourney = () => {
        return (
                <div className="pt-2.5 md:pt-5 lg:pt-10">
                        <JourneySlideshow />
                        <JourneySlideshow />
                        <div className="text-center">
                                <p className="mt-3 md:mt-6 lg:mt-12 text-[#101828] font-bold text-[15px] md:text-[22px] lg:text-[44px]">YOUR <span>PROFESSIONAL TRADING JOURNEY</span> STARTS HERE</p>
                                <div className="px-7 md:px-14 lg:px-28 relative">
                                        <img src="/images/iphone.png" alt="" className="hidden md:block md:w-[30%] lg:w-fit absolute top-0 left-[35%]" />
                                        <div className="flex flex-row justify-between  gap-3 sm:gap-10">
                                                <TradingFeatures body="You don't require substantial personal funding capital; once you demonstrate your potential to become an Ox Funded Trader, we will handle the funding on your behalf." label="Professional Advantages" number={1} />
                                                <TradingFeatures body="You don't require substantial personal funding capital; once you demonstrate your potential to become an Ox Funded Trader, we will handle the funding on your behalf." label="Professional Advantages" number={2} />
                                        </div>
                                        <div className="flex flex-row justify-between gap-3 sm:gap-10 mt-12 md:mt-24 lg:mt-52">
                                                <TradingFeatures body="You don't require substantial personal funding capital; once you demonstrate your potential to become an Ox Funded Trader, we will handle the funding on your behalf." label="Professional Advantages" number={3} />
                                                <TradingFeatures body="You don't require substantial personal funding capital; once you demonstrate your potential to become an Ox Funded Trader, we will handle the funding on your behalf." label="Professional Advantages" number={4} />
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default TradingJourney