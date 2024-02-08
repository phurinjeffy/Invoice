import { InvoiceContext } from "../context/InvoiceContext"
import { useContext } from "react"

export const useInvoiceContext = () => {
  const context = useContext(InvoiceContext)

  if (!context) {
    throw Error('useInvoiceContext must be used inside InvoiceContextProvider')
  }

  return context
}
