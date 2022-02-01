var { clientModel } = require("../models")

module.exports = {
  create,
  remove
}

async function create(req, res) {

  if (!req.body)
    return res.status(422).send({ message: "Content can not be emtpy!" })
  
  const { password, confirmedPassword} = req.body
  if (password != confirmedPassword)
    return res.status(422).send({ message: "the password does not match the confirmed password" })

  const user = await clientModel
    .create(req.body)
    .catch((err) => {
      // return res.status(500).send({
      //   message:
      //     err.message ||
      //     "Some error occurred while creating a create operation",
      // })
      return console.log(err);
    })
  res.status(200).send(user)
}

exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id

    Userdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found user with id " + id })
        } else {
          res.send(data)
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Erro retrieving user with id " + id })
      })
  } else {
    Userdb.find()
      .then((user) => {
        res.send(user)
      })
      .catch((err) => {
        res
          .status(500)
          .send({
            message:
              err.message || "Error Occurred while retriving user information",
          })
      })
  }
}

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" })
  }

  const id = req.params.id
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({
            message: `Cannot Update user with ${id}. Maybe user not found!`,
          })
      } else {
        res.send(data)
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update user information" })
    })
}

async function remove(req, res) {
  const { id } = req.params

  const user = await clientModel
    .findByIdAndDelete(id)
    .catch((err) => {
      return res.status(500).send({ message: "Could not delete User with id:" + id })
    })

  if(!user)
    return res.status(500).send({ message: "Could not find User with id:" + id })

  res.status(200).send({ message: user })
}
