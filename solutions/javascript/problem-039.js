/* global module */

module.exports.run = () => {
    const limit = 1000;
    const solutions = [];

    const getNumberOfSolutions = function (perimeter) {
        let count = 0;

	    for (let a = 1; a < perimeter; a++) {
		    for (let b = a; b < perimeter - a; b++) {
		        if ((a * a + b * b) === Math.pow(perimeter - a - b, 2)) {
			        count++;
                }
            }
        }

	    return count;
	};

    let number = 0;

    for (let i = 0; i <= limit; i++) {
	    solutions.push(getNumberOfSolutions(i));
    }

    for (let i = 0, max = 0; i < solutions.length; i++) {
	    if (solutions[i] > max) {
	        max = solutions[i];
	        number = i;
	    }
    }

    return number;
};
