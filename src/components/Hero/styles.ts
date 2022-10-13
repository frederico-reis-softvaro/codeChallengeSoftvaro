import styled from 'styled-components';

export const HeroStyle = styled.section`
height: 616px;
display: grid;
justify-items: center;
background: linear-gradient(175deg, #5912ac, #7e49c3, #c86dd7),
	url(/Image.png);
object-fit: cover;
background-blend-mode: overlay;
background-size: cover;
place-self: center stretch;

.hero-content {
	display: grid;
	width: 1184px;
	grid-template-columns: 1fr 1fr;
	color: #ffffff;
}
.hero-text {
	margin-top: 200px;
}
.img-hero {
	width: 316px;
	height: 290px;
	margin-right: 100px;
	margin-top: 170px;
	justify-self: end;
}

@media screen and (max-width: 1000px) {
	height: 540px;
	background-position: left 756px bottom 0px;

	.hero-content {
		display: grid;
		width: 328px;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		color: #ffffff;
		margin-top: 0px;
	}
	.hero-text {
		margin-top: 152px;
	}
	.img-hero {
		display: none;
	}
}
`;

