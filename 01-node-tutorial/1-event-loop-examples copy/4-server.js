const http = require('http')

//server runs everytime there is a request
const server = http.createServer((req, res) => {
  console.log('request event')
  res.end('Hello World')
})

//listen is async, and will keep running in event loop
server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})