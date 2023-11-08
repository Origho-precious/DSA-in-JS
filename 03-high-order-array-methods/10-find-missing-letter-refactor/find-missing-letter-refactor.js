function findMissingLetter(letterArray) {
	const alphabets = Array.from(
		"abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	);

	const firstLetterIndex = alphabets.indexOf(letterArray[0]);
	const lastLetterIndex = alphabets.indexOf(
		letterArray[letterArray.length - 1]
	);

	const expectedArray = alphabets.slice(firstLetterIndex, lastLetterIndex);

	const missingLetter = expectedArray.find(
		(letter) => !letterArray.includes(letter)
	);

	return missingLetter;
}

module.exports = findMissingLetter;
