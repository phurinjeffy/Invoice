const express = require('express')
const { getInvoices, getInvoice, createInvoice, deleteInvoice, updateInvoice } = require('../controllers/invoiceController')

const router = express.Router()

// GET all invoices
router.get('/', getInvoices)

// GET a single invoice
router.get('/:id', getInvoice)

// POST a new invoice
router.post('/', createInvoice)

// DELETE an invoice
router.delete('/:id', deleteInvoice)

// UPDATE an invoice
router.patch('/:id', updateInvoice)

module.exports = router