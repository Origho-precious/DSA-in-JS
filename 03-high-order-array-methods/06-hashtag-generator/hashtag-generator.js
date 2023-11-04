function generateHashtag(text) {
	if (!text || text?.length > 140) return false;

	const newText = text.split(" ").map((word) => capitalize(word));

	newText.unshift("#");

	return newText.join("");
}

const capitalize = (word) => {
	return word.slice(0, 1).toUpperCase() + word.slice(1);
};

module.exports = generateHashtag;
