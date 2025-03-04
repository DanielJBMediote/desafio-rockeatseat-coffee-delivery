import { HTMLProps } from "react";
import { useFormContext } from "react-hook-form";


interface FormInputProps extends HTMLProps<HTMLInputElement> {
  colSpan?: number
  isOptional?: boolean
}

export function FormInput({ colSpan = 0, isOptional, ...rest }: FormInputProps) {

  const { watch } = useFormContext()

  const watchValue = rest.name ? watch(rest.name) : false

  const colSpanVariant = [
    'col-span-full',
    'col-span-1',
    'col-span-2',
    'col-span-3',
    'col-span-4',
    'col-span-5',
    'col-span-6',
    'col-span-7',
    'col-span-8',
    'col-span-9',
    'col-span-10',
    'col-span-11',
    'col-span-12'
  ]

  return (
    <div className={`relative ${colSpanVariant[colSpan]} w-full`}>
      <input
        type="text"
        data-input-value={watchValue}
        className="w-full p-3 bg-base-input outline-none 
      border-base-button border rounded focus:border-yellow-dark 
      text-base-label focus:text-base-text data-[input-value]:text-base-text"
        {...rest}
      />
      {isOptional && !watchValue && (
        <span
          className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-base-label">
          Opcional
        </span>
      )}
    </div>
  )
}