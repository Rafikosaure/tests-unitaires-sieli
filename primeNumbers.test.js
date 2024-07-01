const { primeNumbers } = require('./primeNumbers')

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

test('to filter prime numbers in an array', () => {
    expect(primeNumbers(array)).toEqual([2, 3, 5, 7, 11])
})