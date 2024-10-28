import 'tailwindcss/tailwind.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './utils/routes'
import { useEffect, useState } from 'react';
import { CartCounterProvider, LoggedProvider, ProductsProvider } from './utils/context';
import { getCollectionByName } from './utils/firebase';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCounter, setCartCounter] = useState(0);
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function get() {
      if (products.length == 0) {
        let res = await getCollectionByName('product')
        setProducts(res)
        console.log('request sent')
      }
    }
    get()
  });

  return (
    <>
      <ProductsProvider value={{ products, setProducts }}>
        <CartCounterProvider value={{ cartCounter, setCartCounter }}>
          <LoggedProvider value={{ isLoggedIn, setIsLoggedIn }}>
            <RouterProvider router={router} />
          </LoggedProvider>
        </CartCounterProvider>
      </ProductsProvider>
    </>
  )
}