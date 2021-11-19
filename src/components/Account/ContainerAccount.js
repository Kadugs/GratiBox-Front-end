import styled from 'styled-components';

const ContainerAccount = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	a {
		text-decoration: none;
		margin-top: 20px;
	}
`;
const Title = styled.h1`
	padding: 100px 0 40px 0;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 320px;
	margin-bottom: 20px;
`;
const Input = styled.input`
	width: 325px;
	height: 64px;
	border: solid 1px #604848;
	border-radius: 10px;
	margin-bottom: 8px;
	padding-left: 17px;
	font-size: 24px;
	font-weight: bold;
	color: #604848;
	&::placeholder {
		font-weight: bold;
		color: #60484866;
		font-size: 24px;
	}
`;

const Button = styled.button`
	width: 237px;
	height: 56px;
	font-size: 34px;
	margin-top: ${(props) => (props?.screen === 'login' ? '150px' : '10px')};
`;
const Error = styled.span`
	color: red;
`;

const ChangePage = styled.span`
	text-decoration: none;
	font-weight: bold;
	padding: 20px 0;
	color: white;
`;
export { ContainerAccount, Title, Form, Input, Button, ChangePage, Error };
