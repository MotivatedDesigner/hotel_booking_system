const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: [true, "the type field is required"],
      enum: ["Single", "Double" , "Triple","Suite"],
      validate: {
        validator: (value) => ["Single", "Double" , "Triple", "Suite"].includes(value),
        message: 'Invalid room type'
      }
    },
    price: {
      type: Number,
      required: [true, "the price field is required"],
      maxlength: [100, "price must be less than 100 charachter"],
    },
    // image: [String],
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hotels'
    },
  },
  { timestamps: true }
);
roomSchema.virtual('reserve', {
  ref: 'reserves', 
  localField: '_id', 
  foreignField: 'room', 
});

roomSchema.set('toObject', { virtuals: true });
roomSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model("rooms", roomSchema);
