function arrayIntersection(arr1, arr2) {
	const intersection = [];

	arr1.forEach((el) => {
		if (arr2.includes(el)) {
			intersection.push(el);
		}
	});

	return intersection;
}

module.exports = arrayIntersection;
