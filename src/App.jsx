import 'tailwindcss/tailwind.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './utils/routes'
import { useEffect, useState } from 'react';
import { CartCounterProvider, HistoryProvider, LoggedProvider, ProductsProvider } from './utils/context';
import { getCollectionByName } from './utils/firebase';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCounter, setCartCounter] = useState(0);
  const [products, setProducts] = useState([])
  const [history, setHistory] = useState([])

  useEffect(() => {
    async function get() {
      if (products.length == 0) {
        let res = await getCollectionByName('product')
        setProducts(res)
      }
    }
    get()
  }, [products.length]);

  return (
    <>
      <HistoryProvider value={{ history, setHistory }}>
        <ProductsProvider value={{ products, setProducts }}>
          <CartCounterProvider value={{ cartCounter, setCartCounter }}>
            <LoggedProvider value={{ isLoggedIn, setIsLoggedIn }}>
              <RouterProvider router={router} />
            </LoggedProvider>
          </CartCounterProvider>
        </ProductsProvider>
      </HistoryProvider>
    </>
  )
}