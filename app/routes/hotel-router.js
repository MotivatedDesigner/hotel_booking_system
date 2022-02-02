const route = require("express").Router()

const { hotelController } = require("../controllers")

route.get("/", hotelController.getAll);
route.get("/:id", hotelController.get);
route.post("/", hotelController.create);
route.post("/:id", hotelController.update);
route.delete("/:id", hotelController.remove);

module.exports = route;