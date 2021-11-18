import image from "../../assets/image05.webp";
import {
  ContainerHome,
  Title,
  Text,
  Img,
  Button,
  Login,
  Bottom,
} from "./ContainerHome";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <ContainerHome>
      <Title>Bem vindo ao GratiBox</Title>
      <Text>
        Receba em casa um box com chás, produtos orgânicos, incensos e muito
        mais...
      </Text>
      <Img src={image} />
      <Bottom>
        <Link to="/sign-up">
          <Button>Quero participar</Button>
        </Link>
        <Link to="/sign-in">
          <Login>Já sou grato</Login>
        </Link>
      </Bottom>
    </ContainerHome>
  );
}
