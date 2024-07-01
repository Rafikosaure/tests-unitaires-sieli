const { inverse } = require('./inverse.js')


test('gives inverse of 2 equal 0.5', () => {
    expect(inverse(2)).toBe(0.5)
})

test('gives inverse of 0 equal null', () => {
    expect(inverse(0)).toBe(null)
})