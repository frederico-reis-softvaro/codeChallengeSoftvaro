import { Link } from 'react-router-dom';
import * as S from './styles';
import PlayButton from '../../utils/PlayButton.svg';

interface VariantBProps {
	clickAction: () => void;
}

const VariantB = ({ clickAction }: VariantBProps) => {
	return (
		<S.VariantBStyle>
			<h1>Create the childcare you need at a price you can afford</h1>
			<h2>
				Connect with other local families to share a nanny from as low
				as $10.00/hr each. Create your family profile today to get
				started.
			</h2>
			<Link onClick={clickAction} className='play-button' to='/play'>
				<img src={PlayButton} alt='Play Button' />
				<span>See hapu in action (27 seconds)</span>
			</Link>
		</S.VariantBStyle>
	);
};
export default VariantB;
