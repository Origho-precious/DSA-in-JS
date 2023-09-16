function titleCase(str) {
	let strArr = str.toLowerCase().split(" ");

  strArr = strArr.map((el) => {
		// Turn each segment of the string into a Array
		const elArr = Array.from(el);
		// Replace the first letter with an uppercase version of it.
		elArr.splice(0, 1, elArr[0].toUpperCase());

		return elArr.join("");
	});

	return strArr.join(" ");
}

module.exports = titleCase;
