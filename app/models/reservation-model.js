const mongoose = require("mongoose");

const Reservation = mongoose.model(
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
);

async function createReservation(
  hotelname,
  roomnumber,
  paimentmethode,
  customer
) {
  const reservation = Reservation({
    hotelname,
    roomnumber,
    paimentmethode,
    customer,
  });
  const result = await reservation.save();
  console.log(result);
}

async function getReservation() {
  const reservation = await Reservation.find();
  console.log(reservation);
}
