const express  = require('express')
const morgan  = require('morgan')

const globalErrorHandler = require('./controllers/errorController')
const AppError = require('./utils/appError')
const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')

const app = express()
// Middlewares
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static(`${__dirname}/public`))

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next()
})

app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)


// Handling unhandled routes in our app
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server! `))
})

app.use(globalErrorHandler)


module.exports = app;