function validAnagrams(str1, str2) {
	if (str1.length !== str2.length) return false;

	const alphabets = "abcdefghijklmnopqrstuvwxyz";

	/**
	 * 1. Rearrange the string
	 * 2. Compare them
	 */

	const sortedStr1 = str1
		.split("")
		.map((letter) => alphabets.indexOf(letter))
		.sort((a, b) => a - b)
		.map((num) => alphabets[num])
		.join("");

	const sortedStr2 = str2
		.split("")
		.map((letter) => alphabets.indexOf(letter))
		.sort((a, b) => a - b)
		.map((num) => alphabets[num])
		.join("");

	return sortedStr1 === sortedStr2
}

module.exports = validAnagrams;
