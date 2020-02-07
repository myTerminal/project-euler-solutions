/* global module */

module.exports.run = () => {
    const limit = 10000;
    const amicableNumbers = [];

    let sumOfNumbers = 0,
        divisorSum,
        divisorSum2;

    const getDivisorsSum = number => {
        let sum = 0;

        for (let i = 1; i <= number / 2; i++) {
            if (number % i === 0) {
                sum += i;
            }
        }

        return sum;
    };

    for (let i = 1; i < limit; i++) {
        if (amicableNumbers.indexOf(i) > -1) {
            continue;
        }

        divisorSum = getDivisorsSum(i);

        if (divisorSum === i) {
            continue;
        }

        divisorSum2 = getDivisorsSum(divisorSum);

        if (i === divisorSum2 && divisorSum !== divisorSum2) {
            amicableNumbers.push(i);
            amicableNumbers.push(divisorSum);
        }
    }

    for (let i = 0; i < amicableNumbers.length; i++) {
        sumOfNumbers = sumOfNumbers + amicableNumbers[i];
    }

    return sumOfNumbers;
};
