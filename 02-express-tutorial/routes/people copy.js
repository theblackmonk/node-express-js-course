const express = require('express');
const router = express.Router();
let { people } = require('../data');

// www.store.com/api/orders
// get: get all orders
// post: place an order (send data)

// www.store.com/api/orders:id
// get: get single order
// put: update specific order
// delete: delete specific order

router.get('/', (req, res) => {
    res.status(200).json({success: true, data: people})
})

// got rid of /api/people as it is already in app.js
// router.post is pushing new name in conjunction with axios
router.post('/', (req, res) => {
    const { name } = req.body
    if (!name) {
      return res
        .status(400)
        .json({ success: false, person: 'please provide name value' })
    }
    res.status(201).json({ success: true, person: name })
    // 201 code is for a successful post
  })

// adding a name to the people object
router.post('/postman', (req, res) => {
    const { name } = req.body
    if (!name){
        return res
            .status(400)
            .json({ success: false, msg: 'please provide name value'})
    }
    res.status(201).send({ succes: true, data: [...people, name] })
})


// update specific id
router.put('/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body
    
    const person = people.find((person)=> person.id === Number(id)) //make sure id is a number

    if (!name){
        return res
            .status(404)
            .json({ success: false, msg: `no person with ${id}`})
    }

    const newPeople = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name //name taken from body
        }
        return person
    })
    res.status(200).json({ success: true, data: newPeople })
    //console.log(id, name)
    //res.send('hello world')
})

router.delete('/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${req.params.id}` })
    }
    const newPeople = people.filter(
        //if person id does not match id in params return success
      (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json({ success: true, data: newPeople })
  })

  
module.exports = router