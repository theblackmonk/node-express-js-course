const { readFile, writeFile } = require('fs')

console.log('started a first task')
//readDile is Asynchronous so it offloads to the event loop
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})
console.log('starting next task') //will finish before async task