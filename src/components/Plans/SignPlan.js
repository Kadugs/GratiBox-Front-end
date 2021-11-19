import { ContainerPlans, Title } from './ContainerPlans';
export default function SignPlan() {
  const userInfo = JSON.parse(localStorage.getItem('user'));

  return (
    <ContainerPlans>
      <Title>Bom te ver por aqui, {userInfo.name}</Title>
    </ContainerPlans>
  );
}
