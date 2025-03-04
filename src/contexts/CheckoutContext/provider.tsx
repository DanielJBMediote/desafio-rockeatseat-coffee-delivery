import { PropsWithChildren, useContext, useEffect, useReducer } from "react";
import { CheckFormDataType, CheckoutContext } from ".";
import { useCheckoutReducer } from "../../reducer/Checkout";
import { submitCheckoutData } from "../../reducer/Checkout/actions";
import { CoffeeDeliveryContext } from "../CoffeDeliveryContext";


export function CheckoutProvider({ children }: PropsWithChildren) {

  const { coffeList } = useContext(CoffeeDeliveryContext)

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

    if (!coffeList || coffeList.length === 0) {
      throw Error('Não há cafés para serem processados.')
    }

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