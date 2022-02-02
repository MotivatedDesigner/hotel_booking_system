var { clientModel } = require("../models")

module.exports = {
  create,
  remove,
  update
}

async function create(req, res) {

  if (!req.body)
    return res.status(422).send({ message: "Content can not be emtpy!" })
  
  const { password, confirmedPassword} = req.body
  if (password != confirmedPassword)
    return res.status(422).send({ message: "the password does not match the confirmed password" })

  const client = await clientModel
    .create(req.body)
    .catch((err) => {
      // return res.status(500).send({
      //   message:
      //     err.message ||
      //     "Some error occurred while creating a create operation",
      // })
      return console.log(err);
    })
  res.status(200).send(client)
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

async function update(req, res) {
  if ( req.body 
    && Object.getPrototypeOf(req.body)
    && Object.keys(req.body).length === 0
  )
    return res.status(422).send({ message: "request body is malformed or empty" })

  const { id } = req.params
  const client = await clientModel
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .catch((err) => {
      return res.status(500).send({ message: "Could not update client with this id: " + id })
    })
    
  if(!client)
    return res.status(422).send({ message: "Could not find client with id: " + id })
  res.send(client)
}

async function remove(req, res) {
  const { id } = req.params

  const client = await clientModel
    .findByIdAndDelete(id)
    .catch((err) => {
      return res.status(500).send({ message: "Could not delete client with id:" + id })
    })

  if(!client)
    return res.status(500).send({ message: "Could not find client with id:" + id })

  res.status(200).send(client)
}
