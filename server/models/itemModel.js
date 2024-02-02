const mongoose = require('mongoose')

const Schema = mongoose.Schema

const itemSchema = new Schema({
  invoice_id: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
    required: true
  },
}, { timestamps: true })

module.exports = mongoose.model('Item', itemSchema)