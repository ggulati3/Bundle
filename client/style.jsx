import styled from 'styled-components';

export const MainPage = styled.div `
	border: solid;
	margin: 0;
    padding: 0;
    height:98vh;
    width: 98vw;
    text-align: center;
	display:flex;
	flex-wrap: wrap
`;

export const Nav = styled.div `
	width: 98vw;
	height: 10vh;
	border: solid;
	border-color: red;
	z-index:1;
	flex-direction: row;
`

export const SignIn = styled.div `
	flex-direction: row;
	border: solid;
	border-color: gray;
	height: 60vh;
	width: 25vw;
	margin: auto;
	margin-bottom: 10%
	align-self: auto;
	justify-content: center;

`