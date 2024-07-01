const { fibonacci } = require('./fibonacci.js')

test('say if the array is sorted or not', () => {
    expect(fibonacci(5)).toBe(3)
})

test('say if the array is sorted or not', () => {
    expect(fibonacci(2)).toBe('wrong parameter!')
})