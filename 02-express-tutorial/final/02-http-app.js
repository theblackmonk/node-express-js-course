const http = require('http')
const {readFileSync} = require('fs'); // be mindful of blocking vs non blocking methods

//We will not invoke this everytime someone comes to our site
//We invoke it initially
const homePage = readFileSync('./navbar-app/index.html')
const homeLogic = readFileSync('./navbar-app/browser-app.js')
const homeLogo = readFileSync('./navbar-app/logo.svg')
const homeStyles = readFileSync('./navbar-app/styles.css')
//Inside the index.html (Dev tools) we can see the file navigates to the following
//urls to grab data. We must populate those urls for it to work
//that's why you can always right click and "open image in new tab"


//returned after every request
const server = http.createServer((req,res)=>{
    //console.log(req.method)
    const url = req.url;
    console.log(url)
    if(url === '/'){
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
        res.end()
    } else if(url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>about page</h1>')
        res.end()
    } else if(url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeStyles)
        res.end()
    } else if(url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(homeLogo)
        res.end()
    } else if(url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(homeLogic)
        res.end()
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>Error 404</h1>')
        res.end()
    }
})

server.listen(5000)
