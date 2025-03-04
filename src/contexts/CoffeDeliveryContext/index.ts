import { createContext } from "react"
import { CoffeeItem } from "../../reducer/CoffeeDelivery"

interface CoffeDeliveryContextProps {
  coffeList: CoffeeItem[]
  onAddCoffee: (item: CoffeeItem) => void
  onRemoveCoffee: (item: CoffeeItem) => void
  onRemoveItem: (item: CoffeeItem) => void
  checkoutValues: {
    totalItens: number
    total: number
    delivery_fee: number
  }
}

export const CoffeeDeliveryContext = createContext({} as CoffeDeliveryContextProps)