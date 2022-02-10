const clientRouter = require('./client-router')
const hotelRouter = require('./hotel-router')
const roomRouter = require('./room-router')
const reserveRouter = require('./reserve-router')
module.exports = {
  hotelRouter,
  clientRouter,
  reserveRouter,
  roomRouter
}