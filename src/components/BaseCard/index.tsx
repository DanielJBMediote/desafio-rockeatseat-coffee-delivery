import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";


export function BaseCard({ children, className }: HTMLAttributes<HTMLDivElement>) {
  return <div className={twMerge("bg-base-card rounded-tr-[36px] rounded-bl-[36px] rounded-br-lg rounded-tl-lg shadow-md", className)}>
    {children}
  </div>
}