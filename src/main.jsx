import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './Contexts/ThemeContexts/ThemeProvider'
import { RouterProvider } from 'react-router'
import routes from './Routes/MainRoutes/MainRoutes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={routes} />
    </ThemeProvider>
  </StrictMode>,
)
