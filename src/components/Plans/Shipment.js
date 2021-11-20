import {
  ContainerPlans,
  Title,
  Text,
  PlanInfosDiv,
  Img,
  Form,
  Input,
  Button,
  Error
} from './ContainerPlans';
import planImage from '../../assets/image03.jpg';
import { useState, useContext } from 'react';
import SignPlanContext from '../../contexts/SignPlanContext';
export default function Shipment() {
  const userInfo = JSON.parse(localStorage.getItem('user'));
  const [errorMessage, setErrorMessage] = useState('');
  const { setPlan } = useContext(SignPlanContext);

  function sendPlan() {}

  return (
    <ContainerPlans>
      <Title>Bom te ver por aqui, {userInfo.name}</Title>
      <Text>"Agradecer é arte de atrair coisas boas"</Text>
      <PlanInfosDiv>
        <Img src={planImage} />
        <Form>
          <Input />
        </Form>
      </PlanInfosDiv>
      <Button onClick={sendPlan}>Finalizar</Button>
      <Error>{errorMessage}</Error>
    </ContainerPlans>
  );
}
