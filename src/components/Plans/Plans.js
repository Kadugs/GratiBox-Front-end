import { ContainerPlans, Title } from './ContainerPlans';
import dayjs from 'dayjs';
import { IoLogOutOutline } from 'react-icons/io5';
import { getPlan } from '../../services/API';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import NoPlanScreen from './NoPlanScreen';
import PlanInfosContainer from './PlanInfosContainer';

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
        if (response.data[0]?.planType !== null) setPlan(response.data);
        console.log(response.data[0]);
        setisLoading(false);
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Houve um erro ao carregar a página',
          confirmButtonText: 'Retornar'
        }).then(() => {
          localStorage.removeItem('user');
          navigate('/');
        });
      });
  }, []);
  if (isLoading) {
    return <></>;
  }
  return (
    <ContainerPlans>
      <IoLogOutOutline className="logout" onClick={logout} />
      <Title>Bom te ver por aqui, {user?.name}</Title>
      {!plan ? <NoPlanScreen /> : <PlanInfosContainer plan={plan} />}
    </ContainerPlans>
  );
}
