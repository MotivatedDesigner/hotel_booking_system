const express = require("express");
const auth = require("./routes/auth");
const Hotel = require("./routes/hotel");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.MONGO_DB)
  

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", auth);
app.use("/", Hotel);

app.listen(process.env.PORT, () =>
  console.log(`server running `)
);
