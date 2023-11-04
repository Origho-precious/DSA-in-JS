function highestScoringWord(str) {
	const alphabets = "abcdefghijklmnopqrstuvwxyz";

	const words = str.split(" ");

	const wordsObj = {};

	words.forEach((word) => {
		wordsObj[word] = word
			.split("")
			.reduce(
				(acc, curVal) => alphabets.indexOf(curVal.toLowerCase()) + 1 + acc,
				0
			);
	});

	let biggest = words[0];

	for (let word in wordsObj) {
		if (wordsObj[word] > wordsObj[biggest]) {
			biggest = word;
		}
	}

	return biggest;
}

module.exports = highestScoringWord;
