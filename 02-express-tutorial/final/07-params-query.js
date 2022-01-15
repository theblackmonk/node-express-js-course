const { application } = require('express')
const express = require('express')
const app = express()
const { products } = require('./data') //exporting multiple items { x }

//This is a basic API
//Anywhere we can access this data and use it
app.get('/',(req, res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
    
})

app.get('/api/products', (req, res) => {
    //We don't want to grab all product info, so we destructure and grab parts
    const newProducts = products.map((product)=>{
        const {id, name, image} = product;  //same paramaters from .data
        return {id,name,image}
    })
    res.json(newProducts) //send back only what we want now
})

//Rather than hardcoding each sub url we use a route parameter
app.get('/api/products/:productID', (req, res) => {
    console.log(req.params)
    const {productID} = req.params; //grabs sub url as string parameter

    //We don't want to grab all product info, so we destructure and grab parts
    //convert productID to number for comparison
    const singleProducts = products.find((product)=> product.id === Number(productID))
    //if single product does not exist
    if(!singleProducts) return res.status(404).send('Product Does Not Exist')
    res.json(singleProducts) //send back only what we want now
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('hello worlds')
})

//allows us to search through an api/json via url
app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    const { search, limit } = req.query
    let sortedProducts = [...products]
  
    if (search) {
      sortedProducts = sortedProducts.filter((product) => {
        return product.name.startsWith(search)  //return so only one response is sent
      })
    }
    if (limit) {
      sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
      // res.status(200).send('no products matched your search');
      return res.status(200).json({ sucess: true, data: [] })
    }
    res.status(200).json(sortedProducts)
  })

  //url examples
  //http://localhost:5000/api/v1/query?limit=2
  //http://localhost:5000/api/v1/query?search=a&limit=3  products that start with a

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})