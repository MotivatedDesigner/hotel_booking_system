const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: [true, "the type field is required"],
      minlength: [3, "type must be greater than 3 charachter"],
      maxlength: [24, "type must be less than 24 charachter"],
    },
    price: {
      type: Number,
      required: [true, "the price field is required"],
      maxlength: [100, "price must be less than 100 charachter"],
    },
    // image: {
    //   type: String,
    //   required: true,
    //   min: 8,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("rooms", roomSchema);
