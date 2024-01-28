const Partner = require('../models/partnerModel')
const mongoose = require('mongoose')

// GET all partners
const getPartners = async (req, res) => {
  const partners = await Partner.find({}).sort({ createdAt: -1 })

  res.status(200).json(partners)
}

// GET a single partner
const getPartner = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No partner found" })
  }

  const partner = await partner.findById(id)

  if (!partner) {
    return res.status(404).json({ error: "No partner found" })
  }

  res.status(200).json(partner)
}

// CREATE a new partner
const createPartner = async (req, res) => {
  const { name, address, city, country, zip } = req.body

  try {
    const partner = await partner.create({ name, address, city, country, zip })
    res.status(200).json(partner)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// DELETE a partner
const deletePartner = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No partner found" })
  }

  const partner = await partner.findOneAndDelete({ _id: id })

  if (!partner) {
    return res.status(404).json({ error: "No partner found" })
  }

  res.status(200).json(partner)
}

// UPDATE a partner
const updatePartner = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No partner found" })
  }

  const partner = await partner.findOneAndUpdate({ _id: id }, {
    ...req.body
  })

  if (!partner) {
    return res.status(404).json({ error: "No partner found" })
  }

  res.status(200).json(partner)
}

module.exports = {
  getPartners,
  getPartner,
  createPartner,
  deletePartner,
  updatePartner
}