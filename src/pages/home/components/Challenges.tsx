import "../../../index.css"
const Challenges = () => {
        const challengeFeatures = ["No Time Limit","Balance Based Drawdown","80% Profit Split"]
        const ChallengeFeature = ({
                body
        }: {
                body: string
        }) => {
                return (
                        <div className="shadow-[-5px_0_#0A71FF] md:shadow-{-10px_0_#0A71FF} bg-white flex flex-row  items-center gap-[5%] w-[30%] px-[2%] py-[1px] md:py-3  rounded-[48px] ">
                                <img src="/images/checkbox.png" alt="" className='h-5 ' />
                                <p className='text-[9px] md:text-[12px] lg:text-base h-fit'>{body}</p>
                        </div>
                )
        }
        return (
                <div className="bg-[#F2F4F7] w-full px-1.5  md:px-[5%] pt-[5%] pb-2 md:pb-5">
                        <div className="relative lg:rounded-[45px] md:rounded-[22px] rounded-[11px] bg-gradient-to-r from-[#010306] to-[#001E52] text-center pt-5  pb-5  md:pb-10 lg:pb-20 px-[1%]">
                                <img src="/images/star-group.png" alt="" className="absolute w-[17%] sm:w-[10%] md:w-fit " />
                                <img src="/images/star-white.png" alt="" className="absolute hidden  lg:block left-40 top-40  " />
                                <img src="/images/star-white.png" alt="" className="absolute right-36 top-16   hidden  lg:block " />
                                <p className="text-white font-bold text-base md:text-3xl lg:text-6xl         ">Introducing</p>
                                <p className="text-white font-bold text-base md:text-3xl lg:text-6xl bg-gradient z-10">OX Trade Funding Challenges</p>
                                <p className="text-white font-500 lg:text-xl md:text-xs text-[8px] mt-3 md:mt-6">Trade With The Best Prop Trading Conditions</p>
                                <div className="flex flex-row justify-around mt-[5%]">
                                        {challengeFeatures.map((feature) =>{
                                                return <ChallengeFeature body={feature} />
                                        })}
                                </div>
                        </div>
                        <div className="text-center pt-[5%]">
                                <p className="text-[#101828] font-bold text-2xl md:text-5xl">Payment Support For Every Platform</p>
                                <div className="mt-3 md:mt-6 lg:mt-12 flex flex-row justify-around gap-5 md:gap-10  bg-gradient-to-r from-[#F2F4F7] via-[#0058f92e]  to-[#F2F4F7]  py-3  md:py-6 lg:py-12 px-16 md:px-32 lg:px-64">
                                        <img src="/images/usd-coin 1.png" alt="" className='w-[15%] sm:w-[12%] md:w-[15%] lg:w-fit' />
                                        <img src="/images/bitcoin-cash 1.png" alt="" className='w-[15%] sm:w-[12%] md:w-[15%] lg:w-fit' />
                                        <img src="/images/ethereum 1.png" alt="" className='w-[15%] sm:w-[12%] md:w-[15%] lg:w-fit' />
                                        <img src="/images/mastercard 1.png" alt="" className='w-[15%] sm:w-[12%] md:w-[15%] lg:w-fit' />
                                        <img src="/images/visa-card 1.png" alt="" className='w-[15%] sm:w-[12%] md:w-[15%] lg:w-fit' />
                                </div>
                                <p className="text-[#101828] font-bold text-2xl md:text-5xl lg:text-8xl mt-6 md:mt-12 lg:mt-28 pb-5 md:mb-10 lg:mb-20">Choose Your Challenge</p>
                                <div className="flex flex-row rounded-full bg-white w-fit px-2 md:px-5 py-1  md:py-3 mx-auto">
                                        <button className=" px-3 md:px-7  rounded-full border-white border-2 bg-gradient-to-r from-[#64ebf366] to-[#00a3ff9e] backdrop-blur-xl shadow-lg text-[12px] font-bold md:text-[18px] lg:text-[36px]
                                        36px">2-Phase</button>
                                        <button className="px-3  md:px-7 text-[12px] font-bold md:text-[18px] lg:text-[36px] ">1-Phase</button>
                                </div>
                                <p className="pt-5  md:pt-10 lg:pt-20 font-bold text-[12px] md:text-[15px] lg:text-3xl text-[#101828]">Platform</p>
                                <div className="font-extrabold flex flex-row items-center gap-2  px-1 md:px-3 mx-auto  mt-6 w-fit rounded-full border-white border-2 bg-gradient-to-r from-[#64ebf366] to-[#00a3ff9e] backdrop-blur-xl shadow-lg text-[10px] md:text-[16px] lg:text-[22px]">
                                        <img src="/images/meta-trader.png" alt="" className="lg:w-fit w-[20%]" />
                                        <p className="w-fit">Meta Trader <span className="text-[#F1853C]">5</span></p>
                                </div>
                        </div>
                </div>
        )
}

export default Challenges