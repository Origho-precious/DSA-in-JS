function isPalindrome(str) {
	str = str.replace(/\s/g, "").replaceAll(",", "").toLowerCase();

	return str === str.split("").reverse().join("");
}

module.exports = isPalindrome;
