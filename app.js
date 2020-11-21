const { exec } = require('child_process');
let iter = 0
let chosenIter = 20
let frequency = 300
var timeInter
let time = 0

let timer = ()=> {
    const timeNow = ()=> {time++}
    timeInter = setInterval(timeNow,10)    

console.log(` Iteration:${iter}\n`, `RTT: ${time}`)

}

const popAPI = async ()=> {
    timer()
    if (iter>chosenIter) {
        clearInterval(sunSetInterval)
        }
    exec('curl https://openflags.net/rando', (error, stdout, stderr) => {
      iter++
      const await = `stdout:\n${stdout}`
      console.log(await)
      console.log(time)
      clearInterval(timeInter)
    });
time = 0
}

let sunSetInterval = setInterval(popAPI, frequency)    


    


