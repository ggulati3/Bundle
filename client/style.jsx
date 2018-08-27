import styled from 'styled-components';

export const MainPage = styled.div `
	border: none;
	margin: 0;
    padding: 0;
    height:98vh;
    width: 98vw;
    text-align: center;
	display:flex;
	flex-wrap: wrap;
`;

export const Nav = styled.div `
	width: 98vw;
	height: 10vh;
	border: solid;
	z-index:1;
	border-color: #336699;
	background-color:#336699 ;
`

export const SignIn = styled.div `
	flex-direction: row;
	border: solid;
	border-color: gray;
	height: 60vh;
	width: 25vw;
	margin: auto;
	margin-right: 90px;
	margin-bottom: 10%
	font-family: Bevan;

`

export const Input = styled.input`
	display:flex;
	flex-direction: row;
	border: 1px solid;
	margin: auto;
	padding: 10px;
	width: 20vw;
	font-family: Bevan;
`

export const EmailInfo = styled.h3 `
	align: left;
	font-family: Bevan;
`
