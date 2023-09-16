function findMissingLetter(letters) {
	const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const startIndex = alphabets.indexOf(letters[0]);

	for (let i = 0; i < letters.length; i++) {
		if (alphabets[startIndex + i] !== letters[i]) {
			return alphabets[startIndex + i];
		}
	}

	return "";
}

module.exports = findMissingLetter;
