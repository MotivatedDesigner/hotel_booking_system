const express = require('express');
const route = express.Router()

const services = require('../services/render');
const clientController = require('../controller/client-controller');


route.get('/', services.homeRoutes);


route.get('/add-user', services.add_user)


route.get('/update-user', services.update_user)


// API
route.post('/', clientController.create);
route.get('/', clientController.find);
route.put('/:id', clientController.update);
route.delete('/:id', clientController.delete);



module.exports = route