/* global require module */

const {
    Memoizer,
    factorialMemoizable
} = require('./common');

module.exports.run = () => {
    const myFactorial = new Memoizer(factorialMemoizable);
    const limit = 1000000;

    const chainLengths = { };
    const loopers = {
        169: 3,
        871: 2,
        872: 2,
        2: 1,
        1: 1,
        145: 1
    };

    const getSumOfFactorialsOfDigits = number => {
        const stringNumber = number.toString();

        let sum = 0;

        for (let i = 0; i < stringNumber.length; i++) {
            sum = sum +  myFactorial.getValue(parseInt(stringNumber[i]));
        }

        return sum;
    };

    let input,
        terms,
        sumOfFactorialOfDigits,
        count = 0;

    for (let i = 1; i < limit; i++, terms = 1) {
        sumOfFactorialOfDigits = i;

        do {
            input = sumOfFactorialOfDigits;
            sumOfFactorialOfDigits = getSumOfFactorialsOfDigits(input);
            terms++;

            if (input == sumOfFactorialOfDigits) {
                loopers[input] = input;
            }
        }
        while (
            sumOfFactorialOfDigits !== i
                && !loopers[sumOfFactorialOfDigits]
        );

        chainLengths[i] = terms;

        if (terms === 58) {
            count++;
        }
    }

    return count;
};
