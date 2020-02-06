/* global require module */

const { raiseBigNumber } = require('./common');

module.exports.run = () => {
    const limit = 100;
    const sums = [];

	const getSumOfDigits = number => {
	    const digits = number.split("");

        let sum = 0;

	    for (let i = 0; i < digits.length; i++) {
		    sum += (+digits[i]);
        }

	    return sum;
	};

    for (let a = limit - 1; a < limit; a++) {
	    for (let b = Math.floor(3 * limit / 4); b < limit; b++) {
	        sums.push(getSumOfDigits(raiseBigNumber(a.toString(), b)));
        }
    }

    for (let a = Math.floor(3 * limit / 4); a < limit; a++) {
	    for (let b = limit - 1; b < limit; b++) {
	        sums.push(getSumOfDigits(raiseBigNumber(a.toString(), b)));
        }
    }

    return Math.max.apply(Math, sums);
};
