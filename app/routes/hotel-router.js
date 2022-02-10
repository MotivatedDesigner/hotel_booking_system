const route = require("express").Router()
const upload = require("../middlewares/uploadPhotos")
const { hotelController } = require("../controllers")

route.get("/", hotelController.getAll);
route.get("/:id", hotelController.get);
route.post("/", upload.array("image"), hotelController.create);
route.patch("/:id", hotelController.update);
route.delete("/:id", hotelController.remove);

module.exports = route;