import group from "../assets/Group 625878.svg"
import media from "../assets/Group 241 1.svg"
import Quick from "./Links"
import OtherLinks from "./adit"

export default function Footer() {
	return (
		<footer className="bg-gray-900 rounded-xl mx-3 md:mx-6  lg:mx-12  text-center">
			<div className="first">
				<div className="block md:grid grid-cols-[1.5fr,2fr,2fr]">
					<div className="flex flex-col gap-6">
						<div>
							<img src={group} alt="logo" className="w-[40%] mx-auto" />
						</div>
						<div>
							<h1 className="font-bold text-[12px] md:text-[16px] lg:text-[20px] text-white">CONTACT US</h1>
							<p className="text-gray-500 text-[8px] md:text-[10px] lg:text-[14px]">support@oxtradefunding.com</p>
						</div>
						<div >
							<h1 className="text-white capitalize font-bold text-[9px] md:text-[12px] lg:text-[15px]">Follow us on</h1>
							<div className="mx-auto flex flex-row gap-4 justify-center my-3">
								<img src="/images/twitter.png" alt="" />
								<img src="/images/facebook.png" alt="" />
								<img src="/images/instagram.png" alt="" />
								<img src="/images/discord.png" alt="" />
							</div>
						</div>
					</div>
					<div className="flex flex-row  justify-center gap-4 my-4">
						<div className=" text-[9px] md:text-[12px] lg:text-[15px] text-white uppercase">
							<div>
								<h1 className="text-white font-bold">Quick links</h1>
							</div>
							<div className="text-gray-400 font-medium text-[9px] md:text-[12px] lg:text-[15px]">
								<Quick />
							</div>
						</div>
						<div className=" text-[9px] md:text-[12px] lg:text-[15px] text-white uppercase">
							<div>
								<h1 className="text-white font-bold">Legal</h1>
							</div>
							<div className="text-gray-400 font-medium text-[9px] md:text-[12px] lg:text-[15px]">
								<OtherLinks />
							</div>
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
						<div className="relative">
							<input type="email" placeholder="Enter Your Email Address" className="pr-[32%] bg-gray-600 border-0 focus:border-0 focus:outline-none place-content-center w-full py-2 md:py-3 lg:py-6  px-1 md:px-2 lg:pl-4 text-white placeholder-gray-400 input text-[8px] md:text-[10px] lg:text-xs" />
							<button type="button" className="bg-[#000AFF] text-white font-medium  text-[8px] md:text-[10px] lg:text-xs uppercase p-1 rounded-lg px-1 md:px-2 lg:px-5 float-right absolute top-[15%] md:top-[15%] right-[2%]">Subscribe</button>
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

