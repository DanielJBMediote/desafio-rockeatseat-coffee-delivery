import { Trash } from "@phosphor-icons/react";
import { useContext } from "react";
import { Button } from "../../../components/Button";
import { Paragraph, Title } from "../../../components/Text";
import { CoffeeDeliveryContext } from "../../../contexts/CoffeDeliveryContext";
import { CoffeeItem } from "../../../reducer/CoffeeDelivery";
import { Card } from "../../Home/components/ItemCard";
import { formatPrice2String } from "../../Home/components/ItemCard/Footer/ItemCardFooterPrice";


export function CheckoutItem(coffeeItem: CoffeeItem) {

  const { imageName, price, name, quantity } = coffeeItem

  const { onRemoveCoffee, onAddCoffee, onRemoveItem } = useContext(CoffeeDeliveryContext)

  function handleIncrementQuantity() {
    onAddCoffee({ ...coffeeItem, quantity: 1 })
  }

  function handleDecrementQuantity() {
    onRemoveCoffee({ ...coffeeItem, quantity: 1 })
  }

  function handleRemoveItem() {
    onRemoveItem(coffeeItem)
  }

  const totalItemPrice = formatPrice2String(price * quantity);

  return (
    <div className="flex justify-between gap-5 border-b border-base-hover">
      <img src={`src/assets/CoffeeDelivery/${imageName}.svg`} alt="" />
      <div className="flex flex-col gap-2 flex-2/3 justify-center">
        <div className="flex justify-between items-center">
          <Paragraph>{name}</Paragraph>
          <Title fontSize="sm" fontColor="text" fontWeight="extrabold">R$ {totalItemPrice}</Title>
        </div>
        <div className="flex justify-start items-center gap-2">
          <Card.Footer.AddRemoveItem
            onAdd={handleIncrementQuantity}
            onRemove={handleDecrementQuantity}
            defaultQuantity={quantity}
          />
          <Button label="Remover" icon={Trash} onClick={handleRemoveItem} />
        </div>
      </div>
    </div>
  )
}