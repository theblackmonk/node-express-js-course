const { application } = require('express')
const express = require('express')
const app = express()
const { products } = require('./data') //exporting multiple items { x }

//This is a basic API
//Anywhere we can access this data and use it
app.get('/',(req, res)=>{
    res.json(products)
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})