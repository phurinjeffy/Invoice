const mongoose = require('mongoose')

const Schema = mongoose.Schema

const invoiceSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  partner_id: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  due: {
    type: Date,
    required: true
  },
  paid: {
    type: Boolean,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Invoice', invoiceSchema)