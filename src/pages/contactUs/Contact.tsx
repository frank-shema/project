import ContactUs from './components/ContactUs'
import CurrencySlideshow from '../../components/CurrencySlideshow'
import InTouch from './components/InTouch'
import OurNewsLetter from '../../components/OurNewsLetter'
import { Helmet } from 'react-helmet'
import Footer from '../../components/Footer'

const Contact = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <Helmet>
        <title>OX Trade | Contact</title>
      </Helmet>
        <ContactUs />
        <CurrencySlideshow />
        <InTouch />
        <OurNewsLetter />
        <div className='h-10 bg-white w-full'></div>
        <Footer />
    </div>
  )
}

export default Contact