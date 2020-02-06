/* global require module */

const { raiseBigNumber } = require('./common');

module.exports.run = () => {
    const limit = 100;

    let number,
	    hasExceeded,
        count = 0;

    for (let digits = 1, skipCount = 0; digits < limit; digits++, hasExceeded = false) {
	    for (let i = 1; !hasExceeded && skipCount < 2; i++) {
	        number = raiseBigNumber(i.toString(), digits);

	        if (number.length === digits) {
		        count++;
		        skipCount = 0;
	        }

	        if (number.length > digits) {
		        hasExceeded = true;
		        skipCount++;
	        }
	    }
    }

    return count;
};
