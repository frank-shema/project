import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/Navbar'
import Evaluations from './pages/evaluations/Evaluations'
import Affiliates from './pages/affiliates/Affiliates'
import Contact from './pages/contactUs/Contact'
import About from './pages/about/About'
import { Helmet } from 'react-helmet'
import Terms from './components/information/Terms'

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
				</Routes>
			</Router>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/terms' element={<Terms />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
