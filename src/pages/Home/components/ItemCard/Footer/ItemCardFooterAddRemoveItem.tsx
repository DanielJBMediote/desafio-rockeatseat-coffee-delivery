import { Minus, Plus } from "@phosphor-icons/react"
import { Paragraph } from "../../../../../components/Text"

interface ItemCardFooterAddRemoveItemProps {
  defaultQuantity?: number,
  onAdd: () => void,
  onRemove: () => void
}

export function ItemCardFooterAddRemoveItem({ onAdd, onRemove, defaultQuantity }: ItemCardFooterAddRemoveItemProps) {
  return (
    <div className='flex rounded-md bg-base-hover p-2 justify-between gap-2 '>
      <button
        type="button"
        className='text-purple cursor-pointer hover:text-purple-dark'
        onClick={onRemove}
      >
        <Minus />
      </button>
      <Paragraph fontSize="sm" fontColor="subtitle">{String(defaultQuantity)}</Paragraph>
      <button
        type="button"
        className='text-purple cursor-pointer hover:text-purple-dark'
        onClick={onAdd}
      >
        <Plus />
      </button>
    </div>
  )
}