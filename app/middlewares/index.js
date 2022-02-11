const allowed = require('./allowed')
const authenticated = require('./authenticated')
const upload= require('./uploadPhotos')

module.exports = {
    authenticated,
    allowed,
    upload
}