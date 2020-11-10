const appTwister = require('../twister')

let handlerWorkingTwister = appTwister.start({
    interval: 1000,
    callback: twisterValue => handlerTwisterValue( twisterValue )
})
setTimeout(() => clearInterval(handlerWorkingTwister), 7000);

const handlerTwisterValue = (v) => {
    console.log(v)
}