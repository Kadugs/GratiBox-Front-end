import { Text, SignDiv, Img, Button } from './ContainerPlans';
import { Link } from 'react-router-dom';
import noPlanImage from '../../assets/image04.jpg';

export default function SignContainer() {
  return (
    <>
      <Text>Você ainda não assinou um plano, que tal começar agora?</Text>
      <SignDiv>
        <Img src={noPlanImage} alt="img" />
        <span>
          Você recebe um box por semana. Ideal para quem quer exercer a gratidão
          todos os dias.
        </span>
        <Link to="/sign-plan">
          <Button>Assinar</Button>
        </Link>
      </SignDiv>
    </>
  );
}
