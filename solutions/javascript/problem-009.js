/* global module */

module.exports.run = () => {
    let product,
        sqrtOfSum;

    for (let a = 1; a < 1000; a++) {
        for (let b = 1; b < 1000; b++) {
            sqrtOfSum = Math.sqrt((a * a) + (b * b));

            if ((a + b + sqrtOfSum) === 1000) {
                product = a * b * sqrtOfSum;
            }
        }
    }

    return product;
};
