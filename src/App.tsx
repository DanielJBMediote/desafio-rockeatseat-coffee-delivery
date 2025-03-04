import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CheckoutProvider } from './contexts/CheckoutContext/provider'
import { CoffeeDeliveryContextProvider } from './contexts/CoffeDeliveryContext/provider'
import './styles/globals.css'


export function App() {
  return (
    <BrowserRouter>
      <CheckoutProvider>
        <CoffeeDeliveryContextProvider>
          <Router />
        </CoffeeDeliveryContextProvider>
      </CheckoutProvider>
    </BrowserRouter>
  )
}
