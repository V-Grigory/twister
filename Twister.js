function Twister () {
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
}

Twister.prototype.makeTwisterValue = function () {
    this.setRandomNumberFromRange(1, 4)
    this.twisterValue.bodyPart = this.bodyParts[this.randomNumberFromRange]
    this.setRandomNumberFromRange(1, 4)
    this.twisterValue.color = this.colors[this.randomNumberFromRange]
}

Twister.prototype.setRandomNumberFromRange = function (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    this.randomNumberFromRange = Math.floor(Math.random() * (max - min + 1)) + min
}

Twister.prototype.twisterValueIsDouble = function () {
    return this.savedBodyPartsColor[this.twisterValue.bodyPart] === this.twisterValue.color
}

Twister.prototype.saveMakedTwisterValue = function () {
    this.savedBodyPartsColor[this.twisterValue.bodyPart] = this.twisterValue.color
}

Twister.prototype.getMakedTwisterValue = function () {
    let bodyPartRu = this.bodyPartNamesRu[this.twisterValue.bodyPart]
    let colorRu = this.colorNamesRu[this.twisterValue.color]
    let bodyPartRuHtml = `<span>${bodyPartRu}</span>`
    let colorRuHtml = `<span style="color: ${this.twisterValue.color}">${colorRu}</span>`
    return `<div>${bodyPartRuHtml} - ${colorRuHtml}</div>`
}

module.exports = { Twister }