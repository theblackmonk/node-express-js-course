let { people } = require('../data');

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people})
}

const createPerson  = (req, res) => {
    const { name } = req.body
    if (!name) {
      return res
        .status(400)
        .json({ success: false, person: 'please provide name value' })
    }
    res.status(201).json({ success: true, person: name })
    // 201 code is for a successful post
}

const createPersonPostman = (req, res) => {
    const { name } = req.body
    if (!name){
        return res
            .status(400)
            .json({ success: false, msg: 'please provide name value'})
    }
    res.status(201).send({ succes: true, data: [...people, name] })
}

const updatePerson = (req, res) => {
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
}

const deletePerson = (req, res) => {
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
}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}