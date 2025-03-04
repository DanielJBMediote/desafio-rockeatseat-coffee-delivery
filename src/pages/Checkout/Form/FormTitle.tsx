import { ElementType } from "react";
import { Paragraph } from "../../../components/Text";


interface FormTitleProps {
  icon: ElementType
  title: string
  description: string
  color: "yellow" | "purple"
}

export function FormTitle({ icon: Icon, title, description, color }: FormTitleProps) {

  const colorVariants = {
    yellow: "text-yellow-dark",
    purple: "text-purple-dark",
  }

  return (
    <div className={`flex items-start gap-2 ${colorVariants[color]}`}>
      <Icon size={32} />
      <div className="flex flex-col">
        <Paragraph >{title}</Paragraph>
        <Paragraph fontSize="xs">{description}</Paragraph>
      </div>
    </div>
  )
}