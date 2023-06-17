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
		<div className={`${mobileShow ? 'flex flex-col gap- ' : 'flex flex-row items-center'} fixed z-10 w-[97%] md:w-[85%] lg:w-[85%] bg-white mx-2 md:mx-auto  justify-between  sm:justify-normal my-2  md:gap-[8%] sm:gap-[3%] lg:gap-[11.14%] rounded-xl py-4 px-4 md:left-[8%]`}>
			<img src="/images/logo.png" alt="" className=" w-[20%] md:w-[10%]" />
			<div className="relative">
				<div className="absolute right-0  sm:hidden">
					{!mobileShow ? <AiOutlineMenu className="w-4 absolute right-4 -top-2 h-4 cursor-pointer" onClick={() => handleClick()} /> : <AiFillCloseCircle className="w-4 h-4 right-4 absolute cursor-pointer" onClick={() => handleClick()} />}
				</div>
				<div className={`${mobileShow ? 'flex flex-col justify-center gap-6 items-center' : 'hidden '} sm:flex flex-row sm:gap-3 md:gap-6 `}>
					<Link to="/" className="text-[10px] font-semibold  lg:text-sm">HOME</Link>
					<Link to="/about-us" className="text-[10px] font-semibold  lg:text-sm">ABOUT US</Link>
					<Link to="/evaluations" className="text-[10px] font-semibold  lg:text-sm">EVALUATIONS</Link>
					<Link to="/affiliates" className="text-[10px] font-semibold  lg:text-sm">AFFILIATES</Link>
					<Link to="/faq" className="text-[10px] font-semibold  lg:text-sm">FAQ</Link>
					<Link to="/contact-us" className="text-[10px] font-semibold  lg:text-sm">CONTACT US</Link>
					<Link to="" className="text-[10px] font-semibold  lg:text-sm">CLIENT AREA</Link>
				</div>
			</div>	
		</div>
	)
}

export default Navbar