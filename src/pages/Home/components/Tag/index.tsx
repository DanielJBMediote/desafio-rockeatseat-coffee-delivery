import clsx from "clsx"
import { ElementType, ReactNode } from "react"
import { Paragraph } from "../../../../components/Text"

interface TagProps {
  description: string | ReactNode,
  icon: ElementType
  tagColor: "purple" | "yellow" | "yellow-dark" | "gray"
}

const tagColorVariant = {
  purple: 'text-purple-light bg-purple',
  yellow: 'text-yellow-light bg-yellow',
  'yellow-dark': 'text-yellow-light bg-yellow-dark',
  gray: 'text-white bg-base-text',
}


export function Tag({ icon: Icon, tagColor, description }: TagProps) {
  return (
    <div className="flex gap-2 justify-start items-center">
      <div className={
        clsx("flex items-center justify-center p-2 rounded-full",
          tagColorVariant[tagColor]
        )}>
        <Icon size={22} weight='fill' />
      </div>
      {typeof description === "string" ?
        <Paragraph>{description}</Paragraph>
        : description
      }
    </div>
  )
}