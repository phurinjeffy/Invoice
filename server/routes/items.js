const express = require('express')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controllers/itemController')

const router = express.Router()

// GET all items
router.get('/', getItems)

// GET a single item
router.get('/:id', getItem)

// POST a new item
router.post('/', createItem)

// DELETE an item
router.delete('/:id', deleteItem)

// UPDATE an item
router.patch('/:id', updateItem)

module.exports = router