
interface ItemCardImageProps {
  src: string
}

export function ItemCardImage({ src }: ItemCardImageProps) {
  return (
    <img src={`src/assets/CoffeeDelivery/${src}.svg`} alt="" className='-translate-y-10 w-32 h-32 shadow-md rounded-full' />
  )
}