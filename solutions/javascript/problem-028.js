/* global module */

module.exports.run = () => {
	const getSpiralSum = size => {
	    return (size === 1)
		    ? 1
		    : (4 * size * size - (6 * size) + 6) + getSpiralSum(size - 2);
	};

    return getSpiralSum(1001);
};
