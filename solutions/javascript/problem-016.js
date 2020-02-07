/* global require module */

const { addBigNumbers } = require('./common');

module.exports.run = () => {
    let init = '2',
        sum = 0;

    for (let i = 2; i <= 1000; i++) {
        init = addBigNumbers(init, init);
    }

    for (let i = 0; i < init.length; i++) {
        sum += +(init[i]);
    }

    return sum;
};
