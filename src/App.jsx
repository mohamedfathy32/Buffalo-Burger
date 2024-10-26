import 'tailwindcss/tailwind.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './utils/routes'
import { useEffect, useState } from 'react';
import { CartCounterProvider, LogedProvider, ProductsProvider } from './utils/context';
import { addCollection, getCollectionByName } from './utils/firebase';
import { branchesList, breadList, comboOptionsList, drinksList, extrasList, menuCategoriesList, offersList, productList, topSellingList } from './utils/data';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCounter, setCartCounter] = useState(0);
  const [products, setProducts] = useState([])

  //////////////////////////////////
  // const { products, setProducts } = useContext(ProductsContext)
  useEffect(() => {
    async function get() {
      if (products.length == 0) {
        let res = await getCollectionByName('product')
        setProducts(res)
        console.log(res)
      }
    }
    get()
  }, []);
  //////////////////////////////////


  ///////////////////////////////////////
  useEffect(() => {
    async function add() {
      await addCollection(productList, 'product')
      await addCollection(menuCategoriesList, 'menuCategories')
      await addCollection(branchesList, 'branches')
      await addCollection(breadList, 'bread')
      await addCollection(topSellingList, 'topSelling')
      await addCollection(offersList, 'offers')
      await addCollection(comboOptionsList, 'comboOptions')
      await addCollection(drinksList, 'drinks')
      await addCollection(extrasList, 'extras')
    }
    // add()
  }, []);
  /////////////////////////////////////////
  return (
    <>
      <ProductsProvider value={{ products, setProducts }}>
        <CartCounterProvider value={{ cartCounter, setCartCounter }}>
          <LogedProvider value={{ isLoggedIn, setIsLoggedIn }}>
            <RouterProvider router={router} />
          </LogedProvider>
        </CartCounterProvider>
      </ProductsProvider>
    </>
  )
}