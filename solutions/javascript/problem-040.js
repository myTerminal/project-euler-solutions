/* global module */

module.exports.run = () => {
    const limit = 1000000;

    var fract = '',
        output = 1;

    for (let i = 1; fract.length < limit; i++) {
	    fract += i.toString();
    }

    for (let i = 1; i <= 1000000; i *= 10) {
	    output *= (+fract[i - 1]);
    }

    return output;
};
