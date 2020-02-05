/* global require module */

const { addBigNumbers } = require('./common');

module.exports.run = () => {
    const number = 100;

	let init = number.toString(),
	    sum = 0;

    for (let i = number; i > 1; i--) {
	    for (let j = 1, tempSum = init; j < i - 1; j++) {
            init = addBigNumbers(init, tempSum);
        }
    }

    for (let i = 0; i < init.length; i++) {
	    sum += +(init[i]);
    }

    return sum;
};
