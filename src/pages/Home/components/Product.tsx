import { useContext, useState } from "react";
import { CoffeeDeliveryContext } from "../../../contexts/CoffeDeliveryContext";
import { CoffeeItem } from "../../../reducer/CoffeeDelivery";
import { Card } from "./ItemCard";

interface ProductProps {
  data: CoffeeItem
}

export function Product({ data }: ProductProps) {

  const { onAddCoffee: onAddCoffe } = useContext(CoffeeDeliveryContext)

  const [quantity, setQuantity] = useState(0)

  function handleAddCoffe() {
    setQuantity(state => state + 1)
  }

  function handleRemoveCoffe() {
    if (quantity > 0) setQuantity(state => state - 1);
  }

  function handleAddToCart() {
    // Colocar no carrinho
    onAddCoffe({ ...data, quantity })
    setQuantity(0);
  }

  return (
    <Card.Root key={data.id}>
      <Card.Image src={data.imageName} />
      <Card.Tags tags={data.category} />
      <Card.Info
        title={data.name}
        description={data.description}
      />
      <Card.Footer.Root>
        <Card.Footer.Price value={data.price} />
        <Card.Footer.AddRemoveItem onAdd={handleAddCoffe} onRemove={handleRemoveCoffe} defaultQuantity={quantity} />
        <Card.Footer.AddCart onClick={handleAddToCart} />
      </Card.Footer.Root>
    </Card.Root>
  )
}