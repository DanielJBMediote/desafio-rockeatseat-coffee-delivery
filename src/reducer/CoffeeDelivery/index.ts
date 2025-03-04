import { CoffeDeliveryActions, CoffeeDeliveryActionTypes } from "./actions"

export interface CoffeeItem {
  id: number
  name: string
  description: string
  imageName: string
  price: number
  category: string[],
  quantity: number
}


export function useCoffeeReducer(state: CoffeeItem[], action: CoffeDeliveryActions) {

  switch (action.type) {
    case CoffeeDeliveryActionTypes.INCREMENT_COFFEE_QUANTITY:
      return updateCoffeeQuantity(state, action.payload.item, action.payload.item.quantity);

    case CoffeeDeliveryActionTypes.DECREASE_COFFEE_QUANTITY:
      return updateCoffeeQuantity(state, action.payload.item, -Math.abs(action.payload.item.quantity));

    case CoffeeDeliveryActionTypes.REMOVE_COFFEE_FROM_CART:
      return state.filter(item => item.name !== action.payload.item.name)

    default:
      return state
  }
}

const updateCoffeeQuantity = (state: CoffeeItem[], item: CoffeeItem, quantityChange: number) => {
  const coffeeItem = state.find(coffee => coffee.name === item.name);

  if (quantityChange == 0) return state;

  if (coffeeItem) {
    coffeeItem.quantity = Math.max(coffeeItem.quantity + quantityChange, 0);
    return state.map(coffee => coffee.id === coffeeItem.id ? coffeeItem : coffee);
  } else {
    return [...state, item];
  }
};

