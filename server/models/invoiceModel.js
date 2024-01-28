const mongoose = require('mongoose')

const Schema = mongoose.Schema

const invoiceSchema = new Schema({
  id: {
    type: String,
    // required: true
  },
  partner: {
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
  status: {
    type: Boolean,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('invoiceModel', invoiceSchema)