import { CheckFormDataType } from "../../contexts/CheckoutContext";
import { CheckoutActionsProps, CheckoutActionsType } from "./actions";

export function useCheckoutReducer(state: CheckFormDataType, action: CheckoutActionsProps) {

  switch (action.type) {
    case CheckoutActionsType.POST:
      return {
        ...state,
        location: action.payload.location,
        payment_method: action.payload.payment_method
      };

    default:
      return state
  }
}