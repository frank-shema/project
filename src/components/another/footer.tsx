import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ftmo from '../../assets/logo_ftmo_footer.png';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import apple from '../../assets/apple.png'
import fb from '../../assets/facebook.png'
import Ig from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'
import tiktok from '../../assets/tiktok.png'
import twitter from '../../assets/twitter.png'
import googlePlay from '../../assets/google-play.png'





export default function AnotherFooter() {
  return (
    <div>
      <div className='mt-[10%] bg-secondary py-[120px] px-[105px]'>
        <div className='py-[50px] bg-secondary grid grid-cols-4'>
          <div className=''>
            <div className='text-white text-[14px] grid grid-row-[2fr , 1fr] gap-11'>
              <div className='flex flex-col gap-5'>
                <div>
                  <img src={ftmo} alt="" className='cursor-pointer z-10' />
                </div>
                <div className='flex flex-col gap-2'>
                  <p>
                    <a href="support@ftmo.com">support@ftmo.com</a>
                  </p>
                  <p>
                    <a href="">+44 20 3322 2983</a>
                  </p>
                  <p>
                    <a href="">WhatsApp</a>
                  </p>
                </div>
              </div>

              <div>
                <p>
                  <a href="">Contact options</a>
                </p>
                <p>
                  <a href="">Privacy Policy</a>
                </p>
                <p>
                  <a href="">Cookies</a>
                </p>
              </div>
            </div>
            <div className=' flex flex-row gap-5 mt-[60px]'>
              <img src={fb} alt="" className='h-[30px] w-[30px] rounded-full cursor-pointer' />
              <img src={twitter} alt="" className='h-[30px] w-[30px] rounded-full cursor-pointer' />
              <img src={Ig} alt="" className='h-[30px] w-[30px] rounded-full cursor-pointer' />
              <img src={youtube} alt="" className='h-[30px] w-[30px] rounded-full cursor-pointer' />
              <img src={tiktok} alt="" className='h-[30px] w-[30px] rounded-full cursor-pointer' />

            </div>
          </div>
          <div className='flex flex-col gap-5'>

            <div>
              <h1 className='text-white uppercase font-bold'>about us</h1>
            </div>
            <div className='flex flex-col gap-1 text-prima  text-[15px]'>
              <p><a href="" className=' hover:text-blue-800 hover:text-[17px]'>Evaluation Process</a></p>
              <p><a href="" className=' hover:text-blue-800 hover:text-[17px]'>Trading Objectives</a></p>
              <p><a href="" className=' hover:text-blue-800 hover:text-[17px]'>Why our FTMO Challenge?</a></p>
              <p><a href="" className=' hover:text-blue-800 hover:text-[17px]'>Testimonials</a></p>
              <p><a href="" className=' hover:text-blue-800 hover:text-[17px]'>Scaling Plan</a></p>
              <p><a href="" className=' hover:text-blue-800 hover:text-[17px]'>Partners</a></p>
              <p><a href="" className=' hover:text-blue-800 hover:text-[17px]'>Affiliate Programme</a></p>
              <p><a href="" className=' hover:text-blue-800 hover:text-[17px]'>Terms & Conditions</a></p>
              <p><a href="" className=' hover:text-blue-800 hover:text-[17px]'>Careers</a></p>
            </div>
          </div>
          <div className='flex flex-col gap-5'>

            <div>
              <h1 className='text-white uppercase font-bold'>TRADING</h1>
            </div>
            <div className='flex flex-col gap-1 text-prima text-[15px]'>
              <p><a href="" className=' hover:text-blue-800 hover:text-[17px]'>Calendar</a></p>
              <p><a href="" className=' hover:text-blue-800 hover:text-[17px]'>Fantastic Modern Prop Trading <br /> Firm</a></p>
              <p><a href="" className=' hover:text-blue-800 hover:text-[17px]'>Shop</a></p>
            </div>
          </div>
          <div className='flex flex-col gap-5 '>
            <div>
              <h1 className='text-white uppercase font-bold'> APPS</h1>
            </div>
            <div className='flex flex-col gap-1 text-prima text-[15px]'>
              <p><a href="" className=' hover:text-blue-800 hover:text-[17px]'>Account MetriX</a></p>
              <p><a href="" className=' hover:text-blue-800 hover:text-[17px]'>Account Analysis</a></p>
              <p><a href="" className=' hover:text-blue-800 hover:text-[17px]'>Statistical App</a></p>
              <p><a href="" className=' hover:text-blue-800 hover:text-[17px]'>Trading Journal</a></p>
              <p><a href="" className=' hover:text-blue-800 hover:text-[17px]'>Mentor App</a></p>
              <p><a href="" className=' hover:text-blue-800 hover:text-[17px]'>Equity Simulator</a></p>
              <p><a href="" className=' hover:text-blue-800 hover:text-[17px]'>Quick Trade Manager</a></p>
            </div>
          </div>
        </div>

        <div className='flex flex-row gap-[130px]'>
          <div className='flex flex-row gap-6 border-prima border-2 px-9 py-4 rounded-xl bg-sec'>
            <div>
              <img src={apple} alt="" className='h-[30px] w-[30px] rounded-full cursor-pointer' />
            </div>
            <div>
              <p className='text-prima text-[10px] cursor-pointer'>Download on the <br /> <span className='text-white text-[10px]'>App Store</span></p>
            </div>
          </div>

          <div className='flex flex-row gap-6 border-prima border-2 px-9 py-4 rounded-xl bg-sec'>
            <div>
              <img src={googlePlay} alt="" className='h-[30px] w-[30px] rounded-full cursor-pointer' />
            </div>
            <div>
              <p className='text-prima text-[10px] cursor-pointer'>Download on the  <br /> <span className='text-white font-bold text-[10px]'>Google Play</span> </p>
            </div>
          </div>
        </div>
      </div>

      {/* the downward section */}
      <div className=' bg-sec py-[90px] px-[105px] text-prima flex flex-col gap-10 text-[12px]'>
        <div className='w-[65%]'>
          <p>All information provided on this site is intended solely for the study purposes related to trading on financial markets and does not serve in any way as a specific  investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment  instruments. Trading in financial markets is a high-risk activity and it is advised not to risk more than one can afford to lose! FTMO Evaluation Global s.r.o./FTMO  Evaluation US s.r.o. does not provide any of the investment services listed in the Capital Market Undertakings Act No. 256/2004 Coll. The information on this site  is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local the laws or regulations. FTMO Evaluation Global  s.r.o./FTMO Evaluation US s.r.o., and FTMO s.r.o. are not a broker and do not accept deposits. The offered technical solution for the FTMO platforms and data feed  is powered by the institutional liquidity providers. The website FTMO.com is owned and operated by an EU company FTMO s.r.o. ,  Purkyňova 3, 110 00 Prague, Czech Republic.</p>
        </div>
        <div>
          <p className='text-white text-[12px]'>2023 &copy; Copyright - FTMO.com Made with  <span> <FontAwesomeIcon icon={faHeart} className='text-red-500' /></span> for trading</p>
        </div>
      </div>
    </div>
  );
}
