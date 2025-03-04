import { CheckFormDataType } from "../../contexts/CheckoutContext";

export enum CheckoutActionsType {
  POST = "POST",
  // UPDATE = "UPDATE"
}

export interface CheckoutActionsProps {
  type: CheckoutActionsType
  payload: CheckFormDataType
}

export function submitCheckoutData(data: CheckFormDataType) {
  return { type: CheckoutActionsType.POST, payload: data };
}

