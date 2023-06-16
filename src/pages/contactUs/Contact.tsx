import React from 'react'
import ContactUs from './components/ContactUs'
import CurrencySlideshow from '../../components/CurrencySlideshow'
import InTouch from './components/InTouch'
import OurNewsLetter from '../../components/OurNewsLetter'
import Footer from '../../components/footer/Footer'
import { Helmet } from 'react-helmet'
import Navbar from '../../components/Navbar'

const Contact = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <Helmet>
        <title>Ox Trade | Contact</title>
      </Helmet>
      <Navbar />
        <ContactUs />
        <CurrencySlideshow />
        <InTouch />
        <OurNewsLetter />
        <div className='w-full h-10 bg-white' />
        <Footer />
    </div>
  )
}

export default Contact