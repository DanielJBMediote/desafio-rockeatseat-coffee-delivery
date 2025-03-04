import { CoffeeItem } from "."


export enum CoffeeDeliveryActionTypes {
  INCREMENT_COFFEE_QUANTITY = "INCREMENT_COFFEE_QUANTITY",
  DECREASE_COFFEE_QUANTITY = "DECREASE_COFFEE_QUANTITY",
  REMOVE_COFFEE_FROM_CART = "REMOVE_COFFEE"
}

export interface CoffeDeliveryActions {
  type: CoffeeDeliveryActionTypes
  payload: { item: CoffeeItem }
}

/**
 * Serve também para adicionar e aumentar a quantidade
 * @param item 
 * @returns 
 */
export function addCoffeeOnCartAction(item: CoffeeItem): CoffeDeliveryActions {
  return { type: CoffeeDeliveryActionTypes.INCREMENT_COFFEE_QUANTITY, payload: { item } }
}

export function decreaseCoffeeFromCartAction(item: CoffeeItem): CoffeDeliveryActions {
  return { type: CoffeeDeliveryActionTypes.DECREASE_COFFEE_QUANTITY, payload: { item } }
}

/**
 * Remover o Item do carrinho
 * @param item 
*/
export function removeCoffeFromCartAction(item: CoffeeItem) {
  return { type: CoffeeDeliveryActionTypes.REMOVE_COFFEE_FROM_CART, payload: { item } }
}