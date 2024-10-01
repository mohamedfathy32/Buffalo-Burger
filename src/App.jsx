import 'tailwindcss/tailwind.css'
import { router } from './utils/routes'
import { RouterProvider } from 'react-router-dom'

export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}