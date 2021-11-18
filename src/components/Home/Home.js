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
        <Button>Quero participar</Button>
        <Login>Já sou grato</Login>
      </Bottom>
    </ContainerHome>
  );
}
