const t = require('./index')

let appTwister = new t.Twister({
    interval: 1000,
    callback: twisterValue => handlerTwisterValue( twisterValue )
})
appTwister.start()
setTimeout(() => appTwister.stop(), 7000);

const handlerTwisterValue = (v) => {
    console.log(v)
}