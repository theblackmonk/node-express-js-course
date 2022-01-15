const os = require("os"); //built in module so no './'
//Destructure so you're not importing  a load if you want
//const { userInfo } = require('os');

const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds 
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(), 
    freeMem: os.freemem(),
}

console.log(currentOS);
