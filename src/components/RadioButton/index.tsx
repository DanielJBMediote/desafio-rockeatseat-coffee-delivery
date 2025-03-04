
import clsx from "clsx";
import React, { cloneElement, ElementType, HTMLProps, ReactElement, ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { Paragraph } from "../Text";

interface GroupProps {
  children: ReactNode;
  name: string;
}


function Group({ children, name }: GroupProps) {

  const { watch, setValue } = useFormContext();
  const selectedValue = watch(name);

  /** Feito no GPT rsrs ;-; */
  return (
    <div className="flex flex-wrap gap-4 justify-start items-center">
      {React.Children.map(children, (child) => {
        if (!React.isValidElement<RadioButtonProps>(child)) return null;

        return cloneElement(child as ReactElement<RadioButtonProps>, {
          name,
          checked: child.props.value === selectedValue,
          onClick: () => setValue(name, child.props.value),
        });
      })}
    </div>
  )
}

interface RadioButtonProps extends HTMLProps<HTMLInputElement> {
  label: string;
  icon: ElementType;
}

function Option({ label, icon: Icon, name, ...rest }: RadioButtonProps) {

  const { register } = useFormContext()

  return (
    <div
      className={clsx(`flex gap-2 uppercase border border-base-input text-base-button cursor-pointer rounded items-center justify-center p-4`,
        rest.checked ? 'bg-purple-light border border-purple' : 'bg-base-button hover:bg-base-hover',
      )}
      onClick={rest.onClick}
    >
      <input {...rest} {...register(name as string)} type="radio" className="hidden" />
      <Icon className="text-purple" />
      <Paragraph fontSize="xs">{label}</Paragraph>
    </div>
  )
}

export const RadioButton = {
  Group, Option
}