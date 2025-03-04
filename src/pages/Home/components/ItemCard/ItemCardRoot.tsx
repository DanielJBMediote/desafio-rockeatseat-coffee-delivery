import { ReactNode } from "react";
import { BaseCard } from "../../../../components/BaseCard";

interface ItemCardRootProps {
  children: ReactNode
}

export function ItemCardRoot({ children }: ItemCardRootProps) {
  return (
    <BaseCard className="relative flex flex-col w-[256px] h-[310px] items-center justify-center gap-4 p-4">
      {children}
    </BaseCard>
  )
}