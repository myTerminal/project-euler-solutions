/* global module */

module.exports.run = () => {
    const numbers = [];

    let totalSum = 0,
        currentNumber;

    const getDigitPowerSums = (number, power) => {
        let sum = 0;

        for (let i = 0; i < number.length; i++) {
            sum = sum + Math.pow(+(number[i]), power);
        }

        return sum;
    };

    for (let i = 11; ; i++) {
        currentNumber = i.toString();

        if (currentNumber == getDigitPowerSums(currentNumber, 5)) {
            totalSum += +(currentNumber);
            numbers.push(currentNumber);

            if (numbers.length >= 6) {
                break;
            }
        }
    }

    return totalSum;
};
