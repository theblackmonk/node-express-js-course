const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log('user hit the resource')
  res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
const express = require('express');  //import
const app = express()  //instantiation

//call back function invoked everytime user is 
app.get('/',(req, res)=>{
    console.log('User Hit the Resource')
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

//handles all http methods, get, post, put, etc
app.all('*',(req, res)=>{
    res.status(404).send('<h1>Resource Not Found</h1>')
})

//When we instantiate this function we will run the server
//This is middleware
app.listen(5000, ()=> {
    console.log('server is listening on port 5000 ...')
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
