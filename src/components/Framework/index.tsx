import { BrowserRouter as Router, Link } from 'react-router-dom';
import * as S from './styles';

export function Framework() {
	return (
		<S.FrameworkStyle>
			<Router>
				<div className='framework-content'>
					<h2>A framework built for the long term </h2>
					<p className='framework-text'>
						Childcare is for the long term. And you need a framework
						you can count on that gives your share long term
						viability and success. That’s why we’ve defined Hapu
						around our three tribal principles; clearly defined
						process, transparency over money and equality of
						participation.
					</p>
					<Link className='read-link' to='/bridget'>
						<span>
							Read how Hapu’s tribal background defines our app
						</span>
					</Link>
				</div>
			</Router>
		</S.FrameworkStyle>
	);
}