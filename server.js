const app = require('./app')

// Create an instance of server
const port = 3000
app.listen(port, () => {
  console.log(`App running on port ${port}.....`);
})