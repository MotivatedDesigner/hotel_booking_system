const hotelRouter = require("express").Router()
const  { createHotel, updateHotel,readAllHotel,deleteHotel,readHotel ,verifyToken } = require("../controller/hotelController")

hotelRouter.post("/createHotel", createHotel);
hotelRouter.post("/updateHotel/:id", updateHotel);
hotelRouter.get("/readAllHotel", readAllHotel);
hotelRouter.get("/readHotel/:id", readHotel);
hotelRouter.delete("/deleteHotel/:id", deleteHotel);

module.exports = hotelRouter;