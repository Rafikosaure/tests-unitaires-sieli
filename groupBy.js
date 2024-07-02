
module.exports.groupBy = (array) => {
    const firstFilteredArray = array.filter(item => item.type === "literie")
    const secondFilteredArray = array.filter(item => item.type === "meuble")
    const newArray = {
        literie: firstFilteredArray,
        meuble: secondFilteredArray
    }
    return newArray
}