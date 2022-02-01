const express = require('express')
const route = express.Router()

const clientController = require('../controllers')

// API
route.post('/', clientController.create)
route.get('/', clientController.find)
route.put('/:id', clientController.update)
route.delete('/:id', clientController.delete)

module.exports = route