
const CompetitiveSpreads = () => {
        return (
                <div>
                        <div className="mx-7  md:mx-14 lg:mx-28 flex flex-col  md:flex-row pl-2  md:pl-3  lg:pl-6 gap-4 py-6 mt-16 pr-5 md:pr-10 lg:pr-20 backdrop-blur-xl rounded-[21px] shadow-[0px_4px_28px_4px_rgba(2,92,255,0.19)] bg-gradient-radial">
                                <div className='md:w-[60%]'>
                                        <p className="text-[#101828] font-bold text-xl md:text-3xl  lg:text-6xl">Check Out Our <span>Competitive <br /> Spreads</span></p>
                                        <p className="font-400 text-[#101828] text-[10px] md:text-xs lg:text-base">Feel free to log in to MT5 using the provided credentials and discover the raw spreads we offer across a wide range of instruments. We guarantee the best prop trading conditions, with raw spreads and minimal execution slippage.</p>
                                        <div className="font-extrabold flex flex-row items-center gap-2  px-1 md:px-3   mt-6 w-fit rounded-full border-white border-2 bg-white backdrop-blur-xl shadow-lg text-[10px] md:text-[16px] lg:text-[22px]">
                                                <img src="/images/meta-trader.png" alt="" className="lg:w-fit w-[20%]" />
                                                <p className="w-fit">Meta Trader <span className="text-[#F1853C]">5</span></p>
                                        </div>
                                </div>
                                <div className="md:w-[40%]">
                                        <div className="text-center bg-gradient-to-r from-[#233C68] via-[#0057FF] to-[#3AF2FF]  py-3 md:py-7 px-4 md:px-8 rounded-t-[22px]">
                                                <p className="font-bold text-xs lg:text-xl text-white">Check Spread - MT5</p>
                                        </div>
                                        <form className="bg-white rounded-b-[22px] px-6 pt-1 text-left md:pt-3 pb-4 md:pb-9">
                                                <div className="my-1 md:my-3">
                                                        <label className="text-[10px] md:text-xs lg:text-base" htmlFor="">Login ID</label><br />
                                                        <input type="text" className="bg-[#096fff1a] rounded-[4px] w-full py-2 px-3" />
                                                </div>
                                                <div className="my-1 md:my-3">
                                                        <label className="text-[10px] md:text-xs lg:text-base" htmlFor="">Investor Password</label><br />
                                                        <input type="text" className="bg-[#096fff1a] rounded-[4px]  w-full  py-2 px-3" />
                                                </div>
                                                <div className="my-1 md:my-3">
                                                        <label className="text-[10px] md:text-xs lg:text-base" htmlFor="">Server Name</label><br />
                                                        <input type="text" className="bg-[#096fff1a] rounded-[4px]  w-full py-2 px-3" />
                                                </div>
                                        </form>
                                </div>
                        </div>
                        <div className="text-center pt-4 md:pt-8 lg:pt-16">
                                <p className="text-[#101828] font-bold text-[11px] md:text-[22px] lg:text-[44px]">MORE THAN 2000+ TRADING INSTRUMENTS</p>
                                <div className="flex flex-row justify-around mt-4 md:mt-8 lg:mt-16 mb-2  md:mb-4 lg:mb-8 px-7 md:px-14 lg:px-28">
                                        <div className="flex flex-col justify-center items-center">
                                                <img src="/images/crypto-trading.png" className="w-[50%] md:w-fit" alt="" />
                                                <p className='text-xs md:text-base'>Crypto</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                                <img src="/images/commodities-trading.png" className="w-[50%] md:w-fit" alt="" />
                                                <p className='text-xs md:text-base'>Commodities</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                                <img src="/images/forex-trading.png" className="w-[50%] md:w-fit" alt="" />
                                                <p className='text-xs md:text-base'>Forex</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                                <img src="images/indicies-trading.png" className="w-[50%] md:w-fit" alt="" />
                                                <p className='text-xs md:text-base'>Indices</p>
                                        </div>
                                </div>
                        </div>
                </div>

        )
}

export default CompetitiveSpreads