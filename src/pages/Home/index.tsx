import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { Paragraph, Title } from '../../components/Text'
import { Tag } from './components/Tag'

import CoffeLogo from '../../assets/CoffeLogo.svg'
import { ProductList } from './components/ProductList'

export function Home() {
  return (
    <div className="flex flex-col w-full">
      <header className="flex max-xl:flex-wrap-reverse max-xl:justify-center justify-between items-center px-40 py-8 bg-[url('/src/assets/Background.svg')]">
        <div className='flex flex-col gap-16'>
          <div className="flex flex-col gap-4">
            <Title fontWeight='extrabold'>Encontre o café perfeito para qualquer hora do dia</Title>
            <Paragraph fontColor='subtitle' fontSize='lg'>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</Paragraph>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Tag description='Compra simples e segura' icon={ShoppingCart} tagColor='yellow-dark' />
            <Tag description='Entrega rápida e rastreada' icon={Timer} tagColor='purple' />
            <Tag description='Embalagem matém o café intacto' icon={Package} tagColor='yellow' />
            <Tag description='O café chega fresquinho até você' icon={Coffee} tagColor='gray' />
          </div>
        </div>
        <img src={CoffeLogo} alt="" />
      </header>

      <div className="flex flex-col gap-10 px-40 py-10">
        <Title fontSize='xl'>Nossos cafés</Title>
        <ProductList />
      </div>
    </div >
  )
}