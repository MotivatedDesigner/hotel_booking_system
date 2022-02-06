const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: [true, "the type field is required"],
    //   enum: ["Single", "Double" , "Triple","Suite"],
      minlength: [3, "type must be greater than 3 charachter"],
      maxlength: [24, "type must be less than 24 charachter"],
    },
    price: {
      type: Number,
      required: [true, "the price field is required"],
      maxlength: [100, "price must be less than 100 charachter"],
    },
    image: String,
    hotel_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hotels'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("rooms", roomSchema);
