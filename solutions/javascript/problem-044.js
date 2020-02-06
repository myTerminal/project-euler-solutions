/* global module */

module.exports.run = () => {
    const pentagonalCollection = [];
    const limit = 2500;

    for (let i = 1; i <= limit; i++) {
	    pentagonalCollection.push(i * (3 * i - 1) / 2);
    }

    var d;

    for (let i = 0, sum, diff; i < limit; i++) {
	    for (let j = i + 1, firstNumber, secondNumber; j < limit; j++) {
	        firstNumber = pentagonalCollection[i];
	        secondNumber = pentagonalCollection[j];
	        sum = secondNumber + firstNumber;
	        diff = secondNumber - firstNumber;

	        if (diff && (diff > d)) {
		        break;
            }

	        if (
                pentagonalCollection.indexOf(sum) >- 1
		            && pentagonalCollection.indexOf(diff) >- 1
            ) {
		        d = diff;
            }
	    }
    }

    return d;
};
