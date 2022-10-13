import styled from 'styled-components';

export const ShareStyle = styled.section`
	display: grid;
	height: 632px;
	background: #f2f2f2;
	justify-items: center;

	.share-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 1184px;
		margin-top: 120px;
	}
	.share-text {
		justify-self: start;
		margin-left: 100px;
		display: flex;
		flex-direction: column;
		width: 445px;
	}
	.share-text h2 {
		margin-bottom: 40px;
	}
	.share-text span {
		margin-bottom: 40px;
	}
	.share-img {
		justify-self: end;
		width: 584px;
		height: 392px;
	}

	.start-link span {
		color: #5e20a4;
		text-decoration: underline;
		text-decoration-color: #5e20a4;
	}

	.tribe-link span {
		color: #5e20a4;
		text-decoration: underline;
		text-decoration-color: #5e20a4;
	}

	@media screen and (max-width: 1000px) {
		height: auto;

		.share-content {
			width: 360px;
			margin-top: 0px;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 270px 1fr;
			grid-template-areas:
				' share-img'
				' share-text ';
		}
		.share-text {
			grid-area: share-text;
			justify-self: center;
			width: 328px;
			margin-left: 16px;
			margin-right: 16px;
			text-align: center;
		}
		.share-img {
			grid-area: share-img;
			margin-top: 64px;
			justify-self: center;
			width: 304px;
			height: 204px;
		}
		.share-text h2 {
			font-size: 22px;
			margin-top: 24px;
			margin-bottom: 16px;
		}
		.share-text span {
			margin-bottom: 24px;
		}
		.start-link {
			margin-bottom: 64px;
		}
	}
`;
