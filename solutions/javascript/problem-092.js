/* global module */

module.exports.run = () => {
    const limit = 10000000;
    const cache = [];

    const getNextNumber = number => {
        const numberAsString = number.toString();

        let digit,
            sum = 0;

        for (let i = 0; i < numberAsString.length; i++) {
            digit = +numberAsString[i];
            sum += (digit * digit);
        }

        return sum;
    };

    const endsAt89 = number => {
        let nextNumber = number;

        while (nextNumber !== 89 && nextNumber !== 1) {
            nextNumber = cache[nextNumber] || getNextNumber(nextNumber);
        }

        cache[number] = nextNumber;
        return nextNumber === 89;
    };

    let count = 0;

    for (let i = 1; i <= limit; i++) {
        if (endsAt89(i)) {
            count++;
        }
    }

    return count;
};
