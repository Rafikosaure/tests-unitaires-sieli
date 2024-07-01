const { impair } = require('./impair.js')

const array = [0, 5, 3, 8, 9, 7, 1]

test('gives all impairs numbers of an array', () => {
    expect(impair(array)).toBe(5, 3, 9, 7, 1)
})