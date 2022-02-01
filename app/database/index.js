const mongoose = require("mongoose")

module.exports = async () => {
  mongoose
    .connect("mongodb://localhost:27017/hotel-booking", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).catch(err => console.log(err))
}
