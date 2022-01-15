// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names');  // grab the global module //const { Dave, Kenzo } = require('./4-names');
const sayHi = require('./5-utils');
const upToYou = require('./6-alternative-flavors');
require('./7-mind-grenade');      //even though we didn't invoke variable this will run
                                  //this is good for third party variables
                                  //importing a module is running it

//console.log(names)
//console.log(upToYou)

sayHi("Bill")
sayHi(names.Dave)  //sayHi(Dave)
sayHi(names.Kenzo) //sayHi(Kenzo)