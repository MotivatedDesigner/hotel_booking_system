const mongoose = require("mongoose");

module.exports = mongoose.model(
  "hotels",
  new mongoose.Schema({
    name: {
      type: String,
      required: [true, "the name field is required"],
      minlength: [3, "name must be greater than 3 character"],
      maxlength: [24, "name must be less than 24 character"],
    },
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'users'
    // },
    address: {
      type: String,
      required: [true, "the address field is required"],
      maxlength: [100, "address must be less than 100 characters"],
    },
    phone: {
      type: String,
      required: [true, "the phone field is required"],
      minlength: [8, "phone must be greater than 8 characters"],
      maxlength: [24, "phone must be less than 24 characters"],
    },
    stars: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      default: 1,
    },
    image: {
      type: String,
    },
  }, { timestamps: true })
)