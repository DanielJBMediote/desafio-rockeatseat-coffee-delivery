import { PropsWithChildren } from "react"
import { Paragraph, ParagraphProps } from "../../../components/Text"
import { formatPrice2String } from "../../Home/components/ItemCard/Footer/ItemCardFooterPrice"

function Root({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-4">
      {children}
    </div>
  )
}


interface PriceLabelProps extends Pick<ParagraphProps, "fontSize" | "fontWeight"> {
  label: string
  price: number
}

function PriceLabel({ label, price, ...rest }: PriceLabelProps) {

  const formattedValue = formatPrice2String(price)

  return (
    <div className="flex justify-between items-start">
      <Paragraph {...rest}>{label}</Paragraph>
      <Paragraph {...rest}>R$ {formattedValue}</Paragraph>
    </div>
  )
}

interface ActionProps {
  onClick: () => void
}


function Action({ ...rest }: ActionProps) {
  return (
    <button
      type="submit"
      className="rounded px-2 py-3 bg-yellow hover:bg-yellow-dark uppercase cursor-pointer font-bold text-sm text-base-button "
      {...rest}
    >
      Confirmar pedido
    </button>
  )
}

export const CheckoutFooter = {
  Root, PriceLabel, Action
}