import add from '../assets/Frame 625869.svg'
import multply from '../assets/↳ Icon Color.svg'
export default function Faq() {
	return (
		<div className=' ml-12 mr-12 '>
			<div className='mt-[30px] mb-[30px] border-b-2 border-b-gray-200 '>
				<h1 className='text-[#101828] font-bold text-[14px] md:text-[18px] lg:text-[36px] bg-white mb-[20px]'>FAQ</h1>
			</div>
			<div className='block md:flex flex-row gap-6'>
				<div className='w-[100%] md:w-[50%]'>
					<div className='flex flex-row justify-between items-center border-b-2 border-b-gray-200 py-[11.5px] md:py-[23px] lg:py-[46px]'>
						<h1 className=' text-[#101828] font-semibold text-14px md:text-[16px] lg:text-[20px] '>What is OX Trade Funding?</h1>
						<img src={add} alt='' className='w-[10%]' />
					</div>

					<div className='border-b-2 border-b-gray-200 flex flex-row justify-between items-center py-[11.5px] md:py-[23px] lg:py-[46px]'>
						<h1 className='text-[#101828] font-semibold text-14px md:text-[16px] lg:text-[20px]'>What platforms do you all provide?</h1>
						<img src={add} alt='' className='w-[10%]' />
					</div>
				</div>

				<div className='w-[100%] md:w-[50%] gap-[30px] '>
					<div className=' border-b-gray-200 border-b-2 py-[11.5px] md:py-[23px] lg:py-[46px]'>
						<div className="flex flex-row justify-between">
							<h1 className='text-[#101828] font-semibold text-14px md:text-[16px] lg:text-[20px]'>How long is payout?</h1>
							<img src={multply} alt=''  className='w-[3%] mx-4' />
						</div>
						<p className='text-[#101828] font-[400]  py-[20px] text-[10px] md:text-[12px] lg:text-[15px]'>
							Initiating a payout typically takes approximately 7 hours. If
							you opt for a bank transfer, you can expect to receive your
							payout within 2-3 business days. However, if you choose PayPal
							or cryptocurrency as your preferred method, you can receive your
							payout on the same day.
						</p>
					</div>

					<div className='border-b-2 border-b-gray-200 flex flex-row justify-between items-center'>
						<p className='text-[#101828] font-semibold text-14px md:text-[16px] lg:text-[20px]'>When do I submit KYC</p>
						<img src={add} alt='' className='w-[10%]' />
					</div>
				</div>
			</div>
			<div className=' mb-[100px]'>
				<h1 className='text-[#101828] font-semibold text-14px md:text-[16px] lg:text-[20px]'>See more FAQs {""}</h1>
			</div>
		</div>
	)
}
