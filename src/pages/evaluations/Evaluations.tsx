import React from 'react'
import FundingsEvaluations from './components/FundingsEvaluations'
import CurrencySlideshow from '../../components/CurrencySlideshow'
import BenefitsFunding from './components/BenefitsFunding'
import Challenges from './components/Challenges'
import OurNewsLetter from '../../components/OurNewsLetter'
import { Helmet } from 'react-helmet'
import TradingJourney from '../../components/TradingJourney'
import Faq from '../../components/FAQ'
import CompetitiveSpreads from '../../components/CompetitiveSpreads'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'


const Evaluations = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <Helmet>
        <title>OX Trade | Evaluations</title>
      </Helmet>
      <FundingsEvaluations />
      <CurrencySlideshow />
      <BenefitsFunding />
      <Challenges />
      <TradingJourney />
      <CompetitiveSpreads />
      <OurNewsLetter />
      <Faq />
      <Footer />
    </div>
  )
}

export default Evaluations