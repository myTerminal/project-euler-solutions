/* global module */

module.exports.run = () => {
    let number;

    const isNumberDivisibleBy1To20 = number => {
        for (let i = 3; i < 20; i++) {
            if (number % i !== 0) {
                return false;
            }
        }

        return true;
    };

    for (let i = 20; !number; i = i + 20) {
        if (isNumberDivisibleBy1To20(i)) {
            number = i;
        }
    }

    return number;
};
