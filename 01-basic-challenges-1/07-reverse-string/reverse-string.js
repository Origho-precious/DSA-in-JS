function reverseString(str) {
	let rStr = [];

	str = Array.from(str);

	for (let i = str.length - 1; i >= 0; i--) {
		rStr.push(str[i]);
	}

	return rStr.join("");
}

module.exports = reverseString;
