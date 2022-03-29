const mongoose = require("mongoose")

module.exports = () => {
  mongoose
    .connect("mongodb://hotel-booking-db:27017/hotel-booking", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).catch(err => console.log(err))
}
