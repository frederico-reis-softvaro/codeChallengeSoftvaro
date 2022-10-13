import { BrowserRouter as Router, Link } from 'react-router-dom';
import CalendarIcon from '../../utils/CalendarIcon.svg';
import * as S from './styles';

export function Host() {
	return (
		<S.HostStyle>
			<Router>
				<div className='host-content'>
					<h2>Become a nanny share host </h2>
					<p>Takes less than 5 minutes to get started</p>
					<Link className='create-link' to='/login'>
						<button type='button' className='host-button'>
							<img
								className='calendar-icon'
								src={CalendarIcon}
								alt='Nanny Share Calendar Button'
							/>
							<span className='button-text'>
								Create your nanny share
							</span>
							<span className='button-subtext'>
								Takes less than 5 minutes
							</span>
						</button>
					</Link>
					<Link to='/browse'>
						<span className='host-link'>
							Or browse local nanny-shares
						</span>
					</Link>
				</div>
			</Router>
		</S.HostStyle>
	);
}