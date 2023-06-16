import clsx from 'clsx';
import React, { useState } from 'react'

type currencyChoosen = "USD" | "EUR ";

const Table = () => {
        const [currencyChoosen, setCurrencyChoosen] = useState<currencyChoosen>("USD")
        const toogleCurrencyChoosen = () => {
                if (currencyChoosen === "USD") {
                        setCurrencyChoosen('EUR ')
                } else {
                        setCurrencyChoosen('USD')
                }
        }
        const ToogleBtn = () => {
                return (
                        <div className="relative w-5 md:w-10 lg:w-20 flex items-center rounded-full bg-gradient-to-r from-[#64ebf366] to-[#00a3ff9e] ">
                                <button onClick={toogleCurrencyChoosen}
                                        className={clsx(`
                                        absolute
                                        ml-[2px]
                                        lg:ml-1 
                                        w-2 
                                        md:w-5 
                                        lg:w-10 
                                        h-[60%] 
                                        md:h-[80%] 
                                        lg:h-[90%] 
                                        bg-white rounded-full`,
                                                currencyChoosen === 'EUR ' ?  'right-[1px]':'left-[1px]',
                                        )} />
                        </div>
                )
        }
        return (
                <div className='px-2.5 sm:px-5 bg-[#F2F4F7]'>
                        <div className="flex flex-row items-baseline">
                                <div className="flex">
                                        <p className="text-xs md:text-[15px] lg:text-3xl font-bold text-[#101828]">USD</p>
                                        <ToogleBtn />
                                        <p className="text-xs md:text-[15px] lg:text-3xl font-bold text-[#101828]">EUR</p>
                                </div>
                                <p className="text-[9px] md:text-xs lg:text-base  font-500 text-[#101828]">(See pricing in)</p>
                        </div>
                        <table className=" w-full mt-3 md:mt-5 lg:mt-9 bg p-2 md:p-5 lg:p-9 shadow-md ">
                                <thead className="bg-white">
                                        <th className="w-[16.6%] text-[9px] md:text-[12px]  lg:text-base  py-1 md:py-2 lg:py-4"></th>
                                        <th className="w-[16.6%] text-[9px] md:text-[12px]  lg:text-base  py-1 md:py-2 lg:py-4">{currencyChoosen==="USD" ?  "$10,000" :"€9,138.60"} </th>
                                        <th className="w-[16.6%] text-[9px] md:text-[12px]  lg:text-base  py-1 md:py-2 lg:py-4">{currencyChoosen==="USD" ?  "$25,000" :"€22,836.26"}</th>
                                        <th className="w-[16.6%] text-[9px] md:text-[12px]  lg:text-base  py-1 md:py-2 lg:py-4">{currencyChoosen==="USD" ?  "$50,000" :"€45672.52"}</th>
                                        <th className="w-[16.6%] text-[9px] md:text-[12px]  lg:text-base  py-1 md:py-2 lg:py-4">{currencyChoosen==="USD" ?  "$100,000" :"€91345.05"}</th>
                                        <th className="w-[16.6%] text-[9px] md:text-[12px]  lg:text-base  py-1 md:py-2 lg:py-4">{currencyChoosen==="USD" ?  "$200,000" :"€182690.10"}</th>
                                </thead>
                                <tr>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                </tr>
                                <tr>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                </tr>
                                <tr>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                </tr>
                                <tr>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                </tr>
                                <tr>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                </tr>
                                <tr>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                </tr>
                                <tr>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">RULES</td>
                                </tr>
                                <tr>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">PROFIT SPLIT</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">PROFIT SPLIT</td>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">PROFIT SPLIT</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">PROFIT SPLIT</td>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">PROFIT SPLIT</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">PROFIT SPLIT</td>
                                </tr>
                                <tr>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">COST</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">FREE</td>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">FREE</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">FREE</td>
                                        <td className="text-center bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">FREE</td>
                                        <td className="text-center bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base ">FREE</td>
                                </tr>
                                <tfoot>
                                        <td className="bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base "></td>
                                        <td className="bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base text-center "><button className="  bg-[#000AFF] px-1.5 md:px-3  lg:px-6 py-2 text-white font-800 rounded-[8px]">PURCHASE</button></td>
                                        <td className="bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base text-center "><button className="  bg-[#000AFF] px-1.5 md:px-3  lg:px-6 py-2 text-white font-800 rounded-[8px]">PURCHASE</button></td>
                                        <td className="bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base text-center "><button className="  bg-[#000AFF] px-1.5 md:px-3  lg:px-6 py-2 text-white font-800 rounded-[8px]">PURCHASE</button></td>
                                        <td className="bg-white py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base text-center "><button className="  bg-[#000AFF] px-1.5 md:px-3  lg:px-6 py-2 text-white font-800 rounded-[8px]">PURCHASE</button></td>
                                        <td className="bg-[#66C7FB] py-3 w-[16.6%] text-[9px] md:text-[12px]  lg:text-base text-center "><button className="  bg-[#000AFF] px-1.5 md:px-3  lg:px-6 py-2 text-white font-800 rounded-[8px]">PURCHASE</button></td>
                                </tfoot>
                        </table>
                </div>
        )
}

export default Table