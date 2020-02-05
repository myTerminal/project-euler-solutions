/* global require module */

const { getPrimesBelowNumber } = require('./common');

module.exports.run = () => {
    const limit = 2000000;
    const numbers = getPrimesBelowNumber(limit);

    let sum = 0;

    for (let i = 0; i < limit; i++) {
	    sum += numbers[i];
    }

    return sum;
};
