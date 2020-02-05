/* global module */

module.exports.run = () =>
    Array.from(new Array(1000))
    .map((e, i) => i)
    .filter(i => !(i % 3 && i % 5))
    .reduce((a, c) => a + c, 0);
