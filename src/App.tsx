import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Evaluations from './pages/evaluations/Evaluations'
import Affiliates from './pages/affiliates/Affiliates'
import Contact from './pages/contactUs/Contact'
import About from './pages/about/About'
import { Helmet } from 'react-helmet'
import RefundPolicy from './pages/refund-policy/RefundPolicy'
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy'
import TermsService from './pages/terms-service/TermsService'
import FaqOne from './pages/faq/FaqOne'
import Navbar from './components/Navbar'

function App() {

	return (
		<div>
			<Helmet>
				<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
			</Helmet>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/evaluations' element={<Evaluations />} />
					<Route path='/affiliates' element={<Affiliates />} />
					<Route path='/contact-us' element={<Contact />} />
					<Route path='/about-us' element={<About />} />
					<Route path='/faq' element={<FaqOne/>} />
					<Route path='/terms-service' element={<TermsService />} />
					<Route path='/privacy-policy' element={<PrivacyPolicy />} />
					<Route path='/refund-policy' element={<RefundPolicy />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
