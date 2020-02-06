/* global require module */

const { getPrimesBelowNumber } = require('./common');

module.exports.run = () => {
    const limit = 200000;
    const primes = getPrimesBelowNumber(50000);
    const primesL = [];
    const divisors = [];

	const getPrimeFactors = number => {
	    const primeFactors = [];

		let count;

	    for (let index = 0; index < primesL.length; index++) {
		    count = 0;

		    while (number % primesL[index] == 0) {
		        count++;
		        number = number / primesL[index];
		    }

		    if (count > 0) {
		        primeFactors.push(primesL[index]);
            }
	    }

	    return [primeFactors.toString(), primeFactors.length];
	};

	for (let i = 0; i < primes.length; i++) {
	    if (primes[i]) {
		    primesL.push(i);
        }
    }

    for (let i = 1; i < limit; i++) {
	    divisors[i] = getPrimeFactors(i);
    }

    let a = divisors[0],
        b = divisors[1],
	    c = divisors[2],
        d = divisors[3],
        number;

    for (let i = 4; i < limit && !number; i++) {
	    a = b;
	    b = c;
	    c = d;
	    d = divisors[i];

	    if (
            a[1] === 4
                && b[1] === 4
                && c[1] === 4
                && d[1] === 4
	            && a[0] !== b[0]
                && a[0] !== c[0]
                && a[0] !== d[0]
	            && b[0] !== c[0]
                && b[0] !== d[0]
	            && c[0] !== d[0]
        ) {

	        number = i - 3;
        }
    }

    return number;
};
