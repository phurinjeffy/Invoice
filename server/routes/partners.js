const express = require('express')
const { getPartners, getPartner, createPartner, deletePartner, updatePartner } = require('../controllers/partnerController')

const router = express.Router()

// GET all partners
router.get('/', getPartners)

// GET a single partner
router.get('/:id', getPartner)

// POST a new partner
router.post('/', createPartner)

// DELETE a partner
router.delete('/:id', deletePartner)

// UPDATE a partner
router.patch('/:id', updatePartner)

module.exports = router