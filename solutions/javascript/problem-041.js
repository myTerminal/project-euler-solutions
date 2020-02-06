/* global module */

module.exports.run = () => {
    const getLastPanDigitalNumber = numberOfDigits => {
        let stringNumber = '';

        for (let i = numberOfDigits; i > 0; i--) {
            stringNumber = stringNumber + i.toString();
        }

        return stringNumber;
    };

    const generatePanDigitalSeries = word => {
        if (word.length === 1) {
            return [word];
        }

        const list = [];

        let startLetter,
            remainingWord,
            smallGeorge;

        for (let i = 0; i < word.length; i++) {
            startLetter = word[i];
            remainingWord = word.replace(startLetter, '');
            smallGeorge = generatePanDigitalSeries(remainingWord);

            for (let j = 0; j < smallGeorge.length; j++) {
                list.push(startLetter + smallGeorge[j]);
            }
        }

        return list;
    };

    const isPandigitalSeriesComposite = sequence =>
        isDivisibleByThree(sequence);

    const isSuspectedComposite = number => {
        const endsWithSuspicious = number => {
            const list = [0, 2, 4, 5, 6, 8];

            let isSuspicious,
                stringNumber = number.toString(),
                lastDigit = stringNumber.substr(stringNumber.length - 1);

            for (let i = 0; i < list.length && !isSuspicious; i++) {
                isSuspicious = lastDigit==list[i];
            }

            return isSuspicious;
        };

        return endsWithSuspicious(number) || isDivisibleByThree(number);
    };

    const isDivisibleByThree = number => {
        const stringNumber = number.toString();

        let sum = 0;

        for (let i = 0; i < stringNumber.length; i++) {
            sum += +(stringNumber[i]);
        }

        return sum % 3 === 0;
    };

    const isPrime = number => {
        let isComposite;

        for (let i = 2; i < number / 2 && !isComposite; i++) {
            isComposite = !(number % i);
        }

        return !isComposite;
    };

    let lastPanDigitalSequence,
        panDigitals,
        number;

    for (let i = 9; i > 1 && !number; i--) {
        lastPanDigitalSequence = getLastPanDigitalNumber(i);

        if (!isPandigitalSeriesComposite(lastPanDigitalSequence)) {
            panDigitals = generatePanDigitalSeries(lastPanDigitalSequence);
            number = 0;

            for (let i = 0; i < panDigitals.length && !number; i++) {
                if (
                    !isSuspectedComposite(panDigitals[i])
                        && isPrime(panDigitals[i])
                ) {
                    number = panDigitals[i];
                }
            }
        }
    }

    return number;
};
