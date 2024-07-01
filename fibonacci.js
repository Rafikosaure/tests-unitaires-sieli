

module.exports.fibonacci = (n) => {
    if (n <= 2) return 'wrong parameter!'

    let twoBeforeElement = 0;
    let oneBeforeElement = 1;
  
    for (let i = 0; i < n - 2; i++) {
        let nextElement = twoBeforeElement + oneBeforeElement;
        twoBeforeElement = oneBeforeElement;
        oneBeforeElement = nextElement;
    }
    return oneBeforeElement
}