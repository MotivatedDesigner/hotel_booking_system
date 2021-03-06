const route = require("express").Router()

const { roomController } = require("../controllers")

route.get("/", roomController.getAll);
route.get("/:id", roomController.get);
route.post("/", roomController.create);
route.patch("/:id", roomController.update);
route.delete("/:id", roomController.remove);

module.exports = route;