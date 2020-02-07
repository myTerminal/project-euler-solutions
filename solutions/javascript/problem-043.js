/* global module */

module.exports.run = () => {
    let listOfPandigitals,
        sum = 0;

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
            remainingWord = word.replace(startLetter, "");
            smallGeorge = generatePanDigitalSeries(remainingWord);

            for (let j = 0; j < smallGeorge.length; j++) {
                list.push(startLetter + smallGeorge[j]);
            }
        }

        return list;
    };

    const testPandigital = term => {
        if (+(term.substr(7, 3)) % 17) {
            return false;
        }

        if (+(term.substr(6, 3)) % 13) {
            return false;
        }

        if (+(term.substr(5, 3)) % 11) {
            return false;
        }

        if (+(term.substr(4, 3)) % 7) {
            return false;
        }

        if (+(term.substr(3, 3)) % 5) {
            return false;
        }

        if (+(term.substr(2, 3)) % 3) {
            return false;
        }

        if (+(term.substr(1, 3)) % 2) {
            return false;
        }

        return true;
    };

    listOfPandigitals = generatePanDigitalSeries("9876543210");

    for (let index in listOfPandigitals) {
        if (testPandigital(listOfPandigitals[index])) {
            sum += +listOfPandigitals[index];
        }
    }

    return sum;
};
