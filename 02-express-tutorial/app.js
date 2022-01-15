const express = require('express')
const app = express()
let { people } = require('./data')

// static assets
app.use(express.static('./methods-public')) //our method app.use

//parse form data, check docs, built in body parser
app.use(express.urlencoded({ extended: false })) //gives access to form values, parsing

// parse json
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})

//app.post is pushing new name in conjunction with axios
app.post('/api/people', (req, res) => {
    const { name } = req.body
    if (!name) {
      return res
        .status(400)
        .json({ success: false, person: 'please provide name value' })
    }
    res.status(201).json({ success: true, person: name })
    // 201 code is for a successful post
  })

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body
    if (!name){
        return res
            .status(400)
            .json({ success: false, msg: 'please provide name value'})
    }
    res.status(201).send({ succes: true, data: [...people, name] })
})



// post is pushing data to page
app.post('/login', (req, res) => {
    const { name } = req.body
    //we could also handle this on the front end
    if(name){  //if name exists
        return res.status(200).send(`Welcome ${name}`) 
        //return will exit, no } else { needed
    }


    console.log(req.body)
    res.send('Enter a name ')

}) 

app.listen(5000, () =>{
    console.log('Server is listening')
})

//<input type="text" name="name" id="name" autocomplete="false" />
//value from index.html