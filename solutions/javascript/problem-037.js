/* global module */

module.exports.run = () => {
    const limit = 1000000;
    const numbers = [];

    const isNumberInteresting = number => {
	    let isInterestingYet = true;

	    for (let i = 1; i < number.length && isInterestingYet; i++) {
		    isInterestingYet = isNumberPrime(+(number.substr(i)));
        }

	    for (let i = number.length - 1; i > 0 && isInterestingYet; i--) {
		    isInterestingYet = isNumberPrime(+(number.substr(0, i)));
        }

	    return isInterestingYet;
	};

    const isNumberPrime = number =>
	    !!numbers[number];

	const outputNumbers = [];

	var count = 0,
	    sum = 0;

    for (let i = 0; i < limit; i++) {
	    numbers.push(i);
    }

    numbers[1] = 0;

    for (let i = 2; i < limit; i++) {
	    for (let j = i * i; j < limit; j = j + i) {
            if (j % i === 0) {
		        numbers[j] = 0;
            }
        }
    }

    for (let i = 11; count < 11; i++) {
	    if (
            numbers[i]
	            && isNumberInteresting(numbers[i].toString())
        ) {
	        outputNumbers.push(i);
	        count++;
	    }
    }

    for (let i = 0; i < outputNumbers.length; i++) {
	    sum += outputNumbers[i];
    }

    return sum;
};
