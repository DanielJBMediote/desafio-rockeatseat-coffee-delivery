import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useContext } from "react";
import { BaseCard } from "../../components/BaseCard";
import { Paragraph, Title } from "../../components/Text";
import { CheckoutContext } from "../../contexts/CheckoutContext";
import { formatTrackTagLocationHTML, formatTrackTagPaymentHTML, formatTrackTagTimerHTML } from "../../helpers";
import { Tag } from "../Home/components/Tag";

export function Tracking() {

  const { checkoutState } = useContext(CheckoutContext)
  const { location, payment_method } = checkoutState

  const TrackMapElement = formatTrackTagLocationHTML({ ...location })

  const TrackTimerElement = formatTrackTagTimerHTML({
    initialTime: 20, finalTime: 40
  })

  const TrackPaymentElement = formatTrackTagPaymentHTML({ payment_method })

  return (
    <div className="flex items-center justify-center gap-10 pt-10">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <Title fontColor="yellow-dark">Uhu! Pedido confirmado</Title>
          <Paragraph >Agora é só aguardar que logo o café chega até você</Paragraph>
        </div>
        <BaseCard className="bg-transparent flex flex-col gap-8 p-10 border border-t-yellow border-l-yellow border-b-purple border-r-purple">
          <Tag
            icon={MapPin}
            tagColor="purple"
            description={TrackMapElement}
          />
          <Tag
            icon={Timer}
            tagColor="yellow"
            description={TrackTimerElement}
          />
          <Tag
            icon={CurrencyDollar}
            tagColor="yellow-dark"
            description={TrackPaymentElement}
          />
        </BaseCard>
      </div>
      <img src="src/assets/Illustration.svg" alt="" />
    </div>
  )
}