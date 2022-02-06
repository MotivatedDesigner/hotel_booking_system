
module.exports = async function authenticated(req, res, next) {
    res.send('is Authenticated');
    next()
}
