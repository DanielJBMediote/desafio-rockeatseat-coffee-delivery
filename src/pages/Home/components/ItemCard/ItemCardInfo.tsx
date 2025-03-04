import { Paragraph } from "../../../../components/Text";

interface ItemCardInfoProps {
  title: string
  description: string
}

export function ItemCardInfo({ title, description }: ItemCardInfoProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-0.5 text-center -translate-y-6'>
      <Paragraph fontWeight='bold' fontColor='subtitle'>{title}</Paragraph>
      <Paragraph fontSize='xs' fontColor='label'>{description}</Paragraph>
    </div>
  )
}