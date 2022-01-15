// req => middleware => res

//create a middleware function  
//we need next because we need to pass code onto next middleware
//unless we are sending back the response ourself res.send('Testing')
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    //res.send('Testing')  will terminate middleware cycle
    next()
}

module.exports = logger