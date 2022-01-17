const express = require('express')
const app = express()

const people = require('./routes/people') //grabbing routes folder
const auth = require('./routes/auth')

// static assets
app.use(express.static('./methods-public')) //our method app.use
//parse form data, check docs, built in body parser
app.use(express.urlencoded({ extended: false })) //gives access to form values, parsing
// parse json
app.use(express.json())

app.use('/api/people', people) //will apply /api/people to all routes in const people
app.use('/login', auth)

app.listen(5000, () =>{
    console.log('Server is listening')
})

// www.store.com/api/orders
// get: get all orders
// post: place an order (send data)

// www.store.com/api/orders:id
// get: get single order
// put: update specific order
// delete: delete specific order

//<input type="text" name="name" id="name" autocomplete="false" />
//value from index.html