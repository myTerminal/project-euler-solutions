/* global require module */

const {
    Memoizer,
    fibonacciMemoizableBig
} = require('./common');

module.exports.run = () => {
    const myFunc = new Memoizer(fibonacciMemoizableBig);

    let number,
        fib,
        i = 0;

    while (!number) {
        i++;
        fib = myFunc.getValue(i);

        if (fib.length >= 1000) {
            number = i;
        }
    }

    return number;
};
