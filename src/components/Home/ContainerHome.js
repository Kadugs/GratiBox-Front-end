import styled from "styled-components";

const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.span`
  font-size: 28px;
  font-weight: bold;
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
  background-color: #4D65A8;
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
  font-weight: bold;
  color: white;
  background-color: #8C97EA;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
`;
const Login = styled.span`
  font-weight: bold;
  padding: 20px 0;
`;

export { ContainerHome, Title, Text, Img, Button, Login, Bottom };
