/* global module */

module.exports.run = () => {
    const denominations = [1, 2, 5, 10, 20, 50, 100, 200];
    const limit = 200;

    const getCombinations = (limit, denominations) => {
        let count = 0,
            currentCoin;

        if (limit === 0) {
            return 1;
        }

        if (denominations.length <= 0) {
            return 0;
        }

        currentCoin = denominations.pop();

        for (let i = 0; (currentCoin * i) <= limit; i++) {
            count += getCombinations(
                limit-currentCoin*i,
                denominations.slice(0)
            );
        }

        return count;
    };

    return getCombinations(limit, denominations);
};
