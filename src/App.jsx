import 'tailwindcss/tailwind.css'
<<<<<<<<< Temporary merge branch 1
import { RouterProvider } from 'react-router-dom'
import { router } from './utils/routes'
=========
import { router } from './utils/routes'
import { RouterProvider } from 'react-router-dom'
>>>>>>>>> Temporary merge branch 2

export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}