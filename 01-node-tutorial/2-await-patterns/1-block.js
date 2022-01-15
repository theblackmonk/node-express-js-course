const http = require('http')

//open multiple tabs to simulate multiple users
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page')
  }
  if (req.url === '/about') {
    // blocking code
    for (let i = 0; i < 10000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`)
      }
    }
    res.end('About Page')
  }
  res.end('Error Page')
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})