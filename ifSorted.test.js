const { ifSorted } = require('./ifSorted.js')

const array = [0, 5, 3, 8, 9, 7, 1]
const array2 = [0, 1, 2, 3, 4, 5]
const array3 = []

test('say if the array is sorted or not', () => {
    expect(ifSorted(array)).toBe(false)
})

test('say if the array is sorted or not', () => {
    expect(ifSorted(array2)).toBe(true)
})

test('say if the array is sorted or not', () => {
    expect(ifSorted(array3)).toBe('empty array')
})