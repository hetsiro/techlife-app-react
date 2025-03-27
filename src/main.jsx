import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TechlifeApp } from './TechlifeApp.jsx'
import { BrowserRouter } from "react-router";
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TechlifeApp />
    </BrowserRouter>
  </StrictMode>,
)
