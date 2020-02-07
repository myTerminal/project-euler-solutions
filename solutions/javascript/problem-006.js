/* global module */

module.exports.run = () => {
    let sumOfSquares = 0,
        squareOfSum = 0,
        difference;

    for (let i = 1; i <= 100; i++) {
        sumOfSquares = sumOfSquares + (i * i);
        squareOfSum = squareOfSum + i;
    }

    squareOfSum = squareOfSum * squareOfSum;
    difference = squareOfSum - sumOfSquares;

    return difference;
};
