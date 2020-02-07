/* global require module */

const { getPrimesBelowNumber } = require('./common');

module.exports.run = () => {
    const limit = 10000;
    const number = 600851475143;
    const primes = getPrimesBelowNumber(limit);

    let output;

    for (let i = primes.length - 1; i > 0 && !output; i--) {
        if (number % primes[i] === 0) {
            output = primes[i];
        }
    }

    return output;
};
