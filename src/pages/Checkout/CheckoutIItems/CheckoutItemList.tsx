import { PropsWithChildren } from "react";

export function CheckoutItemList({ children }: PropsWithChildren) {
  return (
    <div className="min-h-fit flex flex-col gap-4 overflow-auto hidden-scrollbar">
      {children}
    </div>
  )
}