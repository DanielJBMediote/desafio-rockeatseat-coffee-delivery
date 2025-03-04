import { ReactNode } from "react"


interface ItemCardFooterRootProps {
  children: ReactNode
}
export function ItemCardFooterRoot({ children }: ItemCardFooterRootProps) {
  return (
    <div className='flex items-center justify-around w-full gap-4 -translate-y-3'>
      {children}
    </div>
  )
}