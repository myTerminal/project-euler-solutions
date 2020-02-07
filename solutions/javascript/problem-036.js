/* global module */

module.exports.run = () => {
    const limit = 1000000;

    const isPalindromic = stringer =>
        stringer === stringer.split('').reverse().join('');

    let sum = 0;

    for (let i = 1; i < limit; i++) {
        if (
            isPalindromic(i.toString())
                && isPalindromic(i.toString(2))
        ) {
            sum+=i;
        }
    }

    return sum;
};
