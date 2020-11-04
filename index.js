const t = require('./Twister');

const start = (params) => {
    console.log('start')

    let twister = new t.Twister()

    let workingTwister = setInterval(() => {

        twister.makeNextTwisterValue()

        while (twister.nextTwisterValueIsDouble()) {
            console.log('== twisterValueIsDouble ==')
            twister.makeNextTwisterValue()
        }

        twister.setCurrentTwisterValue()

        params.callback(twister.getCurrentTwisterValue())

    }, params.interval);

    setTimeout(() => clearInterval(workingTwister), params.duration);
}

module.exports = { start }