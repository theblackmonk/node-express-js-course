// local
const secret = "SUPER SECRET"

// share as a module (it's global)
const Dave = "Dave"
const Kenzo = "Kenzo"

//module.exports is the object. Dave and Kenzo are the properties
module.exports = { Dave, Kenzo } //Can be accessed anywhere now
//console.log(module)