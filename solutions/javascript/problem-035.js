/* global require module */

const { getPrimesBelowNumber } = require('./common');

module.exports.run = () => {
    const limit = 1000000;
    const numbers = getPrimesBelowNumber(limit);

    const getRotations = number => {
	    let stringNumber = number.toString();

		const iterations = stringNumber.length;
		const rotations = [number];

	    for (let i = 0; i < iterations - 1; i++) {
		    stringNumber = stringNumber.substr(1)
		        + stringNumber.substr(0,1);

		    rotations.push(+(stringNumber));
	    }

	    return rotations;
	};

    const areAllPrime = rotations => {
	    for (let i = 0; i < rotations.length; i++) {
		    if (!numbers[rotations[i]]) {
		        return false;
            }
        }

	    return true;
	};

	let count = 0;

    for (let i = 0; i < limit; i++) {
	    if (numbers[i] && areAllPrime(getRotations(i))) {
	        count++;
        }
    }

    return count;
};
