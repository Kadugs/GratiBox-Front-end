import {
  ContainerPlans,
  Title,
  Img,
  Text,
  SignDiv,
  PlanInfosDiv,
  Button,
  SpanOption,
  SpanRes
} from './ContainerPlans';
import dayjs from 'dayjs';
import { IoLogOutOutline } from 'react-icons/io5';
import { getPlan } from '../../services/API';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import noPlanImage from '../../assets/image04.jpg';
import planImage from '../../assets/image03.jpg';
export default function Plans() {
  const [isLoading, setisLoading] = useState(true);
  const [plan, setPlan] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('user'));
  function logout() {
    localStorage.removeItem('user');
    navigate('/');
  }
  useEffect(() => {
    getPlan(userInfo?.token)
      .then((response) => {
        console.log(response.data);
        if (response.data?.planType !== null) {
          setPlan(response.data);
        }
        setisLoading(false);
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Houve um erro ao carregar a página',
          confirmButtonText: 'Retornar'
        }).then(() => {
          navigate('/');
        });
      });
  }, []);
  function SignContainer() {
    return (
      <>
        <Text>Você ainda não assinou um plano, que tal começar agora?</Text>
        <SignDiv>
          <Img src={noPlanImage} alt="img" />
          <span>
            Você recebe um box por semana. Ideal para quem quer exercer a
            gratidão todos os dias.
          </span>
          <Link to="/sign-plan">
            <Button>Assinar</Button>
          </Link>
        </SignDiv>
      </>
    );
  }
  function PlanInfosContainer() {
    return (
      <>
        <Text>Agradecer é arte de atrair coisas boas</Text>
        <PlanInfosDiv>
          <Img src={planImage} />
          <ul>
            <li>
              <SpanOption>Plano: </SpanOption>
              <SpanRes>{plan[0]?.planType}</SpanRes>
            </li>
            <li>
              {' '}
              <SpanOption>Data de assinatura: </SpanOption>
              <SpanRes>{dayjs(plan[0]?.date).format('DD/MM/YY')}</SpanRes>
            </li>
            <li>
              {' '}
              <SpanOption>Próximas entregas: </SpanOption>
              <SpanRes>{plan[0]?.planType}</SpanRes>
            </li>
          </ul>
        </PlanInfosDiv>
      </>
    );
  }
  if (isLoading) {
    return <></>;
  }
  return (
    <ContainerPlans>
      <IoLogOutOutline className="logout" onClick={logout} />
      <Title>Bom te ver por aqui, {user?.name}</Title>
      {!plan ? <SignContainer /> : <PlanInfosContainer />}
    </ContainerPlans>
  );
}
