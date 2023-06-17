import "../../../index.css"
import EmpowerFeature from "./EmpowerFeature"
const Empower = () => {
        const features = ["Bi-Weekly Payouts", "No Consistency Rules", "Scale Up-To $600,000", "Over 200 Symbols To Trade", "80% Profit Split", "Industry Leading Dashboard", "Unlimited Trading Days", "Low Spread & Commission"]
        return (
                <div className="relative  w-[100vw] bg-[#F2F4F7] px-[11.45%]  pb-20 empower">
                                {/* <img src="/images/phone1.png" alt=""  className="hidden  lg:block absolute  right-40 "/>
                                <img src="/images/phone2.png" alt="" className="hidden lg:block  absolute  right-0" />
                                <img src="/images/phone3.png" alt="" className="hidden lg:block  absolute   right-0 bottom-0" />
                                <img src="/images/phone4.png" alt="" className="hidden lg:block  absolute  right-32 bottom-0" /> */}
                        <div className="pt-[30%] sm:pt-[17.3%]  md:pt-[13%] relative">
                              
                                <p className="text-[10px] md:text-[14px] lg:text-[18px] font-bold bg-gradient">Empower Your Trading</p>
                                <p className="font-bold text-2xl md:text-[36px] lg:text-5xl" >Funding Promising <span className="bg-gradient">Forex <br /> Traders</span> Worldwide . </p>
                                <p className="mt-6 font-normal text-[9px] md:text-sm lg:text-lg text-[#101828]">OxTradeFunding offers up to <span className="font-bold">$600,000</span> funds to financially  empower <br /> global traders and help them earn <span className="font-bold">full-time</span>. Recieve Up to 80% Profits, <br /> We Cover The Losses.</p>
                                <div className="flex flex-row gap-4 md:gap-8 items-center mt-7 mb-10">
                                        <div className="flex flex-row items-center gap-4 border-r-2 pr-5 border-black">
                                                <button className="bg-[#2D66EE] rounded-lg text-white py-1 px-2
                                md:py-3 md:px-6 text-[9px] md:text-[12px] lg:text-base">Get Funded</button>
                                                <button className="rounded-lg border-[1px] border-[#2D66EE] py-1 px-2
                                md:py-3 md:px-6 text-[9px] md:text-[12px] lg:text-base">Join Our Discord</button>
                                        </div>
                                        <div className="flex  flex-col justify-center">
                                                <p className="text-[9px] md:text-[12px] lg:text-base">Join Our Community</p>
                                                <div className="flex flex-row items-center  gap-3">
                                                        <a href="" className="">
                                                                <img src="/images/twitter.png" alt="" />
                                                        </a>
                                                        <a href="">
                                                                <img src="/images/instagram.png" alt="" />
                                                        </a>
                                                        <a href="">
                                                                <img src="/images/discord.png" alt="" />
                                                        </a>
                                                        <a href="">
                                                                <img src="/images/facebook.png" alt="" />
                                                        </a>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className="bg-white rounded-xl py-1.5 md:py-3 lg:py-6  px-[9px]   md:px-[18px] lg:px-[36px] flex flex-wrap w-full md:w-[60%] ">
                                {features.map((feature, index) => {
                                        return <EmpowerFeature label={feature} key={index} />
                                }
                                )}
                        </div>
                </div>
        )
}

export default Empower