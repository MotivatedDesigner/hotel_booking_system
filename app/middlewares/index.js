const cookieParser = require('./cookie-parser')
const isAuth = require('./isAuth')
const upload= require('./uploadPhotos')
module.exports = {
    isAuth,
    cookieParser,
    upload
}