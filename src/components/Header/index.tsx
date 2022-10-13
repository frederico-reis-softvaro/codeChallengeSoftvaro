import { BrowserRouter as Router, Link } from 'react-router-dom';
import * as S from './styles';
import Badge from '../../utils/Badge.svg';
import { Button } from '../Button';

export const Header = () => {
	return (
		<S.HeaderStyle>
			<Router>
				<div className='left-header'>
					<Link className='badge' to='/'>
						<img src={Badge} alt='Badge' />
					</Link>
					<Link className='header-link link1' to='/nanny'>
						<h5>Create Your Nanny Share</h5>
					</Link>
					<Link className='header-link link2' to='/shares'>
						<h5>Browse Shares</h5>
					</Link>
					<Link className='header-link link3' to='/story'>
						<h5>Our Story</h5>
					</Link>
				</div>
				<div className='right-header'>
					<Button
						type='button'
						className='header-button'
						title='Become a Nanny Share Host'
					/>
					<Link className='header-link sign-in' to='/login'>
						<h5>Login</h5>
					</Link>
				</div>
			</Router>
		</S.HeaderStyle>
	);
};
