import styled from 'styled-components';

const ContainerPlans = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  word-break: break-all;
  padding: 0 max(20px) 0 max(20px);
  a {
    text-decoration: none;
    margin-top: 20px;
  }
  .logout {
    position: fixed;
    top: 10px;
    right: 10px;
    font-size: 20px;
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
const PlanInfosDiv = styled.div`
  background-color: white;
  border-radius: 10px;
  height: 390px;
`;
const Button = styled.button`
  width: 168px;
  height: 40px;
  font-size: 24px;
  margin-top: 20px;
`;
const SpanOption = styled.span`
  color: #4d65a8;
  font-weight: bold;
`;
const SpanRes = styled.span`
  color: #e63c80;
  font-weight: bold;
`;
export {
  ContainerPlans,
  Title,
  Text,
  Img,
  SignDiv,
  Button,
  PlanInfosDiv,
  SpanOption,
  SpanRes
};
