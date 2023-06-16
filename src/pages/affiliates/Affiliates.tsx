import React from 'react'
import CurrencySlideshow from '../../components/CurrencySlideshow'
import OurNewsLetter from '../../components/OurNewsLetter'
import FundingsAffiliates from './components/FundingsAffiliates'
import ReferEarn from './components/ReferEarn'
import Referring from './components/Referring'

const Affiliates = () => {
  return (
    <div className='w-full overflow-x-hidden'>
        <FundingsAffiliates />
        <CurrencySlideshow />
        <ReferEarn />
        <Referring />
        <OurNewsLetter />
    </div>
  )
}

export default Affiliates