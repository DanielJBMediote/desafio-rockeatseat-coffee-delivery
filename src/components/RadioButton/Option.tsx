import * as RadioButtonPrimitive from '@radix-ui/react-radio-group';
import { ElementType } from "react";
import { Paragraph } from "../Text";

interface RadioButtonProps {
  label: string;
  icon: ElementType;
  value: string
}

export function Option({ label, icon: Icon, value }: RadioButtonProps) {
  return (
    <RadioButtonPrimitive.Item
      className="flex gap-2 uppercase border border-base-input text-base-button bg-base-button hover:bg-base-hover cursor-pointer rounded items-center justify-center p-4
      data-[state=unchecked]:bg-base-button data-[state=unchecked]:border-base-button
      data-[state=checked]:bg-purple-light data-[state=checked]:border-purple
      transition-colors duration-200"
      value={value}
    >
      <Icon className="text-purple" />
      <Paragraph fontSize="xs">{label}</Paragraph>
    </RadioButtonPrimitive.Item>
  )
}