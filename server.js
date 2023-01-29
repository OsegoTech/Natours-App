const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app')
dotenv.config({path: './config.env'})

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => console.log(`DB connection successful`))

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
const testTour = new Tour({
  name: 'The Forest Hiker1',
  rating: 4.7,
  price: 497
})

testTour.save().then(doc => {
  console.log(doc)
}).catch(err => {
  console.log('ERROR :', err);
})





// Create an instance of server
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`App running on port ${port}.....`);
})