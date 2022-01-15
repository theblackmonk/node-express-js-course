const express = require('express');  //import
const path = require('path');
const app = express();  //instantiation

// setup static and middleware
app.use(express.static('./public')) 
//with  .use we can pull all static files with one line
//we get css, logo, and js event automatically


//app.get('/', (req, res) => {
//    //we can send this file with the other static files
//    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//    //we will use sendFile for adding to static assets SSR
//})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})
