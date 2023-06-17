import OurNewsLetter from '../../components/OurNewsLetter'
import AboutPage from './components/AboutPage'
import CurrencySlideshow from '../../components/CurrencySlideshow'
import OurStory from './components/OurStory'
import { Helmet } from 'react-helmet'
import Footer from '../../components/Footer'

const About = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <Helmet>
        <title>Ox Trade | About</title>
      </Helmet>
      <AboutPage />
      <CurrencySlideshow />
      <OurStory />
      <OurNewsLetter />
      <div className='h-10 bg-white w-full'></div>
      <Footer />
    </div>
  )
}

export default About