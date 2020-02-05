/* global module */

module.exports.run = () => {
    const palindromes = [];

    const isPalindrome = stringer =>
	    stringer === stringer.split("").reverse().join("");
    
	let number = 0;

    for (let i = 999; i > 0 && !number; i--) {
	    for (let j = 999; j > 0 && !number; j--) {
	        if (isPalindrome((i * j).toString())) {
		        palindromes.push(i * j);
            }
        }
    }

    for (let i = 0; i < palindromes.length; i++) {
	    if (palindromes[i] > number) {
	        number = palindromes[i];
        }
    }

    return number;
};
