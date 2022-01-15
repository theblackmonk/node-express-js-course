var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    //This first method sends the whole 1.8MB over the network
    //This slows down everyone so we will use createReadStream
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    //res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res) //pipe pushes from read stream into write stream in chunks
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)