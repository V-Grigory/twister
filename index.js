class Twister {

    constructor(params) {
        this.params = params
        this.handlerStartedTwister = ''
        this.bodyParts = { 1: 'leftHand', 2: 'rightHand', 3: 'leftLeg', 4: 'rightLeg' }
        this.colors = { 1: 'green', 2: 'red', 3: 'blue', 4: 'yellow' }
        this.colorNamesRu = { green: 'зеленый', red: 'красный', blue: 'синий', yellow: 'желтый' },
        this.bodyPartNamesRu = {
            leftHand: 'Левая рука',
            rightHand: 'Правая рука',
            leftLeg: 'Левая нога',
            rightLeg: 'Правая нога'
        }
        this.randomNumberFromRange = ''
        this.twisterValue = { bodyPart: '', color: '' }
        this.savedBodyPartsColor = { leftHand: '', rightHand: '', leftLeg: '', rightLeg: '' }
        this.htmlFromTwisterValue = ''
        this.soundFromTwisterValue = ''
        this.preparedTwisterValueForGet = ''
    }

    start() {
        console.log('== start ==')
        this.handlerStartedTwister = setInterval(() => {
            this.makeTwisterValue()
            while (this.twisterValueIsDouble()) {
                console.log('== twisterValueIsDouble ==')
                this.makeTwisterValue()
            }
            this.saveTwisterValue()
            this.makeHtmlFromTwisterValue()
            this.makeSoundFromTwisterValue()
            this.prepareTwisterValueForGet()
            this.params.callback(this.getPreparedTwisterValue())
        }, this.params.interval)
    }

    stop() {
        clearInterval(this.handlerStartedTwister)
    }

    makeTwisterValue() {
        this.setRandomNumberFromRange(1, 4)
        this.twisterValue.bodyPart = this.bodyParts[this.randomNumberFromRange]
        this.setRandomNumberFromRange(1, 4)
        this.twisterValue.color = this.colors[this.randomNumberFromRange]
    }

    setRandomNumberFromRange(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        this.randomNumberFromRange = Math.floor(Math.random() * (max - min + 1)) + min
    }

    twisterValueIsDouble() {
        return this.savedBodyPartsColor[this.twisterValue.bodyPart] === this.twisterValue.color
    }

    saveTwisterValue() {
        this.savedBodyPartsColor[this.twisterValue.bodyPart] = this.twisterValue.color
    }

    makeHtmlFromTwisterValue() {
        let bodyPartRu = this.bodyPartNamesRu[this.twisterValue.bodyPart]
        let colorRu = this.colorNamesRu[this.twisterValue.color]
        let bodyPartRuHtml = `<span>${bodyPartRu}</span>`
        let colorRuHtml = `<span style="color: ${this.twisterValue.color}">${colorRu}</span>`
        this.htmlFromTwisterValue = `<div>${bodyPartRuHtml} - ${colorRuHtml}</div>`
    }

    makeSoundFromTwisterValue() {
        let soundName = `${this.twisterValue.bodyPart}-${this.twisterValue.color}.mp3`
        this.soundFromTwisterValue = 'sounds/' + soundName
    }

    prepareTwisterValueForGet() {
        this.preparedTwisterValueForGet = {
            raw: this.twisterValue,
            html: this.htmlFromTwisterValue,
            sound: this.soundFromTwisterValue
        }
    }

    getPreparedTwisterValue() {
        return this.preparedTwisterValueForGet
    }
}

module.exports = { Twister: Twister }