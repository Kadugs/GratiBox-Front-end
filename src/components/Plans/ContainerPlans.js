import styled from 'styled-components';

const ContainerPlans = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  word-break: break-all;
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
  min-height: 420px;
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
  min-height: 390px;
  width: 95vw;
  position: relative;
  & > ul {
    padding-left: 20px;
  }
  & li {
    margin-top: 4px;
  }
  select {
    width: 100px;
  }
`;
const Button = styled.button`
  width: ${(props) => (props?.rateButton ? '237px' : '168px')};
  height: ${(props) => (props?.rateButton ? '56px' : '40px')};
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
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)};
`;
const PlanItems = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #e63c80;
  bottom: 8px;
  width: 100%;
`;
const inputStyled = `
font-size: 18px;
  width: 80%;
  border: none;
  margin-bottom: 7px;
  border-radius: 5px;
  padding: 0 10px;
  color: #4d65a8;
  background-color: #e0d1ed9e;
`;
const Input = styled.input`
  ${inputStyled};
  height: 44px;
  width: ${(props) => (!!props.width ? props.width : '80%')};
  &::placeholder {
    color: #4d65a8;
    font-weight: bold;
  }
`;
const Form = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  select {
    ${inputStyled};
    font-weight: bold;
    height: 44px;
    width: ${(props) => (!!props.selectWidth ? props.selectWidth : '80%')};
  }
  .form-city {
    width: 80%;
    display: flex;
    justify-content: space-between;
  }
`;

const CheckboxDiv = styled.div`
  ${inputStyled};
  height: 120px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  span {
    font-weight: bold;
  }
  label:nth-child(1) {
    margin-right: 50px;
  }
  .checkbox {
    height: 15px;
    width: 15px;
    background-color: #eee;
  }
`;
const Error = styled.span`
  color: red;
  font-weight: bold;
  margin-top: 15px;
  font-size: 18px;
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
  SpanRes,
  PlanItems,
  Form,
  CheckboxDiv,
  Error,
  Input
};
