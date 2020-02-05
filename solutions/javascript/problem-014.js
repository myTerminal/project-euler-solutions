/* global module */

module.exports.run = () => {
    const limit = 1000000;
    const sequenceLengths = new Array(limit);
    
	let currentNumber,
        currentLength;

	const getNextNumber = number => {
	    if (number % 2 === 0) {
		    return number / 2;
	    } else {
		    return (3 * number) + 1;
        }
	};
    
	let theNumber = 0,
        longestSequence = 0;

    for (let i = 2; i < limit; i++) {
	    currentNumber = i;
        currentLength = 1;
	    
	    while (currentNumber !== 1) {

	        if (sequenceLengths[currentNumber]) {
		        currentLength = currentLength + sequenceLengths[currentNumber] - 1;
		        currentNumber = 1;
	        } else {
		        currentNumber = getNextNumber(currentNumber);
		        currentLength++;
	        }
        }

	    sequenceLengths[i] = currentLength;
    }

    for (let i = 0; i < limit; i++) {
	    if (sequenceLengths[i] > longestSequence) {
	        theNumber = i;
	        longestSequence = sequenceLengths[i];
	    }
    }

    return theNumber;
};
