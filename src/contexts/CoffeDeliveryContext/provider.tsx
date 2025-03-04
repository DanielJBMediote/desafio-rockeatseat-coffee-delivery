import { PropsWithChildren, useEffect, useReducer } from "react";
import { CoffeeDeliveryContext } from ".";
import { CoffeeItem, useCoffeeReducer } from "../../reducer/CoffeeDelivery";
import { addCoffeeOnCartAction, decreaseCoffeeFromCartAction, removeCoffeFromCartAction } from "../../reducer/CoffeeDelivery/actions";


const delivery_fee = 5.90

export function CoffeeDeliveryContextProvider({ children }: PropsWithChildren) {

  const [coffeList, dispatch] = useReducer(useCoffeeReducer, [], (initialState) => {
    const coffeListJSON = localStorage.getItem('@coffee-delivery:coffee-list-v1.0.0')
    if (coffeListJSON) {
      return JSON.parse(coffeListJSON)
    }
    return initialState
  })

  const totalItens = coffeList.reduce((prevValue, coffeItem) => {
    return prevValue + (coffeItem.price * coffeItem.quantity)
  }, 0)
  const total = totalItens + delivery_fee;
  const checkoutValues = { totalItens, delivery_fee, total }

  function onAddCoffee(item: CoffeeItem): void {
    dispatch(addCoffeeOnCartAction(item))
  }

  function onRemoveCoffee(item: CoffeeItem) {
    dispatch(decreaseCoffeeFromCartAction(item))
  }

  function onRemoveItem(item: CoffeeItem) {
    dispatch(removeCoffeFromCartAction(item))
  }

  useEffect(() => {
    const coffeListJSON = JSON.stringify(coffeList)
    localStorage.setItem('@coffee-delivery:coffee-list-v1.0.0', coffeListJSON)

  }, [coffeList])

  return (
    <CoffeeDeliveryContext.Provider value={{ coffeList, onAddCoffee, onRemoveCoffee, onRemoveItem, checkoutValues }}>
      {children}
    </CoffeeDeliveryContext.Provider>
  )
}