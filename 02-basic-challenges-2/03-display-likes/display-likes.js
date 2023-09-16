function displayLikes(nameArr) {
	switch (nameArr.length) {
		case 0:
			return "no one likes this";
		case 1:
			return `${nameArr[0]} likes this`;
		case 2:
			return `${nameArr[0]} and ${nameArr[1]} like this`;
		case 3:
			return `${nameArr[0]}, ${nameArr[1]} and ${nameArr[2]} like this`;
		default:
			return `${nameArr[0]}, ${nameArr[1]} and ${
				nameArr.length - 2
			} others like this`;
	}
}

module.exports = displayLikes;
