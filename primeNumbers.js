
// Fonction de filtrage des nombres premiers
const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i < num; i++) { 
        if (num % i === 0) return false; 
    }
    return true
}

// Fonction de renvoi du tableau des nombres premiers
module.exports.primeNumbers = (array) => {
    return array.filter((nb) => isPrime(nb) === true)
}