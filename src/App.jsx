import 'tailwindcss/tailwind.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './utils/routes'
import { logedContext, LogedProvider } from './isLoged'
import { useState } from 'react';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(logedContext);

  return (
    <>
      <LogedProvider value={{ isLoggedIn, setIsLoggedIn }}>
        <RouterProvider router={router} />
      </LogedProvider>
    </>
  )
}