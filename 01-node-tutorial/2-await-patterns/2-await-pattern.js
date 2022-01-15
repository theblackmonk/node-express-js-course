const {readFile, writeFile} = require('fs').promises 
//const util = require('util');
//const readFilePromise = util.promisify(readFile) //replaces getText function
//const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        console.log(first, second)
        await writeFile(
            './content/result-mind-grenade.txt',
            `This is awesome : ${first} and ${second}.`,
            { flag: 'a' }
        )
    } catch (error) {
        console.log(error)
    }  
}

start()



/*const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile('./content/first.txt','utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
                //console.log(data)
            }
        })
    })
}*/

/*getText('./content/first.txt')
.then(result => console.log(result))
.catch((err) => console.log(err)) */

