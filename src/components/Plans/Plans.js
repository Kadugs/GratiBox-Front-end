import {
  ContainerPlans,
  Title,
  Img,
  Text,
  SignDiv,
  Button
} from './ContainerPlans';
import { getPlan } from '../../services/API';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import image from '../../assets/image04.jpg';
export default function Plans() {
  const [isLoading, setisLoading] = useState(true);
  const [havePlan, setHavePlan] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    getPlan(userInfo?.token)
      .then((response) => {
        setisLoading(false);
        if (response.data?.planType !== null) {
          setHavePlan(true);
        }
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
          <Img src={image} alt="img" />
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
  if (isLoading) {
    return <></>;
  }
  return (
    <ContainerPlans>
      <Title>Bom te ver por aqui, @{user?.name}</Title>
      {havePlan ? <SignContainer /> : null}
    </ContainerPlans>
  );
}
