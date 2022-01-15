const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res

// app.use([logger, authorize])

//-------Express Middleware
// app.use(express.static('./public')) //places all contents of our public folder as static

//-------Third Party Middleware
app.use(morgan('tiny')) //pulls status code, and time to execute


app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})

//[logger, authorize]
app.get('/api/items', (req, res) => {
  console.log(req.user) //grabbing data from middleware!
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

//query string
//http://localhost:5000/api/items?user=john