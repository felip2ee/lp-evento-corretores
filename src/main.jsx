import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Fontes servidas pelo próprio site (sem depender do Google Fonts)
import '@fontsource/montserrat/latin-700.css'
import '@fontsource/montserrat/latin-800.css'
import '@fontsource/open-sans/latin-400.css'
import '@fontsource/open-sans/latin-600.css'
import '@fontsource/open-sans/latin-700.css'
import './index.css'

// GTM: o container vem do .env (VITE_GTM_ID). Sem ID, nada é carregado.
window.dataLayer = window.dataLayer || []
const gtmId = import.meta.env.VITE_GTM_ID
if (gtmId) {
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
  document.head.appendChild(s)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
