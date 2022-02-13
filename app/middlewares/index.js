const allowed = require('./allowed')
const authenticated = require('./isAuth')
const upload= require('./uploadPhotos')
module.exports = {
    authenticated,
    allowed,
    upload
}