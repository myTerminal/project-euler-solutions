/* global require module */

const {
    Memoizer,
    fibonacciMemoizable
} = require('./common');

module.exports.run = () => {
    const limit = 4000000;

    let	sum = 0,
	    i = 1,
    	currentTerm = 0,
    	myFunc = new Memoizer(fibonacciMemoizable);

    while (currentTerm < limit) {
	    currentTerm = myFunc.getValue(i);

	    if (currentTerm % 2 === 0) {
	        sum += currentTerm;
        }

	    i++;
    };

    return sum;
};
