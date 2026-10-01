import styled from 'styled-components';

export const Container = styled.div`
max-width: 1280px;
width: 100%;
margin: auto;
`;

export const ScrollProgress = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10000;
	width: 100%;
	height: 3px;
	background: ${(props) => props.theme.colors.accent1};
	transform: scaleX(0);
	transform-origin: left center;
	pointer-events: none;
`;
