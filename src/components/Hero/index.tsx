import { BrowserRouter as Router } from 'react-router-dom';
import * as S from './styles';
import ImgHero from '../../images/ImageHeader.png';
import { VariantA } from '../../ABtest';

export function Hero() {
	return (
		<S.HeroStyle>
			<Router>
				<div className='hero-content'>
					<div className='hero-text'>
						<VariantA>
							<h1>
								Easily create or join a local nanny share with
								Hapu
							</h1>
							<h2>
								Hapu is Airbnb for nanny share. Share your home,
								nanny and costs and create new flexible,
								affordable solutions in childcare.
							</h2>
						</VariantA>
					</div>
					<img
						className='img-hero'
						src={ImgHero}
						alt="Hapu's Console"
					/>
				</div>
			</Router>
		</S.HeroStyle>
	);
}
