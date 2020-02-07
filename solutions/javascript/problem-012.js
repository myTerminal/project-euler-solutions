/* global require module */

const {
    getPrimesBelowNumber,
    Memoizer
} = require('./common');

module.exports.run = () => {
    const limit = 10;
    const primes = getPrimesBelowNumber(5000000);
    const primesL = [];

    let count,
        output;

    const getPrimeFactors = number => {
        const func = (typeof(this) === 'function')
            ? this
            : getPrimeFactors;
        const primeFactors = [];

        for (let index = 0; index < primesL.length; index++) {
            let count = 0;

            while (number % primesL[index] === 0) {
                count++;
                number = number / primesL[index];
            }

            if (count > 0) {
                primeFactors.push([primesL[index], count]);
            }
        }

        return primeFactors;
    };

    const getPrimeFactorsM = Memoizer(getPrimeFactors);

    const getTotalDivisors = primeFactors => {
        let totalDivisors = 1;

        for (let index = 0; index < primeFactors.length; index++) {
            totalDivisors *= (primeFactors[index][1] + 1);
        }

        return totalDivisors;
    };

    for (let i = 0; i < primes.length; i++) {
        if (primes[i]) {
            primesL.push(i);
        }
    }

    let a,
        b,
        primeFactors,
        totalDivisors;
    for (let i = 1, j = i + 1; !output; i += 2, j += 2) {
        a = (i % 2 === 0)
            ? i / 2
            : i;
        b = (j % 2 === 0)
            ? j / 2
            : j;

        primeFactors = getPrimeFactorsM.getValue(a).concat(getPrimeFactorsM.getValue(b));
        totalDivisors = getTotalDivisors(primeFactors);

        if (totalDivisors >= 500) {
            output = a * b;
        }
    }

    return output;
};
