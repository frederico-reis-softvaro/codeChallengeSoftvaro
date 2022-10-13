import styled from 'styled-components';

export const BillingStyle = styled.section`
	height: 496px;
	background: #f2f2f2;
	display: grid;
	justify-items: center;

	img {
		width: 984px;
		height: 392px;
	}
	@media screen and (max-width: 1000px) {
		display: none;
	}
`;
