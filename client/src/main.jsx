import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { InvoiceContextProvider } from './context/InvoiceContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InvoiceContextProvider>
      <App />
    </InvoiceContextProvider>
  </React.StrictMode>,
)
