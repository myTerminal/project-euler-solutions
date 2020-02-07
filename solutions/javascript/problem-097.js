/* global require module */

const {
    addBigNumbers,
    multiplyBigNumbers
} = require('./common');

module.exports.run = () => {
    const power = 7830457;

    const getLastTenDigits = numberInString => {
        const len = numberInString.length;

        return numberInString.substring(len - 10);
    };

    let init = '2',
        output;

    for (let i = 1; i <= power - 1; i++) {
        init = addBigNumbers(init, init);
        init = getLastTenDigits(init);
    }

    output = multiplyBigNumbers(init, '28433');
    output = getLastTenDigits(output);
    output = addBigNumbers(output, '1');

    return output;
};
