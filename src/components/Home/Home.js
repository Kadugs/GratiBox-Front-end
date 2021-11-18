import image from "../../assets/image05.webp";

import {
  ContainerHome,
  Title,
  Text,
  Img,
  Button,
  Login,
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
      <Button></Button>
      <Login></Login>
    </ContainerHome>
  );
}
