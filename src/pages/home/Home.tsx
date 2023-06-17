
import Empower from "./components/Empower"
import "../../index.css"
import AsFeatured from "./components/AsFeatured"
import Challenges from "./components/Challenges"
import GetFunded from "./components/GetFunded"
import TradingJourney from "../../components/TradingJourney"
import CurrencySlideshow from "../../components/CurrencySlideshow"
import OurNewsLetter from "../../components/OurNewsLetter"
import {Helmet} from "react-helmet"
import Faq from "../../components/FAQ"
import CompetitiveSpreads from "../../components/CompetitiveSpreads"
import Table from "../../components/Table"
import Footer from "../../components/Footer"
const Home = () => {
	return (
		<div className="w-full overflow-x-hidden ">
			<Helmet>
				<title>Ox Trade | Home</title>
			</Helmet>
			<Empower />
			<CurrencySlideshow />
			<AsFeatured />
			<Challenges />
			<Table />
			<GetFunded />
			<TradingJourney />
			<CompetitiveSpreads />
			<OurNewsLetter />
			<Faq />
			<Footer />
		</div >
	)
}

export default Home