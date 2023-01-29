const mongoose = require('mongoose')

const tourSchema = new mongoose.Schema({
  name: {
    type:String,
    required: [true, 'Tour must have a name'],
    unique: true
  },
  rating: {
    type: Number,
    default: 4.5
  },
  price: {
    type: Number,
    required: [true, 'Tour must have a price']
  }
})

const Tour = mongoose.model('Tour', tourSchema)

module.exports = Tour