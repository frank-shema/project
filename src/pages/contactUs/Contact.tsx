import React from 'react'
import ContactUs from './components/ContactUs'
import CurrencySlideshow from '../../components/CurrencySlideshow'
import InTouch from './components/InTouch'
import OurNewsLetter from '../../components/OurNewsLetter'

const Contact = () => {
  return (
    <div className='w-full overflow-x-hidden'>
        <ContactUs />
        <CurrencySlideshow />
        <InTouch />
        <OurNewsLetter />
    </div>
  )
}

export default Contact