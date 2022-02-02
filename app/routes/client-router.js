const express = require('express')
const route = express.Router()

const { clientController } = require('../controllers')

// API
route.post('/', clientController.create)
// route.get('/:id', clientController.getOne)
route.patch('/:id', clientController.update)
route.delete('/:id', clientController.remove) 

module.exports = route