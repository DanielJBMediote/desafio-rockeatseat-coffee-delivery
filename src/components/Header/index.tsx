import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import { CoffeeDeliveryContext } from '../../contexts/CoffeDeliveryContext';


export function Header() {
  const { coffeList } = useContext(CoffeeDeliveryContext);
  const itemInCart = coffeList.length;
  const cartItens = formatValue(itemInCart)

  return (
    <nav className="flex justify-between items-center px-40 py-8 top-0 bg-background z-10">
      <NavLink to="/">
        <img src={Logo} />
      </NavLink>
      <div className="flex gap-3 items-center justify-center">
        <div className="flex items-center justify-center gap-1 rounded-lg p-2 bg-purple-light text-purple">
          <MapPin size={22} weight='fill' className='text-purple-dark' />
          <span>Porto Alegre, RS</span>
        </div>
        <div className='relative'>

          <strong
            data-has-items={itemInCart > 0}
            className='absolute -right-2 -top-2 data-[has-items=false]:hidden bg-yellow text-white rounded-full text-xs w-5 h-5 flex items-center justify-center'
          >
            {cartItens}
          </strong>
          <NavLink to="/Checkout">
            <button
              type='button'
              className='border-none rounded-lg outline-none p-2 text-yellow bg-yellow-light h-[2.35rem] w-[2.35rem] cursor-pointer'
            >
              <ShoppingCart size={22} weight='fill' />
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

function formatValue(value: number): string {
  return value >= 10 ? "+9" : String(value);
}