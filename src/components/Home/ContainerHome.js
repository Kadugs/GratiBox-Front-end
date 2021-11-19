import styled from 'styled-components';

const ContainerHome = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	a {
		text-decoration: none;
		height: 100%;
	}
`;
const Title = styled.h1`
	padding: 55px 0 45px 0;
`;
const Text = styled.span`
	padding: 20px 30px;
	text-align: center;
	font-weight: 300;
	font-size: 18px;
`;

const Img = styled.img`
	width: 100vw;
	height: auto;
`;
const Bottom = styled.div`
	background-color: #4d65a8;
	width: 100vw;
	height: 23vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Button = styled.button`
	width: 200px;
	height: 45px;
	font-size: 18px;
	margin-top: 20px;
`;
const Login = styled.span`
	text-decoration: none;
	font-weight: bold;
	padding: 20px 0;
	color: white;
`;

export { ContainerHome, Title, Text, Img, Button, Login, Bottom };
