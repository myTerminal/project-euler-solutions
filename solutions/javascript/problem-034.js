/* global require module */

const {
    Memoizer,
    factorialMemoizable
} = require('./common');

module.exports.run = () => {
    const myFactorial = new Memoizer(factorialMemoizable);
    const numbers = [];
    
    let sumOfFactorialsOfDigits,
        sum = 0;
    
	const getSumOfFactorialsOfDigits = number => {
	    const stringNumber = number.toString();

		let sum = 0;

	    for (let i = 0; i < stringNumber.length; i++) {
		    sum = sum +  myFactorial.getValue(+(stringNumber[i]));
        }

	    return sum;
	};

    for (let i = 10; i < 1000000; i++) {
	    sumOfFactorialsOfDigits = getSumOfFactorialsOfDigits(i);

	    if (sumOfFactorialsOfDigits === i) {
	        numbers.push(i);
	        sum += i;
	    }
    }

    return sum;
};
