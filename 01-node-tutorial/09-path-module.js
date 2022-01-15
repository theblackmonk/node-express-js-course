const path = require('path');

console.log(path.sep)  //path segment separator

const filePath = path.join('/content', 'subfolder', 'test.txt') //joins all given path segments
console.log(filePath)

const base = path.basename(filePath) //returns base filename
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute) //path will be different in Heroku or GCP