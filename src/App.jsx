import 'tailwindcss/tailwind.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './utils/routes'
import { useState } from 'react';
import { CartProvider, DataProvider, LoggedProvider } from './utils/context';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const [data, setData] = useState({})

  return (
    <>
      <DataProvider value={{ data, setData }}>
        <CartProvider value={{ cart, setCart }}>
          <LoggedProvider value={{ isLoggedIn, setIsLoggedIn }}>
            <RouterProvider router={router} />
          </LoggedProvider>
        </CartProvider>
      </DataProvider>
    </>
  )
}