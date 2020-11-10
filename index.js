const t = require('./Twister')

const start = (params) => {
    console.log('start')

    let twister = new t.Twister()

    let workingTwister = setInterval(() => {

        twister.makeTwisterValue()

        while (twister.twisterValueIsDouble()) {
            // console.log('== twisterValueIsDouble ==')
            twister.makeTwisterValue()
        }

        twister.saveMakedTwisterValue()

        params.callback(twister.getMakedTwisterValue())

    }, params.interval)

    return workingTwister
}

module.exports = { start }