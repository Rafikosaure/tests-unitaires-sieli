
module.exports.ifSorted = (array) => {
    if (!array.length == 0) {
        for (n of array) {
            if (n > array[n+1]) {
                return false
            }
        }
        return true
    } else {
        return 'empty array'
    }
}