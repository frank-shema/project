import { useState } from "react"
import { AiFillCloseCircle, AiOutlineMenu } from "react-icons/ai"
import { Link } from "react-router-dom"
const Navbar = () => {
	const [mobileShow, setMobileShow] = useState(false)
	const handleClick = () => {
		console.log("clicked")
		setMobileShow(!mobileShow)
	}
	return (
		<div className="fixed z-10 w-[97%] md:w-[85%] lg:w-[85%] bg-white mx-2 md:mx-auto  justify-between  sm:justify-normal  my-2 flex flex-row items-center  md:gap-[8%] sm:gap-[3%] lg:gap-[11.14%] rounded-xl p-3 md:left-[8%]">
			<img src="/images/logo.png" alt="" />
			<div className="block sm:hidden">
				{!mobileShow ? <AiOutlineMenu className="w-8 h-8 cursor-pointer" onClick={() => handleClick()} /> : <AiFillCloseCircle className="w-8 h-8 cursor-pointer" onClick={() => handleClick()} />}
			</div>
			{mobileShow &&
				(
					<div className="absolute sm:hidden md:bg-inherit bg-white right-4 top-20 px-4 py-2 rounded-2xl flex flex-col ">
						<Link to="/" className="text-[10px] font-semibold  lg:text-sm">HOME</Link>
						<Link to="/about-us" className="text-[10px] font-semibold  lg:text-sm">ABOUT US</Link>
						<Link to="/evaluations" className="text-[10px] font-semibold  lg:text-sm">EVALUATIONS</Link>
						<Link to="/affiliates" className="text-[10px] font-semibold  lg:text-sm">AFFILIATES</Link>
						<Link to="/faqs" className="text-[10px] font-semibold  lg:text-sm">FAQ</Link>
						<Link to="/contact-us" className="text-[10px] font-semibold  lg:text-sm">CONTACT US</Link>
						<Link to="" className="text-[10px] font-semibold  lg:text-sm">CLIENT AREA</Link>
					</div>
				)}
			<div className="hidden sm:flex flex-row sm:gap-3 md:gap-6 ">
				<Link to="/" className="text-[10px] font-semibold  lg:text-sm">HOME</Link>
				<Link to="/about-us" className="text-[10px] font-semibold  lg:text-sm">ABOUT US</Link>
				<Link to="/evaluations" className="text-[10px] font-semibold  lg:text-sm">EVALUATIONS</Link>
				<Link to="/affiliates" className="text-[10px] font-semibold  lg:text-sm">AFFILIATES</Link>
				<Link to="/faqs" className="text-[10px] font-semibold  lg:text-sm">FAQ</Link>
				<Link to="/contact-us" className="text-[10px] font-semibold  lg:text-sm">CONTACT US</Link>
				<Link to="" className="text-[10px] font-semibold  lg:text-sm">CLIENT AREA</Link>
			</div>
		</div>
		// <div className="mx-2 px-3   w-[97%] md:w-[80.9%]  flex fixed flex-row items-center justify-center   my-2 bg-white rounded-xl z-10   py-3 xl:pl-14 gap-32">
		// 	<img src="/images/logo.png" alt="" />
		// 	<div className="block md:hidden">
		// 		{!mobileShow ? <AiOutlineMenu className="w-8 h-8 cursor-pointer" onClick={() => handleClick()} /> : <AiFillCloseCircle className="w-8 h-8 cursor-pointer" onClick={() => handleClick()} />}
		// 	</div>
		// 	<div className={`${!mobileShow} && hidden absolute md:static md:bg-inherit bg-white right-4 top-20 px-4 py-2 rounded-2xl  md:flex  md:flex-row md:items-center  md:gap-3 `}>
		// 		<Link to="/" className="md:text-sm lg:text-base">HOME</Link>
		// 		<Link to="/about-us" className="md:text-sm lg:text-base">ABOUT US</Link>
		// 		<Link to="/evaluations" className="md:text-sm lg:text-base">EVALUATIONS</Link>
		// 		<Link to="/affiliates" className="md:text-sm lg:text-base">AFFILIATES</Link>
		// 		<Link to="" className="md:text-sm lg:text-base">FAQ</Link>
		// 		<Link to="/contact-us" className="md:text-sm lg:text-base">CONTACT US</Link>
		// 		<Link to="" className="md:text-sm lg:text-base">CLIENT AREA</Link>
		// 	</div>
		// 	{mobileShow &&
		// 		(
		// 			<div className=" absolute md:static md:bg-inherit bg-white right-4 top-20 px-4 py-2 rounded-2xl ">
		// 				<p className="md:text-sm lg:text-base">HOME</p>
		// 				<p className="md:text-sm lg:text-base">ABOUT US</p>
		// 				<p className="md:text-sm lg:text-base">EVALUATIONS</p>
		// 				<p className="md:text-sm lg:text-base">AFFILIATES</p>
		// 				<p className="md:text-sm lg:text-base">FAQ</p>
		// 				<p className="md:text-sm lg:text-base">CONTACT US</p>
		// 				<p className="md:text-sm lg:text-base">CLIENT AREA</p>
		// 			</div>
		// 		)}
		// </div>
	)
}

export default Navbar