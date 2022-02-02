const route = require("express").Router()

const { hotelController } = require("../controllers")
const { allowed, authenticated } = require("../middlewares")

route.get("/", hotelController.getAll);
route.get("/:id", hotelController.get);
route.post("/", authenticated, allowed, hotelController.create);
route.patch("/:id", authenticated, allowed, hotelController.update);
route.delete("/:id", authenticated, allowed, hotelController.remove);

module.exports = route;