import { BrowserRouter as Router, Link } from 'react-router-dom';
import ProfileImage from '../../utils/ProfileImage.svg';
import * as S from './styles';

export function Booking() {
	return (
		<S.BookingStyle>
			<Router>
				<img
					className='profile-img'
					src={ProfileImage}
					alt='User Profile'
				/>
				<Link className='action-link' to='/action'>
					<span>Sarah’s day care available now in North Sydney</span>
				</Link>
				<h4>Wednesday, Thursday, Friday - 7:30 - 5:30</h4>
			</Router>
		</S.BookingStyle>
	);
}
