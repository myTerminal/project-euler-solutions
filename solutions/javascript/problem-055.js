/* global require module */

const { addBigNumbers } = require('./common');

module.exports.run = () => {
    const limit = 10000;

    const reverseNumber = number =>
        number.split('').reverse().join('');

    const addReverse = number =>
        addBigNumbers(number, reverseNumber(number));

    const isPalindrome = number =>
        number == reverseNumber(number);

    const isLychrel = number => {
        let count = 0;

        do {
            number = addReverse(number);
            count++;
        }
        while (
            !isPalindrome(number)
                && count < 50
        );

        return count === 50;
    };

    let lychrelCount = 0;

    for (let i = 1; i < limit; i++) {
        if (isLychrel(i.toString())) {
            lychrelCount++;
        }
    }

    return lychrelCount;
};
