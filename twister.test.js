const t = require('./index');

describe('test saveTwisterValue()', () => {

    let twister = new t.Twister()

    test('test 1', () => {
        twister.twisterValue = { bodyPart: 'leftLeg', color: 'green' }
        twister.saveTwisterValue()
        expect(twister.savedBodyPartsColor).toEqual({
            leftHand: '',
            rightHand: '',
            leftLeg: 'green',
            rightLeg: ''
        });
    })
    test('test 2', () => {
        twister.twisterValue = { bodyPart: 'leftHand', color: 'red' }
        twister.saveTwisterValue()
        expect(twister.savedBodyPartsColor).toEqual({
            leftHand: 'red',
            rightHand: '',
            leftLeg: 'green',
            rightLeg: ''
        });
    })
    test('test 3', () => {
        twister.twisterValue = { bodyPart: 'rightHand', color: 'red' }
        twister.saveTwisterValue()
        expect(twister.savedBodyPartsColor).toEqual({
            leftHand: 'red',
            rightHand: 'red',
            leftLeg: 'green',
            rightLeg: ''
        });
    })
    test('test 4', () => {
        twister.twisterValue = { bodyPart: 'rightHand', color: 'blue' }
        twister.saveTwisterValue()
        expect(twister.savedBodyPartsColor).toEqual({
            leftHand: 'red',
            rightHand: 'blue',
            leftLeg: 'green',
            rightLeg: ''
        });
    })
    test('test 5', () => {
        twister.twisterValue = { bodyPart: 'leftLeg', color: 'red' }
        twister.saveTwisterValue()
        expect(twister.savedBodyPartsColor).toEqual({
            leftHand: 'red',
            rightHand: 'blue',
            leftLeg: 'red',
            rightLeg: ''
        });
    })
    test('test 6', () => {
        twister.twisterValue = { bodyPart: 'rightLeg', color: 'yellow' }
        twister.saveTwisterValue()
        expect(twister.savedBodyPartsColor).toEqual({
            leftHand: 'red',
            rightHand: 'blue',
            leftLeg: 'red',
            rightLeg: 'yellow'
        });
    })
    test('test 7', () => {
        twister.twisterValue = { bodyPart: 'leftHand', color: 'yellow' }
        twister.saveTwisterValue()
        expect(twister.savedBodyPartsColor).toEqual({
            leftHand: 'yellow',
            rightHand: 'blue',
            leftLeg: 'red',
            rightLeg: 'yellow'
        });
    })

})

describe('test twisterValueIsDouble()', () => {

    let twister = new t.Twister()

    test('test 1', () => {
        twister.savedBodyPartsColor = {
            leftHand: '',
            rightHand: '',
            leftLeg: '',
            rightLeg: ''
        }
        twister.twisterValue = { bodyPart: 'leftLeg', color: 'green' }
        expect(twister.twisterValueIsDouble()).toBeFalsy();
    })
    test('test 2', () => {
        twister.savedBodyPartsColor = {
            leftHand: '',
            rightHand: 'green',
            leftLeg: '',
            rightLeg: 'green'
        }
        twister.twisterValue = { bodyPart: 'leftLeg', color: 'green' }
        expect(twister.twisterValueIsDouble()).toBeFalsy();
    })
    test('test 3', () => {
        twister.savedBodyPartsColor = {
            leftHand: '',
            rightHand: 'green',
            leftLeg: 'red',
            rightLeg: 'green'
        }
        twister.twisterValue = { bodyPart: 'leftLeg', color: 'red' }
        expect(twister.twisterValueIsDouble()).toBeTruthy();
    })
    test('test 4', () => {
        twister.savedBodyPartsColor = {
            leftHand: 'red',
            rightHand: 'green',
            leftLeg: 'red',
            rightLeg: 'green'
        }
        twister.twisterValue = { bodyPart: 'leftHand', color: 'blue' }
        expect(twister.twisterValueIsDouble()).toBeFalsy();
    })
    test('test 4', () => {
        twister.savedBodyPartsColor = {
            leftHand: 'red',
            rightHand: 'green',
            leftLeg: 'red',
            rightLeg: 'green'
        }
        twister.twisterValue = { bodyPart: 'rightHand', color: 'blue' }
        expect(twister.twisterValueIsDouble()).toBeFalsy();
    })
    test('test 6', () => {
        twister.savedBodyPartsColor = {
            leftHand: 'blue',
            rightHand: 'green',
            leftLeg: 'red',
            rightLeg: 'green'
        }
        twister.twisterValue = { bodyPart: 'leftHand', color: 'blue' }
        expect(twister.twisterValueIsDouble()).toBeTruthy();
    })
    test('test 7', () => {
        twister.savedBodyPartsColor = {
            leftHand: 'blue',
            rightHand: 'green',
            leftLeg: 'red',
            rightLeg: 'blue'
        }
        twister.twisterValue = { bodyPart: 'rightLeg', color: 'blue' }
        expect(twister.twisterValueIsDouble()).toBeTruthy();
    })

})
