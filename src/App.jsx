import 'tailwindcss/tailwind.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './utils/routes'
import { useState } from 'react';
import { CartProvider, logedContext, LogedProvider } from './utils/context';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(logedContext);
  const [cartCounter, setCartCounter] = useState(0);

  return (
    <>
      <CartProvider value={{ cartCounter, setCartCounter }}>
        <LogedProvider value={{ isLoggedIn, setIsLoggedIn }}>
          <RouterProvider router={router} />
        </LogedProvider>
      </CartProvider>
    </>
  )
}