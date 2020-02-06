/* global require module */

const { getPrimesBelowNumber } = require('./common');

module.exports.run = () => {
    const primes = getPrimesBelowNumber(20000);

    const getCountOfPrimes = (a, b) => {
	    let count = 0,
		    i = 0,
		    generatedPrime,
		    isCompositeFound;

	    while (!isCompositeFound) {
		    generatedPrime = i * i + a * i + b;
		    isCompositeFound = !isPrime(generatedPrime);

		    if (!isCompositeFound) {
		        count++;
            }

		    i++;
	    }

	    return count;
	};

    const isPrime = number => {
	    return !!primes[number];
	};

    const limit = 1000;
    const collection = [];

    let product = 1,
	    max = { n: 0},
        obj;

    for (let i = -limit + 1; i <= limit - 1; i++) {
	    for (let j = -limit + 1; j <= limit - 1; j++) {
	        collection.push({
		        a: i,
		        b: j,
		        n: getCountOfPrimes(i, j)
	        });
	    }
    }

    for (let i = 0; i < collection.length; i++) {
	    obj = collection[i];

	    if (obj.n > max.n) {
	        max = obj;
        }
    }

    product = max.a * max.b;

    return product;
};
