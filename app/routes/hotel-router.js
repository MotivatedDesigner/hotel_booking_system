const route = require("express").Router()

const { hotelController } = require("../controllers")
// const { allowed, authenticated } = require("../middlewares")
route.get("/find", hotelController.findByNameAndType);
route.get("/annonce", hotelController.annonce);
route.get("/", hotelController.getAll);
route.get("/:id", hotelController.get);
route.post("/",  hotelController.create);
route.patch("/:id",  hotelController.update);
route.delete("/:id",  hotelController.remove);

module.exports = route;