import group from "../../assets/Group 625878.svg"
import media from "../../assets/Group 241 1.svg"
import Quick from "./Links"
import OtherLinks from "./adit"
import './index.css'

export default function Footer() {
    return (

        <footer className="bg-gray-900 rounded-xl ml-12 mr-12 ">
            <div className="first">
                <div className="block md:grid grid-cols-[1.5fr,1fr,1fr,2fr]">
                    <div className="flex flex-col gap-6">
                        <div>
                            <img src={group} alt="logo" className="w-[40%]"/>
                        </div>
                        <div>
                            <h1 className="font-bold text-[12px] md:text-[16px] lg:text-[20px] text-white">CONTACT US</h1>
                            <p className="text-gray-500 text-[8px] md:text-[10px] lg:text-[14px]">support@oxtradefunding.com</p>
                        </div>
                        <div >
                            <h1 className="text-white capitalize font-bold text-[9px] md:text-[12px] lg:text-[15px]">Follow us on</h1>
                            <img src={media} alt="media" className="mt-4" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 text-[9px] md:text-[12px] lg:text-[15px] text-white uppercase">
                        <div>
                            <h1 className="text-white font-bold">quick links</h1>
                        </div>
                        <div className="text-gray-400 font-medium text-[9px] md:text-[12px] lg:text-[15px]">
                            <Quick />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 text-[9px] md:text-[12px] lg:text-[15px] text-white uppercase">
                        <div>
                            <h1 className="text-white font-bold">legal</h1>
                        </div>
                        <div className="text-gray-400 font-medium text-[9px] md:text-[12px] lg:text-[15px]">
                            <OtherLinks />
                        </div>
                    </div>
                    <div className="flex flex-col gap-7">
                        <div className="flex flex-col gap-7">
                            <div>
                                <h1 className="text-[9px] md:text-[12px] lg:text-[15px] text-white uppercase font-bold " >Stay updated</h1>
                            </div>
                            <div>
                                <p className="text-gray-400 text-[9px] md:text-[10px] lg:text-[15px]">
                                    Subscribe to our newsletter and receive exclusive discounts
                                    and updates from industry veterans in the forex trading
                                    industry. Stay informed, gain a competitive edge, and enjoy
                                    the benefits of being part of our community.
                                </p>
                            </div>
                        </div>
                        <div>
                            <input type="email" placeholder="Enter Your Email Address" className="bg-gray-600 border-0 focus:border-0 focus:outline-none place-content-center w-full py-6 px-4 text-white placeholder-gray-400 input text-xs" />
                            <button type="button" className="bg-customColor text-white font-medium text-[15px] uppercase p-1 rounded-lg px-5 float-right relative bottom-[45px] right-[30px]">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p className=" font-normal text-gray-300 text-[9px] ">The information on the Website is provided solely for analysis purposes only and should not be construed as financial, investment, tax, or other advice. Nothing on the Website or in our Services represents a solicitation, advice, endorsement, or offer to purchase or sell stocks or other financial instruments by TheFFrt.S.r.l, also known as Ox Trade Funding, its agents, employees, contractors, or any connected entities. You are solely responsible for assessing the benefits and risks associated with the use of any information or other content on the Website. All investments include substantial risk, and an individual's investment decisions are solely his/her obligation. All information on the Website is provided “as is”, with no guarantee of completeness, accuracy, timeliness, or of the results obtained from the use of this information, and without warranty of any kind, express or implied. TheFFrt.S.r.l, or its partners, employees, or agents, shall in no way be responsible to you or anyone else for any decision made or action taken in reliance on the information on the Website, or for any consequential, special, or similar damages, even if warned of the potential of such damages. Purchases should not be regarded as deposits. All program charges are utilized for working expenses including, however not restricted to, staff, innovation, and other business-related costs.</p>
                    </div>
                    <div className="text-gray-400  mt-5">
                        <p className="float-left text-[13px]">Copyright 2023 &copy; Ox Trade Funding</p>
                        <p className="float-right capitalize">Built by <span className="capitalize text-primary">worthy forex</span> </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

