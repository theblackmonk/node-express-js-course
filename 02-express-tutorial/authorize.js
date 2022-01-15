const authorize = (req, res, next) => {
    const { user } = req.query; //query must be http://localhost:5000/api/?user=john
    if(user === 'john'){
        req.user =  {name: 'john', id:3}  //user is available wherever middleware is used
        next() //next middleware
        res.send('Success')
    } else {
        res.status(401).send('Unauthorized')
    }
    console.log('authorize')
    next()
}

module.exports = authorize