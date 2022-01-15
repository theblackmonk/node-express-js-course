//asynchronous. See how it is nested. Nasty to code
//Starts next code before finishing this nested section
const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf-8', (err, result)=> {
    if(err){
        console.log(err)
        return
    }
    //console.log(result)
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if (err) {
            console.log(err)
            return
        }

        const second = result
        writeFile(
            './content/result-sync.txt',
            `Here is the result : ${first}, ${second}`,
            (err, result)=>{
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
            })
    })
})
console.log('starting next task')
