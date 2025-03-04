import { JSX } from "react";
import { PaymentMethod } from "../@types/paymentMethods";

interface TrackTagLocationProps {
  street?: string, number?: string, neighborhood?: string, city?: string, uf?: string
}

export function formatTrackTagLocationHTML({ city, neighborhood, number, street, uf }: TrackTagLocationProps): JSX.Element {

  city = city ?? "Bolinho"
  neighborhood = neighborhood ?? "Bairro dos Bolinhos"
  street = street ?? "Rua dos Bolinhos"
  uf = uf ?? "MG"
  number = number ?? "123"

  return (
    <div className="flex flex-col gap-0.5 text-base-text">
      <p>Entrega em <strong>{street}, {number}</strong></p>
      <p>{neighborhood} - {city}, {uf}</p>
    </div>
  )
}

interface TrackTagTimerProps {
  initialTime: number, finalTime: number
}

export function formatTrackTagTimerHTML({ finalTime, initialTime }: TrackTagTimerProps): JSX.Element {

  return (
    <div className="flex flex-col gap-0.5 text-base-text">
      <p>Previsão de entrega</p>
      <strong>{initialTime} min - {finalTime} min</strong>
    </div>
  )
}

interface TrackTagPaymentProps {
  payment_method: PaymentMethod | null
}
const paymentMethodDictionary: Record<PaymentMethod, string> = {
  [PaymentMethod.CREDIT_CARD]: "Cartão de crédito",
  [PaymentMethod.DEBIT_CARD]: "Cartão de débito",
  [PaymentMethod.MONEY]: "Dinheiro",
};

export function formatTrackTagPaymentHTML({ payment_method }: TrackTagPaymentProps): JSX.Element {

  payment_method = payment_method ?? PaymentMethod.CREDIT_CARD

  return (
    <div className="flex flex-col gap-0.5 text-base-text">
      <p>Pagamento na entrega</p>
      <strong>{paymentMethodDictionary[payment_method]}</strong>
    </div>
  )
}