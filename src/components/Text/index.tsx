
import clsx from 'clsx'

type TextColorType = "title" | "subtitle" | "text" | "label" | "hover" | "yellow-dark"
type TextFontSizeType = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "5xl"
type TextWeightType = "normal" | "bold" | "extrabold"

export interface ParagraphProps {
  children: string | string[],
  fontColor?: TextColorType
  fontSize?: TextFontSizeType
  fontWeight?: TextWeightType
}

const fontColorVariant = {
  title: "text-base-title",
  subtitle: "text-base-subtitle",
  text: "text-base-text",
  label: "text-base-label",
  hover: "text-base-hover",
  "yellow-dark": "text-yellow-dark"
}

const fontSizeVariant = {
  "xs": "text-sm",
  "sm": "text-base",
  "base": "text-lg",
  "lg": "text-xl",
  "xl": "text-2xl",
  "2xl": "text-3xl",
  "3xl": "text-4xl",
  "5xl": "text-5xl"
}

const fontWeightVariant = {
  "normal": "font-normal",
  "bold": "font-bold",
  "extrabold": "font-extrabold"
}



export function Paragraph({ children, fontSize = "base", fontColor = "text", fontWeight = "normal" }: ParagraphProps) {
  return (
    <p
      className={clsx("font-roboto", `${fontColorVariant[fontColor]}`, `${fontSizeVariant[fontSize]}`, `${fontWeightVariant[fontWeight]}`)}
    >
      {children}
    </p>
  )
}

interface TitleProps {
  children: string | string[],
  fontSize?: TextFontSizeType
  fontWeight?: "bold" | "extrabold"
  fontColor?: TextColorType
}

export function Title({ children, fontColor = "title", fontSize = "5xl", fontWeight = "bold" }: TitleProps) {
  return (
    <p
      className={clsx("font-baloo", `${fontColorVariant[fontColor]}`, `${fontSizeVariant[fontSize]}`, `${fontWeightVariant[fontWeight]}`)}>
      {children}
    </p>
  )
}
