import styled from 'styled-components';

export const BookingStyle = styled.section`
	height: 112px;
	display: flex;
	justify-content: center;
	align-items: center;

	.profile-img {
		width: 56px;
		height: 56px;
		margin-right: 32px;
	}
	.action-link span {
		color: #5e20a4;
		text-decoration: underline;
		text-decoration-color: #5e20a4;
	}
	@media screen and (max-width: 1000px) {
		height: 216px;

		flex-direction: column;

		.profile-img {
			margin-right: 0px;
			margin-bottom: 16px;
		}

		.action-link {
			text-align: center;
			margin-bottom: 12px;
			width: 212px;
		}
		h4 {
			font-size: 14px;
			line-height: 20px;
			text-align: center;
		}
	}
`;
