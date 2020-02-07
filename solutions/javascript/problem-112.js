/* global module */

module.exports.run = () => {
    const targetPercentage = 99;

    const isIncreasingNumber = number => {
        const numberInString = number.toString();
        const digits = numberInString.split('');

        let isNegative;

        for (let i = 1; i < digits.length && !isNegative; i++) {
            isNegative = (+digits[i] - +digits[i - 1]) < 0;
        }

        return !isNegative;
    };

    const isDecreasingNumber = number => {
        const numberInString = number.toString();
        const digits = numberInString.split('');

        let isPositive;

        for (let i = 1; i < digits.length && !isPositive; i++) {
            isPositive = (+digits[i] - +digits[i - 1]) > 0;
        }

        return !isPositive;
    };

    let number,
        countOfBouncyNumbers = 0,
        currentPercentage;

    for (let i = 100; !number; i++) {
        if (!isIncreasingNumber(i) && !isDecreasingNumber(i)) {
            countOfBouncyNumbers++;
        }

        currentPercentage = (countOfBouncyNumbers * 100) / i;

        if(currentPercentage == targetPercentage) {
            number = i;
        }
    }

    return number;
};
