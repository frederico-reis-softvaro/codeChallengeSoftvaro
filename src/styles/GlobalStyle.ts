import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}
	body {
		font-family: 'Inter', sans-serif;
		line-height: 1;
	}
	ol,
	ul {
		list-style: none;
	}
	blockquote,
	q {
		quotes: none;
	}
	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	h1 {
		font-size: 40px;
		font-weight: 500;
		line-height: 48px;
		letter-spacing: -1px;
	}

	h2 {
		font-size: 28px;
		font-weight: 500;
		line-height: 32px;
	}

	h3 {
		font-size: 22px;
		font-weight: 500;
		line-height: 32px;
	}

	h4 {
		font-family: Helvetica Neue;
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
	}

	h5 {
		font-size: 14px;
		font-weight: 500;
		line-height: 20px;
	}

	span {
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
	}

	p {
		font-size: 16px;
		font-weight: 400;
		line-height: 28px;
	}
`;
