const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

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
    required: [true, 'Please confirm, your password'],
    validate: {
      // This only works on create and save
      validator: function(el){
        return el === this.password;
      },
      message: "Passwords did not match"
    }
  }
})

userSchema.pre('save', async function(next){

  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next()


  // Hash the password with a cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete the passwordConfirm field
  this.passwordConfirm = undefined
  next()
})

const User = mongoose.model('User', userSchema)
module.exports = User;