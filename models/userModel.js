const mongoose = require('mongoose')
const validator = require('validator')

const userSchema =  new mongoose.Schema({
  // name, email, photo, password, password confirm
  name: {
    type: String,
    required: [true, 'Please tell us your name']
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm, your password']
  }
})

const User = mongoose.model('User', userSchema)
module.exports = User;