const { hotelModel } = require("../models")

module.exports = {
  get,
  getAll,
  create,
  update,
  remove,
  annonce,
  findByNameAndType

}

async function get(req, res) {
  try {
    const hotel = await hotelModel.findById(req.params.id)
    res.send(hotel)
  } catch (error) { res.send(error) }
}

async function getAll(req, res) {
  const filter = {}
  if(req.query.city)   filter.city = req.query.city
  if(req.query.stars)   filter.stars = req.query.stars

  try {
    const hotel = await hotelModel.find(filter)
    res.send(hotel)
  } catch (error) { res.send(error) }
}

async function create(req, res) {
  try {
    req.body.image = req.files.map((file) => {
      return file.filename
    })
    const hotel = await hotelModel.create(req.body)
    res.send(hotel)
  } catch (error) { res.send(error) }
}

async function update(req, res) {
  try {
    const hotel = await hotelModel.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
    res.send(hotel)
  } catch (error) { res.send(error) }
}

async function remove(req, res) {
  try {
    await hotelModel.findByIdAndDelete(req.params.id)
    res.send("is deleted")
  } catch (error) { res.send(error) }
}

async function annonce(req, res) {
  try {
    const hotel = await hotelModel.find().populate({path:"rooms",  match: { available: true}, select: 'type price'})
    res.send(hotel)
  } catch (error) { res.send(error) }
}
async function findByNameAndType(req, res) {
  try {
    const hotel = await hotelModel.find({name: req.body.name}).populate({path:"rooms",  match: { type: req.body.type}})
    res.send(hotel)
  } catch (error) { res.send(error) }
}