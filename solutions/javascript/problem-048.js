/* global module */

module.exports.run = () => {
    let sum = 0;

	const getSelfPower = number =>
        raiseNumber(number, number);

	const raiseNumber =  (number, power) => {
        let raisedNumber = 1;

	    for (let i = 0; i < power; i++) {
		    raisedNumber = reduceToTenDigits(raisedNumber * number);
        }

	    return raisedNumber;
	};

	const reduceToTenDigits = number => {
	    const stringNumber = number.toString();

	    return stringNumber.length > 10
		    ? +(stringNumber.substr(stringNumber.length - 10))
		    : number;
	};


    for (let i = 1; i <= 1000; i++) {
	    sum = reduceToTenDigits(sum) + getSelfPower(i);
    }

    return reduceToTenDigits(sum);
};
