
module.exports = async function allowed(req, res, next) {
    res.send('is allowed');
    next()
}
