import CurrencySlideshow from '../../components/CurrencySlideshow'
import OurNewsLetter from '../../components/OurNewsLetter'
import FundingsAffiliates from './components/FundingsAffiliates'
import ReferEarn from './components/ReferEarn'
import Referring from './components/Referring'
import { Helmet } from 'react-helmet'
import Faq from '../../components/FAQ'
import Footer from '../../components/Footer'

const Affiliates = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <Helmet>
        <title>Ox Trade | Affiliates</title>
      </Helmet>
        <FundingsAffiliates />
        <CurrencySlideshow />
        <ReferEarn />
        <Referring />
        <OurNewsLetter />
        <Faq />
        <Footer />
    </div>
  )
}

export default Affiliates