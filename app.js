const { exec } = require('child_process');
let iter = 0
let chosenIter = 1000
let frequency = 50
let time = 0
let url = 'https://openflags.net/rando'

var timeInter


let timer = ()=> {
    const timeNow = ()=> {time++}
    timeInter = setInterval(timeNow,1)    
    
}

const popAPI = async ()=> {
    time = 0
    timer()
    if (iter>=chosenIter) {
        clearInterval(sunSetInterval)
        process.exit()
    }
    exec(`curl ${url}`, (error, stdout, stderr) => {
        iter++
        const await = `stdout:\n${stdout}`
        console.log('\n=================================================\n')
        console.log(` Iteration:${iter}\n`,`RTT: ${time}ms`)
        console.log(await)
      clearInterval(timeInter)
    });
}

let sunSetInterval = setInterval(popAPI, frequency)    


    


