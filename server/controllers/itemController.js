const Item = require('../models/itemModel')
const mongoose = require('mongoose')

// GET all items
const getItems = async (req, res) => {
  const items = await Item.find({}).sort({ createdAt: -1 })

  res.status(200).json(items)
}

// GET a single item
const getItem = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No item found" })
  }

  const item = await item.findById(id)

  if (!item) {
    return res.status(404).json({ error: "No item found" })
  }

  res.status(200).json(item)
}

// CREATE a new item
const createItem = async (req, res) => {
  const { invoice_id, description, quantity, price } = req.body

  try {
    const item = await item.create({ invoice_id, description, quantity, price })
    res.status(200).json(item)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// DELETE an item
const deleteItem = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No item found" })
  }

  const item = await item.findOneAndDelete({ _id: id })

  if (!item) {
    return res.status(404).json({ error: "No item found" })
  }

  res.status(200).json(item)
}

// UPDATE an item
const updateItem = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No item found" })
  }

  const item = await item.findOneAndUpdate({ _id: id }, {
    ...req.body
  })

  if (!item) {
    return res.status(404).json({ error: "No item found" })
  }

  res.status(200).json(item)
}

module.exports = {
  getItems,
  getItem,
  createItem,
  deleteItem,
  updateItem
}