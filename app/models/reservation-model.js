const mongoose = require("mongoose")

module.exports = mongoose.model(
  "reservations",
  new mongoose.Schema({
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hotels",
    },
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "rooms",
    },
    payment: {
      type: String,
      enum: ['Cash', 'Credit Card', 'Paypal'],
      required: [true, "the paiment field is required"],
      validate: {
        validator: (value) => ['Cash', 'Credit Card', 'Paypal'].includes(value),
        message: 'Unsupported payment method'
      }
    },
  })
)