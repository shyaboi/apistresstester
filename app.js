const { exec } = require('child_process');
let iter = 0
let chosenIter = 20
let frequency = 300
var timeInter
let time = 0

let timer = ()=> {
    console.log(` Iteration:${iter}\n`, `RTT: ${time}`)
    const timeNow = ()=> {time++}
    timeInter = setInterval(timeNow,1)    

}

const popAPI = async ()=> {
    time = 0
    timer()
    if (iter>chosenIter-1) {
        clearInterval(sunSetInterval)
        process.exit()
        }
    exec('curl https://openflags.net/rando', (error, stdout, stderr) => {
      iter++
      const await = `stdout:\n${stdout}`
      console.log(await)
      console.log(time)
      clearInterval(timeInter)
    });
}

let sunSetInterval = setInterval(popAPI, frequency)    


    


