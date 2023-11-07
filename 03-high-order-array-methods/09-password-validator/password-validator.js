/**
 * A Regex will be more optimal 
 * but this exercise is for higher order array methods
 */

function validatePassword(password) {
	if (
		password.length < 8 ||
		!containsUppercaseLetter(password) ||
		!containsLowercaseLetter(password) ||
		!containsNumber(password)
	) {
		return false;
	}

	return true;
}

const containsUppercaseLetter = (password) => {
	const uppercaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	return Array.from(password).some((letter) =>
		uppercaseAlphabets.includes(letter)
	);
};

const containsLowercaseLetter = (password) => {
	const lowercaseAlphabets = "abcdefghijklmnoprstuvwxyz";

	return Array.from(password).some((letter) =>
		lowercaseAlphabets.includes(letter)
	);
};

const containsNumber = (password) => {
	const numbers = "0123456789";

	return Array.from(password).some((letter) =>
		numbers.includes(letter.toString())
	);
};

module.exports = validatePassword;
