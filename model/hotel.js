const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema(
  {
    name: { 
        type: String,
        required: true,
        unique: true ,
        min: 3 
    },
    ville: { 
        type: String, 
        required: true, 
    },
    adresse: { 
        type: String, 
        required: true, 
    },
    phone: { 
        type: Number, 
        required: true,
        min: 8 
    },
    stars: { 
        type: Number, 
        required: true,         
    },
    image: { 
        type: String, 
        required: true, 
        min: 8 
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);
const hotel = mongoose.model("hotel", hotelSchema);
module.exports = hotel;
