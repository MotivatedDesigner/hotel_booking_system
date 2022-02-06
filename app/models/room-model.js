const mongoose = require("mongoose");

module.exports = mongoose.model(
  "rooms", 
  mongoose.Schema(
    {
      type: {
        type: String,
        required: [true, "the type field is required"],
        enum: ["Single", "Double" , "Triple", "Suite"],
        validate: {
          validator: (value) => ["Single", "Double" , "Triple", "Suite"].includes(value),
          message: 'Invalid room type'
        }
      },
      price: {
        type: Number,
        required: [true, "the price field is required"],
        maxlength: [6, "price must be less than 6 charachter"],
      },
      images: [String],
      hotel: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'hotels'
      }
    }, { timestamps: true }
  )
)