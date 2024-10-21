import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import './utils/i18/i18n.js'
createRoot(document.getElementById('root')).render(<App />)