/* global require module */

const { MemoizerMultiInputs } = require('./common');

module.exports.run = () => {
	const getRouteCount = gridSize => {
	    const myMemoizer = new MemoizerMultiInputs(countNumberOfPaths);

	    return myMemoizer.getValue([gridSize, gridSize]);
	};

	const countNumberOfPaths = function (gridPositionX, gridPositionY) {
	    const func = (typeof(this) === 'function')
		    ? this
		    : countNumberOfPaths;

	    if (gridPositionX === 1 && gridPositionY === 1) {
		    return 2;
        }

	    if (gridPositionX === 1) {
		    return 1 + func.call(
                this,
				[gridPositionX,  gridPositionY - 1]
            );
        }

	    if (gridPositionY === 1) {
		    return 1 + func.call(
                this,
				[gridPositionX - 1,  gridPositionY]
            );
        }

	    return func.call(
            this,
            [gridPositionX - 1, gridPositionY]
        ) + func.call(
            this,
            [gridPositionX,  gridPositionY - 1]
        );
	};

    return getRouteCount(20);
};
