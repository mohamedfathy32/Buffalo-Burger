import 'tailwindcss/tailwind.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './utils/routes'
import { useState } from 'react';
import { CounterProvider, LogedProvider, ProductsListProvider } from './utils/context';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [counter, setCounter] = useState(0);
  const [productsList, setProductsList] = useState([])

  return (
    <>
      <ProductsListProvider value={{ productsList, setProductsList }}>
        <CounterProvider value={{ counter, setCounter }}>
          <LogedProvider value={{ isLoggedIn, setIsLoggedIn }}>
            <RouterProvider router={router} />
          </LogedProvider>
        </CounterProvider>
      </ProductsListProvider>
    </>
  )
}