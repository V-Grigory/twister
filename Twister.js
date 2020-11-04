function Twister () {
    this.bodyParts = { 1: 'leftHand', 2: 'rightHand', 3: 'leftLeg', 4: 'rightLeg' }
    this.colors = { 1: 'green', 2: 'red', 3: 'blue', 4: 'yellow' }
    this.randomNumberFromRange = ''

    // this.currentLeftHandColor = ''
    // this.currentRightHandColor = ''
    // this.currentLeftLegColor = ''
    // this.currentRightLegColor = ''

    this.currentBodyPartsColor = []

    this.currentTwisterValue = { bodyPart: '', color: '' }
    this.nextTwisterValue = { bodyPart: '', color: '' }
}

Twister.prototype.makeNextTwisterValue = function () {
    this.setRandomNumberFromRange(1, 4)
    this.nextTwisterValue.bodyPart = this.bodyParts[this.randomNumberFromRange]
    this.setRandomNumberFromRange(1, 4)
    this.nextTwisterValue.color = this.colors[this.randomNumberFromRange]
}

Twister.prototype.setRandomNumberFromRange = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.randomNumberFromRange = Math.floor(Math.random() * (max - min + 1)) + min;
}

Twister.prototype.nextTwisterValueIsDouble = function () {
    return false
    if (!this.currentBodyPartsColor.length) return false

}

Twister.prototype.setCurrentTwisterValue = function () {

    this.currentTwisterValue = Object.assign({}, this.nextTwisterValue)

    let currentBodyPartsColor = this.currentBodyPartsColor.find(currentBodyPart => {
        let bodyPart = Object.keys(currentBodyPart)[0] === this.currentTwisterValue.bodyPart
        let color = Object.values(currentBodyPart)[0] === this.currentTwisterValue.color
        return bodyPart && color
    })
    if (typeof currentBodyPartsColor === 'undefined') {
        console.log('-- push --')
        this.currentBodyPartsColor.push({
            [this.currentTwisterValue.bodyPart]: this.currentTwisterValue.color
        })
    } else {
        console.log('-- replace --')
        currentBodyPartsColor[this.currentTwisterValue.bodyPart] =
            this.currentTwisterValue.color
    }
    console.log(this.currentBodyPartsColor)
}

Twister.prototype.getCurrentTwisterValue = function () {
    return this.currentTwisterValue
}

module.exports = { Twister }