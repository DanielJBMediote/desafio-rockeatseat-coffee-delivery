
interface ItemCardTagsProps {
  tags: string[]
}

export function ItemCardTags({ tags }: ItemCardTagsProps) {
  return (
    <div className='flex gap-1 flex-wrap items-center justify-center -translate-y-10'>
      {tags.map(tag => (
        <span key={tag} className='text-yellow-dark bg-yellow-light rounded-full py-1 px-2 text-xs font-bold'>{tag}</span>

      ))}
    </div>
  )
}