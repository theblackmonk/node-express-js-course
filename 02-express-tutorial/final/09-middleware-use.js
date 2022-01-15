const express = require('express')
const app = express()
const logger = require('./logger') //import middleware
const authorize = require('./authorize')
//  req => middleware => res

//applies to all routes underneath
app.use([logger, authorize]) // pass in multiple middleware
// choose path with app.use('/api', logger)


app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
