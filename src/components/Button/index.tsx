import { ElementType, HTMLAttributes } from "react";
import { Paragraph } from "../Text";


interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: ElementType;
  size?: "small" | "large"
}

export function Button({ label, icon: Icon, size = "small", ...rest }: ButtonProps) {

  const btnSizeVariations = {
    small: "p-2",
    large: "p-4"
  }

  return (
    <button
      className={`flex gap-2 uppercase text-base-button cursor-pointer rounded bg-base-button hover:bg-base-hover items-center justify-center ${btnSizeVariations[size]}`}
      type="button"
      {...rest}
    >
      <Icon className="text-purple" />
      <Paragraph fontSize="sm">{label}</Paragraph>
    </button>
  )
}
