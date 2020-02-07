/* global module */

module.exports.run = () => {
    const limitLow = 2;
    const limitHigh = 100;

    let terms = [],
        currentTerm;

    for (let a = limitLow; a <= limitHigh; a++) {

        for (let b = limitLow; b <= limitHigh; b++) {
            currentTerm = Math.log(Math.pow(a, b));

            if (terms.indexOf(currentTerm) < 0) {
                terms.push(currentTerm);
            }
        }
    }

    return terms.length;
};
