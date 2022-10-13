import * as S from './styles';
import {
	Billing,
	Booking,
	Diary,
	Footer,
	Framework,
	Hero,
	Host,
	Header,
	Share,
	Payment
} from '../../components';

const LandingPage = () => {
	return (
		<S.LandingPageStyle>
			<Header />
			<Hero />
			<Booking />
			<Share />
			<Payment />
			<Framework />
			<Billing />
			<Diary />
			<Host />
			<Footer />
		</S.LandingPageStyle>
	);
};
export default LandingPage;
