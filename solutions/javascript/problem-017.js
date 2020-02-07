/*global module */

module.exports.run = () => {
    let sum = 0;

    const getWordRepresentation = number =>
          getThousandsRep(number);

    const getThousandsRep = number => {
        const thousandsPlace = getThousandsPlace(number),
            hundredsRep = getHundredsRep(number),
            andSeparator = hundredsRep ?
                'and ' :
                '';

        switch (thousandsPlace) {
        default:
        case 0:
            return '' + getHundredsRep(number);
        case 1:
            return 'one thousand ' + getHundredsRep(number);
        case 2:
            return 'two thousand ' + getHundredsRep(number);
        case 3:
            return 'three thousand ' + getHundredsRep(number);
        case 4:
            return 'four thousand ' + getHundredsRep(number);
        case 5:
            return 'five thousand ' + getHundredsRep(number);
        case 6:
            return 'six thousand ' + getHundredsRep(number);
        case 7:
            return 'seven thousand ' + getHundredsRep(number);
        case 8:
            return 'eight thousand ' + getHundredsRep(number);
        case 9:
            return 'nine thousand ' + getHundredsRep(number);
        }
    };

    const getHundredsRep = number => {
        const hundredsPlace = getHundredsPlace(number),
            tensRep = getTensRep(number),
            andSeparator = tensRep ?
                'and ' :
                '';

        switch (hundredsPlace) {
        default:
        case 0:
            return '' + getTensRep(number);
        case 1:
            return 'one hundred ' + andSeparator + tensRep;
        case 2:
            return 'two hundred ' + andSeparator + tensRep;
        case 3:
            return 'three hundred ' + andSeparator + tensRep;
        case 4:
            return 'four hundred ' + andSeparator + tensRep;
        case 5:
            return 'five hundred ' + andSeparator + tensRep;
        case 6:
            return 'six hundred ' + andSeparator + tensRep;
        case 7:
            return 'seven hundred ' + andSeparator + tensRep;
        case 8:
            return 'eight hundred ' + andSeparator + tensRep;
        case 9:
            return 'nine hundred ' + andSeparator + tensRep;
        }
    };

    const getTensRep = number => {
        const tensPlace = getTensPlace(number);

        switch (tensPlace) {
        default:
        case 0:
            return getUnitsRep(number);
        case 1:
            const unitsPlace = getUnitsPlace(number);

            switch (unitsPlace) {
            default:
            case 0:
                return 'ten';
            case 1:
                return 'eleven';
            case 2:
                return 'twelve';
            case 3:
                return 'thirteen';
            case 4:
                return 'fourteen';
            case 5:
                return 'fifteen';
            case 6:
                return 'sixteen';
            case 7:
                return 'seventeen';
            case 8:
                return 'eighteen';
            case 9:
                return 'nineteen';
            }
            break;
        case 2:
            return 'twenty ' + getUnitsRep(number);
        case 3:
            return 'thirty ' + getUnitsRep(number);
        case 4:
            return 'forty ' + getUnitsRep(number);
        case 5:
            return 'fifty ' + getUnitsRep(number);
        case 6:
            return 'sixty ' + getUnitsRep(number);
        case 7:
            return 'seventy ' + getUnitsRep(number);
        case 8:
            return 'eighty ' + getUnitsRep(number);
        case 9:
            return 'ninety ' + getUnitsRep(number);
        }
    };

    const getUnitsRep = number => {
        const unitsPlace = getUnitsPlace(number);

        switch (unitsPlace) {
        default:
        case 0:
            return '';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        }
    };

    const getUnitsPlace = number =>
          number % 10;

    const getTensPlace = number =>
        getUnitsPlace((number - getUnitsPlace(number)) / 10);

    const getHundredsPlace = number =>
        getTensPlace((number - getUnitsPlace(number)) / 10);

    const getThousandsPlace = number =>
        getHundredsPlace((number - getUnitsPlace(number)) / 10);


    for (let i = 1, word; i <= 1000; i++) {
        word = getWordRepresentation(i).replace(/ /g,'');
        sum += word.length;
    }

    return sum;
};
