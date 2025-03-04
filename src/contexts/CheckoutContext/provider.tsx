import { PropsWithChildren, useEffect, useReducer } from "react";
import { CheckFormDataType, CheckoutContext } from ".";
import { useCheckoutReducer } from "../../reducer/Checkout";
import { submitCheckoutData } from "../../reducer/Checkout/actions";


export function CheckoutProvider({ children }: PropsWithChildren) {
  const [checkoutState, dispatch] = useReducer(useCheckoutReducer, {
    location: null, payment_method: null
  }, (initialState) => {

    const dataJSON = localStorage.getItem('@coffee-delivery:checkout-state-v1.0.0')
    if (dataJSON) {
      return JSON.parse(dataJSON);
    }
    return initialState;
  })

  function onSubmit(data: CheckFormDataType) {
    dispatch(submitCheckoutData(data));
  }

  useEffect(() => {
    const dataJSON = JSON.stringify(checkoutState)
    localStorage.setItem('@coffee-delivery:checkout-state-v1.0.0', dataJSON)
  }, [checkoutState])

  return (
    <CheckoutContext.Provider value={{ checkoutState, onSubmit }}>
      {children}
    </CheckoutContext.Provider>
  )
}