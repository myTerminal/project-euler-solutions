/* global require module */

const { getPrimesBelowNumber } = require('./common');

module.exports.run = () => {
    const primes = getPrimesBelowNumber(500000);

    let count = 0,
        prime;

    for (let i = 0; i < primes.length && !prime; i++) {
        if (primes[i]) {
            count++;
        }


        if (count >= 10001) {
            prime = primes[i];
        }
    }

    return prime;
};
