const { hotelModel } = require("../models")

module.exports = {
  get,
  getAll,
  create,
  update,
  // remove
}

async function get(req, res) {
  try {
    const hotel = await hotelModel.findById(req.params.id)
    res.send(hotel)
  } catch (error) { res.send(error) }
}

async function getAll(_, res) {
  try {
    const hotel = await hotelModel.find()
    res.send(hotel)
  } catch (error) { res.send(error) }
}

async function create(req, res) {
  try {
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

/*


const deleteHotel = async (req, res) => {
  try {
    await Hotel.deleteOne({ _id: req.params.id })
    res.send("is deleted")
  } catch (error) {
    res.send(error)
  }
} */