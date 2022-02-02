const { hotelModel } = require("../models")

module.exports = {
  get,
  // getAll,
  // create,
  // update,
  // remove
}

async function get(req, res) {
  try {
    const hotel = await hotelModel.findById(req.params.id)
    res.send(hotel)
  } catch (error) { res.send(error) }
}

/* const createHotel = async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body)
    res.send(hotel)
  } catch (error) {
    res.send(error)
  }
}
const updateHotel = async (req, res) => {
  try {
    await Hotel.findOneAndUpdate({ _id: req.params.id }, req.body)
    const hotel = await Hotel.find({ _id: req.params.id })
    res.send(hotel)
  } catch (error) {
    res.send(error)
  }
}
const readAllHotel = async (req, res) => {
  try {
    const hotel = await Hotel.find({})
    res.send(hotel)
  } catch (error) {
    res.send(error)
  }
}

const deleteHotel = async (req, res) => {
  try {
    await Hotel.deleteOne({ _id: req.params.id })
    res.send("is deleted")
  } catch (error) {
    res.send(error)
  }
} */