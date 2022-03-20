const mongoose = require("mongoose")

module.exports = mongoose.model(
  "users",
  new mongoose.Schema({
    name: {
      type: String,
      required: [true, "the name field is required"],
    },
    email: {
      type: String,
      required: [true, "the email field is required"],
      unique: [true, "this email already exist"],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
      type: String,
      required: [true, "the password field is required"],
      minlength: [8, 'password must be greater than 8 character'],
      maxlength: [24, 'password must be less than 24 character'],
      match: [/^(?=.*\d).*/, 'password must include at least one number'],
      match: [/^(?=.*[a-z]).*$/, 'password must include at least one lowercase character'],
      match: [/^(?=.*[A-Z]).*$/, 'password must include at least one uppercase character'],
      match: [/^(?=.*\W).*$/, 'password must include at least one symbol like (!,%,$,£,@,...)']
    },
    role: {
      type: String,
      enum: ['client', 'owner', 'admin'],
      default: 'client',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  }, {timestamps: true})
)