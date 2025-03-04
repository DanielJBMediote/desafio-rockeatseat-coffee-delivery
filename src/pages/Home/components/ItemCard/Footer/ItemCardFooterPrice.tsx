import { Paragraph, Title } from "../../../../../components/Text";

interface ItemCardFooterPrice {
  value: number;
}

export function ItemCardFooterPrice({ value }: ItemCardFooterPrice) {

  const formattedValue = formatPrice2String(value);

  return (
    <div className='flex gap-0.5 justify-center items-end'>
      <Paragraph fontSize='xs'>R$</Paragraph>
      <Title fontColor='subtitle' fontWeight='extrabold' fontSize='lg'>{formattedValue}</Title>
    </div>
  )
}

export function formatPrice2String(value: number) {
  return value.toFixed(2).replace('.', ',');
}