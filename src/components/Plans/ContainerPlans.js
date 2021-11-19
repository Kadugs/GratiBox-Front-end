import styled from 'styled-components';

const ContainerPlans = styled.div`
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
const Text = styled.span`
  padding: 20px 30px;
  font-weight: 300;
  font-size: 18px;
`;
const Img = styled.img`
  width: 90vw;
  height: 220px;
  object-fit: cover;
  border-radius: 10px;
`;
const SignDiv = styled.div`
  margin-top: 30px;
  border-radius: 25px;
  height: 420px;
  width: 95vw;
  background-color: #e5cdb3;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    color: #4d65a8;
    font-weight: bold;
    padding: 20px 80px 20px 40px;
    font-size: 18px;
    line-height: 21px;
  }
`;
const Button = styled.button`
  width: 168px;
  height: 40px;
  font-size: 24px;
  margin-top: 20px;
`;
export { ContainerPlans, Title, Text, Img, SignDiv, Button };
