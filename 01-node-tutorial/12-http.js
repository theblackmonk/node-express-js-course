const http = require('http'); //grab http module

//web server, always up. Keeps listening for requests
const server = http.createServer((req, res) => {
    //console.log(req)
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about'){
        res.end('Here is our story')
    } else { 
    res.end(`
    <h1>Oops!</h1>
    <p>We can't find you r link</p>
    <a href="/">back home</a>
    `)}

    //res.write('Welcome to our home page');
    //res.end()
})

server.listen(5000)