/* global module */

module.exports.run = () => {
	const george = word => {
	    if (word.length === 1) {
		    return [word];
        }

	    const list = [];

		var startLetter,
		    remainingWord,
		    smallGeorge;

	    for (let i = 0; i < word.length; i++) {
		    startLetter = word[i];
		    remainingWord = word.replace(startLetter, '');
		    smallGeorge = george(remainingWord);

		    for (let j = 0; j < smallGeorge.length; j++) {
		        list.push(startLetter + smallGeorge[j]);

		        if (list.length >= 1000000) {
			        return list;
                }
		    }
	    }

	    return list;
	};

	const sequence = george("0123456789");

    return sequence[999999];
};
