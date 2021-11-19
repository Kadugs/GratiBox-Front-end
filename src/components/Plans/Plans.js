import { ContainerPlans, Title } from './ContainerPlans';
import dayjs from 'dayjs';
import { IoLogOutOutline } from 'react-icons/io5';
import { getPlan } from '../../services/API';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SignContainer from './SignContainer';
import PlanInfosContainer from './PlanInfosContainer';

export default function Plans() {
  const [isLoading, setisLoading] = useState(true);
  const [plan, setPlan] = useState(null);
  const [nextDate, setNextDate] = useState('');
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
        if (response.data[0]?.planType !== null) {
          setPlan(response.data);
          const dates = nextDeliveries({
            day: response.data[0].day,
            planType: response.data[0].planType
          });
          setNextDate();
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
  function nextDeliveries({ day, planType }) {
    let next = '';
    if (planType === 'mensal') {
      if (dayjs().get('date') > Number(day)) {
        next = dayjs(`${day}/11/21`).add(1, 'month').format('DD/MM/YYYY');
      } else {
        next = dayjs(`${day}/11/21`);
      }
      if (dayjs(next).get('day') === 0) {
        next = dayjs(next).add(1, 'day');
      } else if (dayjs(next).get('day') === 6) {
        next = dayjs(next).add(2, 'day');
      }
      return (
        <ul>
          <li>
            <span>{next}</span>
          </li>
        </ul>
      );
    } else {
      return '';
    }
  }
  if (isLoading) {
    return <></>;
  }
  return (
    <ContainerPlans>
      <IoLogOutOutline className="logout" onClick={logout} />
      <Title>Bom te ver por aqui, {user?.name}</Title>
      {!plan ? (
        <SignContainer />
      ) : (
        <PlanInfosContainer plan={plan} nextDate={nextDate} />
      )}
    </ContainerPlans>
  );
}
