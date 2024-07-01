
module.exports.impair = (array) => {
    for (n of array) {
        if (n % 2 != 0) {
            return n
        }
    }
}