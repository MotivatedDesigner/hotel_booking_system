const router = require("express").Router()

const { register, login, logout } = require("../controller/userController")

router.post("/register/:role", register);
router.post("/login", login);
router.get("/logout", logout);


module.exports = router;