import { createContext } from "react";
import { z } from "zod";
import { PaymentMethod } from "../../@types/paymentMethods";

export const checkoutFormSchema = z.object({
  location: z.object({
    postal_code: z.string().min(8),
    street: z.string().min(1),
    number: z.string()
      .min(1)
      .transform((val, ctx) => {
        const parsed = parseInt(val)
        if (isNaN(parsed)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Número do logadouro não é válido."
          })
          return z.NEVER
        }
        return val;
      }),
    complement: z.string().min(1),
    neighborhood: z.string().min(1),
    city: z.string().min(1),
    uf: z.string().min(2)
  }).nullable(),
  payment_method: z.nativeEnum(PaymentMethod, { message: "Método de pagamento inválido." }).nullable()
})

export type CheckFormDataType = z.infer<typeof checkoutFormSchema>

interface CheckoutContextProps {
  checkoutState: CheckFormDataType,
  onSubmit: (ctx: CheckFormDataType) => void
}

export const CheckoutContext = createContext({} as CheckoutContextProps)