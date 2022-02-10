const clientController = require('./client-controller')
const hotelController = require('./hotel-controller')
const roomController = require('./room-controller')
const reserveController = require('./reserve-controller')
module.exports = {
  hotelController,
  clientController,
  reserveController,
  roomController,
}