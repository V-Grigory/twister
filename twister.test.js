const t = require('./Twister');

let twister = new t.Twister()

test('test setCurrentTwisterValue', () => {
    twister.makeNextTwisterValue()
    console.log(twister.nextTwisterValue)
    expect(twister.currentBodyPartsColor).toEqual([]);
});