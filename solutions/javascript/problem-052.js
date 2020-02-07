/* global module */

module.exports.run = () => {
    let number,
        number1,
        number2,
        number3,
        number4,
        number5,
        number6;

    const scaleNumber = (number, mag) => {
        return number * mag;
    };

    const getSortedDigits = number =>
        number.toString().split('').sort().join('');

    for (let i = 11; !number; i++) {
        if (i.toString().length !== scaleNumber(i, 6).toString().length) {
            continue;
        }

        number1 = getSortedDigits(i);
        number2 = getSortedDigits(scaleNumber(i, 2));
        number3 = getSortedDigits(scaleNumber(i, 3));
        number4 = getSortedDigits(scaleNumber(i, 4));
        number5 = getSortedDigits(scaleNumber(i, 5));
        number6 = getSortedDigits(scaleNumber(i, 6));

        if (
            number1 == number2
                && number2 == number3
                && number3 == number4
                && number4 == number5
                && number5 == number6
        ) {
            number = i;
        }
    }

    return number;
};
