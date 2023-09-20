function findFirstNonRepeatingCharacter(str) {
	const strObj = {};
	let nonRepeating = null;

	for (let i = 0; i < str.length; i++) {
		strObj[str[i]] = (strObj[str[i]] || 0) + 1;
	}

	for (const key in strObj) {
		if (strObj[key] === 1) {
			return (nonRepeating = key);
		}
	}

	return nonRepeating;
}

module.exports = findFirstNonRepeatingCharacter;
