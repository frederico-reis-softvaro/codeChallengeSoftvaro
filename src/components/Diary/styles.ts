import styled from 'styled-components';

export const DiaryStyle = styled.section`
	height: 508px;
	background: #f2f2f2;
	display: grid;
	grid-template-rows: 2px 1fr;
	justify-items: center;

	.diary-content {
		text-align: center;
		margin-top: 96px;
	}
	img {
		width: 216px;
		height: 96px;
	}
	h2 {
		margin-top: 40px;
	}
	.Diary-text {
		width: 784px;
		margin-top: 40px;
	}
	.divider {
		width: 784px;
		border-top: solid 2px #dfdfdf;
	}

	@media screen and (max-width: 1000px) {
		height: 524px;

		.divider {
			width: 328px;
		}

		.diary-content {
			margin-top: 64px;
			width: 360px;
		}
		h2 {
			font-size: 22px;
			margin-top: 24px;
		}
		.Diary-text {
			width: 328px;
			margin-top: 16px;
			margin-left: 16px;
			margin-right: 16px;
		}
	}
`;