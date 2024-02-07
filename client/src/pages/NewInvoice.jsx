import React from 'react'
import InvoiceForm from '../components/InvoiceForm'

const NewInvoice = () => {
  return (
    <div className="m-6">
      <div className="text-xl font-semibold">
        New Invoice
      </div>

      <div className='my-6'>
        <InvoiceForm />
      </div>
    </div>
  )
}

export default NewInvoice