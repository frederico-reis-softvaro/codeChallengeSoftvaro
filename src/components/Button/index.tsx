import * as S from './styles';

interface ButtonProps {
	type?: string;
	className?: string;
	title?: string;
}

export const Button: React.FC<ButtonProps> = ({ title }: ButtonProps) => {
	return (
		<S.ButtonStyle>
			<h5>{title}</h5>
		</S.ButtonStyle>
	);
}
