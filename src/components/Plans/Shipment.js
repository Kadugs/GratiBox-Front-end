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
import SelectStates from './SelectStates';
import { createPlan } from '../../services/API';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Shipment() {
  const userInfo = JSON.parse(localStorage.getItem('user'));
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [cep, setCep] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const { plan } = useContext(SignPlanContext);
  const navigate = useNavigate();

  function sendPlan() {
    if (!name || !address || !cep || !city || !state) {
      setErrorMessage('Preencha todos os campos');
      return;
    }
    if (cep.length !== 8 || Number(cep) != cep) {
      setErrorMessage('CEP inválido (digite somente números)');
      return;
    }
    setErrorMessage('');
    const shipmentBody = {
      name,
      address,
      cep,
      city,
      state
    };
    const body = {
      ...plan,
      shipment: shipmentBody
    };
    createPlan(body, userInfo.token)
      .then(() => {
        Swal.fire({
          title: 'Parabéns!',
          text: 'Agora você faz parte do nosso círculo de gratidão!',
          confirmButtonText: 'Ótimo!'
        }).then(() => {
          navigate('/plans');
        });
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Desculpe...',
          text: 'Algo deu errado ao criar o seu plano, tente novamente mais tarde :)',
          confirmButtonText: 'Ótimo!'
        }).then(() => {
          localStorage.removeItem('user');
          navigate('/');
        });
      });
  }

  return (
    <ContainerPlans>
      <Title>Bom te ver por aqui, {userInfo.name}</Title>
      <Text>"Agradecer é arte de atrair coisas boas"</Text>
      <PlanInfosDiv>
        <Img src={planImage} />
        <Form selectWidth="35%">
          <Input
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Endereço de entrega"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            placeholder="CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <div className="form-city">
            <Input
              width="62%"
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <SelectStates setState={setState} state={state} />
          </div>
        </Form>
      </PlanInfosDiv>
      <Button onClick={sendPlan}>Finalizar</Button>
      <Error>{errorMessage}</Error>
    </ContainerPlans>
  );
}
