import * as RadioButtonPrimitive from '@radix-ui/react-radio-group';
import { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface GroupProps {
  children: ReactNode;
  name: string;
}

export function Group({ children, name }: GroupProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <RadioButtonPrimitive.Root
          className="flex flex-wrap gap-4 justify-start items-center"
          onValueChange={field.onChange}
          value={field.value}
        >
          {children}
        </RadioButtonPrimitive.Root>
      )}
    />
  )
}
