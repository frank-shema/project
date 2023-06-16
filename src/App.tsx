import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Evaluations from './pages/evaluations/Evaluations'
import Affiliates from './pages/affiliates/Affiliates'
import Contact from './pages/contactUs/Contact'
import About from './pages/about/About'
import { Helmet } from 'react-helmet'
import Faqs from './pages/faqs/Faqs'
import TermsService from './pages/terms-and-service/TermsService'
import PrivacyPolicy from './pages/privacy-policy/Privacy-policy'
import RefundPolicy from './pages/refund-polic/RefundPolicy'

function App() {

	return (
		<div>
			<Helmet>
				<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
			</Helmet>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/evaluations' element={<Evaluations />} />
					<Route path='/affiliates' element={<Affiliates />} />
					<Route path='/contact-us' element={<Contact />} />
					<Route path='/about-us' element={<About />} />
					<Route path='/faqs' element={<Faqs />} />
					<Route path='/terms-and-service' element={<TermsService />} />
					<Route path='/privacy-policy' element={<PrivacyPolicy />} />
					<Route path='/refund-policy' element={<RefundPolicy />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
