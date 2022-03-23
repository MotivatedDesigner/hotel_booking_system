const { roomModel } = require("../models")

module.exports = {
  get,
  getAll,
  create,
  update,
  remove
}

async function get(req, res) {
  try {
    const room = await roomModel.findById(req.params.id)
    res.send(room)
  } catch (error) { res.send(error) }
}

async function getAll(_, res) {
  try {
    const room = await roomModel.find()
    res.send(room)
  } catch (error) { res.send(error) }
}

async function create(req, res) {
  try {
    const room = await roomModel.create(req.body)
    res.send(room)
  } catch (error) { res.send(error) }
}

async function update(req, res) {
  try {
    const room = await roomModel.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
    res.send(room)
  } catch (error) { res.send(error) }
}

async function remove(req, res) {
  try {
    await roomModel.findByIdAndDelete(req.params.id)
    res.send("is deleted")
  } catch (error) { res.send(error) }
}