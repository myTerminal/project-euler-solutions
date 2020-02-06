/* global module */

module.exports.run = () => {
    const products = [];
    const limit = 10000;

    let product,
        term,
        sum = 0;

	const containsAllDigits = number => {
	    for (let i = 1; i <= 9; i++) {
		    number = number.replace(i.toString(), '');
        }

	    return !number.length;
	};
	

    for (let i = 1; i <= limit; i++) {
	    for (let j = i, lengthExceeded = false; j <= limit && !lengthExceeded; j++) {
	        product = i * j;
	        term = product.toString() + i.toString() + j.toString();

	        if (term.length > 9) {
		        lengthExceeded = true;
            }

	        if (
                term.length == 9
		            && containsAllDigits(term)
		            && products.indexOf(product) < 0
            ) {
		        products.push(product);
	        }
	    }
    }

    for (let i = 0; i < products.length; i++) {
	    sum += products[i];
    }

    return sum;
};
