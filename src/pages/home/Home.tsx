
import Empower from "./components/Empower"
import "../../index.css"
import AsFeatured from "./components/AsFeatured"
import Challenges from "./components/Challenges"
import GetFunded from "./components/GetFunded"
import TradingJourney from "./components/TradingJourney"
import CompetitiveSpreads from "./components/CompetitiveSpreads"
import CurrencySlideshow from "../../components/CurrencySlideshow"
import OurNewsLetter from "../../components/OurNewsLetter"
import {Helmet} from "react-helmet"
import Table from "./components/Table"
import Faq from "../../components/FAQ"
import Footer from "../../components/footer/Footer"
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