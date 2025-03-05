import { Bank, CreditCard, CurrencyDollar, MapPin, Money, Ticket } from "@phosphor-icons/react"
// import { PaymentMethod } from '@types/paymentMethods'
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { PaymentMethod } from '../../@types/paymentMethods'
import { BaseCard } from '../../components/BaseCard'
import { RadioButton } from '../../components/RadioButton'
import { Title } from '../../components/Text'
import { CheckFormDataType, CheckoutContext, checkoutFormSchema } from "../../contexts/CheckoutContext"
import { CoffeeDeliveryContext } from "../../contexts/CoffeDeliveryContext"
import { CheckoutItems } from "./CheckoutIItems"
import { FormInput } from "./Form/FormInput"
import { FormTitle } from "./Form/FormTitle"

interface ViaCepResponseData {
  cep: string;
  logradouro: string;
  complemento: string;
  unidade: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export function Checkout() {

  const navigate = useNavigate()

  const { onSubmit } = useContext(CheckoutContext)

  const methods = useForm({
    resolver: zodResolver(checkoutFormSchema)
  })

  async function handleFields() {
    const cep = methods.watch().location?.postal_code

    if (cep && cep.length === 8) {
      const cepAPI = `https://viacep.com.br/ws/${cep}/json`;

      const json: ViaCepResponseData = await fetch(cepAPI)
        .then((response) => { return response })
        .then((response) => { return response.json() })

      methods.setValue("location.street", json.logradouro)
      methods.setValue("location.neighborhood", json.bairro)
      methods.setValue("location.city", json.localidade)
      methods.setValue("location.uf", json.uf)
    }
  }

  function handleCheckout(data: CheckFormDataType) {
    onSubmit(data)
    navigate("/tracking")
  }

  const { coffeList, checkoutValues } = useContext(CoffeeDeliveryContext)

  return (
    <FormProvider {...methods}>
      <form
        className="flex gap-10 w-full px-40 py-2 justify-center"
        onSubmit={methods.handleSubmit(handleCheckout)}
      >
        <div className="flex flex-col gap-4 w-[60%]">
          <Title fontSize="base">Formulário</Title>
          <BaseCard className="flex flex-col gap-4 p-10 rounded-none">
            <FormTitle
              title="Endereço da Entrega"
              description="Informe o endereço onde deseja receber seu pedido."
              color="yellow"
              icon={MapPin}
            />
            <div className="grid grid-cols-12 gap-4">
              <FormInput required colSpan={4} placeholder="CEP" {...methods.register("location.postal_code")} onBlur={handleFields} />
              <FormInput required placeholder="Rua" {...methods.register("location.street")} />
              <FormInput required colSpan={4} placeholder="Numero" {...methods.register("location.number")} />
              <FormInput colSpan={8} placeholder="Complemento" isOptional  {...methods.register("location.complement")} />
              <FormInput required colSpan={4} placeholder="Bairro" {...methods.register("location.neighborhood")} />
              <FormInput required colSpan={6} placeholder="Cidade" {...methods.register("location.city")} />
              <FormInput required colSpan={2} placeholder="UF" {...methods.register("location.uf")} />
            </div>
          </BaseCard>
          <BaseCard className="flex flex-col rounded-none p-10 gap-4">
            <FormTitle
              title="Pagamento"
              description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
              color="purple"
              icon={CurrencyDollar}
            />
            <RadioButton.Group name="payment_method">
              <RadioButton.Option value={PaymentMethod.CREDIT_CARD} label="Cartão de Crédito" icon={CreditCard} />
              <RadioButton.Option value={PaymentMethod.DEBIT_CARD} label="Cartão de Débito" icon={Bank} />
              <RadioButton.Option value={PaymentMethod.MONEY} label="Dinheiro" icon={Money} />
              <RadioButton.Option value="food_ticket" label="Vale Alimentação" icon={Ticket} />
              {/* <RadioButton.Option value="pix" label="Pix" icon={PixLogo} />
              <RadioButton.Option value="paypla" label="Cartão PayPal" icon={PaypalLogo} /> */}
            </RadioButton.Group>
          </BaseCard>
        </div>
        <div className="flex flex-col w-[40%] gap-4">
          <Title fontSize="sm">
            Cafés selecionados
          </Title>
          <BaseCard className="flex flex-col gap-6 p-8">

            {/* Item List */}
            <CheckoutItems.List>
              {/* Item */}
              {coffeList.map((coffeeItem) => {
                return (
                  <CheckoutItems.Item key={coffeeItem.id} {...coffeeItem} />
                )
              })}
            </CheckoutItems.List>

            <CheckoutItems.Footer.Root>
              <CheckoutItems.Footer.PriceLabel
                label="Total Itens"
                price={checkoutValues.totalItens}
                fontSize="sm"
              />
              <CheckoutItems.Footer.PriceLabel
                label="Entrega"
                price={checkoutValues.delivery_fee}
                fontSize="sm"
              />
              <CheckoutItems.Footer.PriceLabel
                label="Total"
                price={checkoutValues.total}
                fontWeight="bold"
              />
              <CheckoutItems.Footer.Action onClick={() => { }} />
            </CheckoutItems.Footer.Root>

          </BaseCard>
        </div>
      </form>
    </FormProvider>
  )
}