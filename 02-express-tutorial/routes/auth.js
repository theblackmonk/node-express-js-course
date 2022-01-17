// authorize (register, login, etc)
const express = require('express');
const router = express.Router();

// post is pushing data to page
router.post('/', (req, res) => {
    const { name } = req.body
    //we could also handle this on the front end
    if(name){  //if name exists
        return res.status(200).send(`Welcome ${name}`) 
        //return will exit, no } else { needed
    }
    console.log(req.body)
    res.send('Enter a name ')
}) 

module.exports = router

// www.store.com/api/orders
// get: get all orders
// post: place an order (send data)

// www.store.com/api/orders:id
// get: get single order
// put: update specific order
// delete: delete specific order