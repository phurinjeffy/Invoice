const Invoice = require('../models/invoiceModel')
const mongoose = require('mongoose')

// GET all invoices
const getInvoices = async (req, res) => {
  const invoices = await Invoice.find({}).sort({ createdAt: -1 })

  res.status(200).json(invoices)
}

// GET a single invoice
const getInvoice = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No invoice found" })
  }

  const invoice = await Invoice.findById(id)

  if (!invoice) {
    return res.status(404).json({ error: "No invoice found" })
  }

  res.status(200).json(invoice)
}

// CREATE a new invoice
const createInvoice = async (req, res) => {
  const { partner, date, due, status } = req.body

  try {
    const invoice = await Invoice.create({ partner, date, due, status })
    res.status(200).json(invoice)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// DELETE an invoice
const deleteInvoice = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No invoice found" })
  }

  const invoice = await Invoice.findOneAndDelete({ _id: id })

  if (!invoice) {
    return res.status(404).json({ error: "No invoice found" })
  }

  res.status(200).json(invoice)
}

// UPDATE an invoice
const updateInvoice = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No invoice found" })
  }

  const invoice = await Invoice.findOneAndUpdate({ _id: id }, {
    ...req.body
  })

  if (!invoice) {
    return res.status(404).json({ error: "No invoice found" })
  }

  res.status(200).json(invoice)
}

module.exports = {
  getInvoices,
  getInvoice,
  createInvoice,
  deleteInvoice,
  updateInvoice
}