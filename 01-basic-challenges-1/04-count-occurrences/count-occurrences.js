function countOccurrences(str, char) {
	return Array.from(str).filter((el) => el === char).length;
}

module.exports = countOccurrences;
