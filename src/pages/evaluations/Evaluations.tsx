import React from 'react'
import FundingsEvaluations from './components/FundingsEvaluations'
import CurrencySlideshow from '../../components/CurrencySlideshow'
import BenefitsFunding from './components/BenefitsFunding'
import Challenges from './components/Challenges'
import TradingJourney from './components/TradingJourney'
import CompetitiveSpreads from './components/CompetitiveSpreads'
import OurNewsLetter from '../../components/OurNewsLetter'
import { Helmet } from 'react-helmet'
import Navbar from '../../components/Navbar'


const Evaluations = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <Helmet>
        <title>OX Trade | Evaluations</title>
      </Helmet>
      <Navbar />
        <FundingsEvaluations />
        <CurrencySlideshow />
        <BenefitsFunding />
        <Challenges />
        <TradingJourney />
        <CompetitiveSpreads />
        <OurNewsLetter />
    </div>
  )
}

export default Evaluations