/* global module */

module.exports.run = () => {
    const triangleCollection = [];
    const pentagonalCollection = [];
    const hexagonalCollection = [];
    const limit = 60000;

    for (let i = 285; i < limit; i++) {
        triangleCollection.push(i * (i + 1) / 2);
        pentagonalCollection[i * (3 * i - 1) / 2] = true;
        hexagonalCollection[i * (2 * i - 1)] = true;
    }

    let number;

    for (let i = 0, triangle; i < triangleCollection.length && !number; i++) {
        triangle = triangleCollection[i];

        if (
            pentagonalCollection[triangle]
                && hexagonalCollection[triangle]
        ) {
            number = triangle;
        }
    }

    return number;
};
