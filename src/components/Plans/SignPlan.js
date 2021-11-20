import {
  ContainerPlans,
  Title,
  Text,
  PlanInfosDiv,
  Img,
  Form,
  CheckboxDiv,
  Button,
  Error
} from './ContainerPlans';
import planImage from '../../assets/image03.jpg';
import { useState, useContext } from 'react';
import SignPlanContext from '../../contexts/SignPlanContext';
import { useNavigate } from 'react-router-dom';

export default function SignPlan() {
  const userInfo = JSON.parse(localStorage.getItem('user'));
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedShipment, setSelectedShipment] = useState('');
  const [checkedTea, setCheckedTea] = useState(false);
  const [checkedIncense, setCheckedIncense] = useState(false);
  const [checkedOrganics, setCheckedOrganics] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { setPlan } = useContext(SignPlanContext);
  const navigate = useNavigate();

  function createPlan() {
    if (selectedPlan === '') {
      setErrorMessage('Selecione um plano e um dia de entrega');
      return;
    }
    if (selectedShipment === '') {
      setErrorMessage('Selecione o dia de entrega');
      return;
    }
    if (
      ![checkedTea, checkedOrganics, checkedIncense].some(
        (item) => item === true
      )
    ) {
      setErrorMessage('Selecione ao menos um produto');
      return;
    }
    setErrorMessage('');
    const body = {
      plan: selectedPlan,
      shipment: selectedShipment,
      products: {
        tea: checkedTea,
        incense: checkedIncense,
        organics: checkedOrganics
      }
    };
    setPlan({ signPlan: body });
    navigate('/sign-plan/shipment');
  }

  return (
    <ContainerPlans>
      <Title>Bom te ver por aqui, {userInfo.name}</Title>
      <Text>"Agradecer é arte de atrair coisas boas"</Text>
      <PlanInfosDiv>
        <Img src={planImage} />
        <Form>
          <select
            name="Plano"
            value={selectedPlan}
            onChange={(e) => setSelectedPlan(e.target.value)}
          >
            <option value="" disabled hidden>
              Plano
            </option>
            <option value="Mensal">Mensal</option>
            <option value="Semanal">Semanal</option>
          </select>
          <select
            name="Entrega"
            value={selectedShipment}
            onChange={(e) => setSelectedShipment(e.target.value)}
          >
            <option value="" disabled hidden>
              Entrega
            </option>
            {selectedPlan === '' ? (
              <option value="" disabled>
                Primeiro selecione o plano :)
              </option>
            ) : selectedPlan === 'Mensal' ? (
              <>
                <option value="01">01</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </>
            ) : (
              <>
                <option value="Segunda">Segunda</option>
                <option value="Quarta">Quarta</option>
                <option value="Sexta">Sexta</option>
              </>
            )}
          </select>
          <CheckboxDiv>
            <span>Quero receber</span>
            <br />
            <label>
              <input
                className="checkbox"
                type="checkbox"
                onChange={(e) => {
                  setCheckedTea(e.target.checked);
                }}
              />
              Chás
            </label>
            <label>
              <input
                className="checkbox"
                type="checkbox"
                onChange={(e) => setCheckedIncense(e.target.checked)}
              />
              Incensos
            </label>
            <label>
              <input
                className="checkbox"
                type="checkbox"
                onChange={(e) => setCheckedOrganics(e.target.checked)}
              />
              Produtos Orgânicos
            </label>
          </CheckboxDiv>
        </Form>
      </PlanInfosDiv>
      <Button onClick={createPlan}>Próximo</Button>
      <Error>{errorMessage}</Error>
    </ContainerPlans>
  );
}
