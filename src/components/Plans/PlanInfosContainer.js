import {
  Text,
  PlanInfosDiv,
  Img,
  SpanOption,
  SpanRes,
  PlanItems,
  Button
} from './ContainerPlans';
import planImage from '../../assets/image03.jpg';
import dayjs from 'dayjs';

export default function PlanInfosContainer({ plan }) {
  return (
    <>
      <Text>"Agradecer é arte de atrair coisas boas"</Text>
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
            <SpanOption>
              Próximas entregas: <br />
            </SpanOption>
            {plan[0].shipmentDates.map((item) => (
              <SpanRes marginLeft="40px">
                {dayjs(item).format('DD/MM/YY')}
              </SpanRes>
            ))}
          </li>
        </ul>
        <PlanItems>
          {plan?.map((item) => {
            let product = '';
            item.productName === 'tea'
              ? (product = 'Chá')
              : item.productName === 'incense'
              ? (product = 'Incensos')
              : (product = 'Produtos Orgânicos');

            return <span>{product}</span>;
          })}
        </PlanItems>
      </PlanInfosDiv>
      <Button rateButton={true}>Avaliar entregas</Button>
    </>
  );
}
