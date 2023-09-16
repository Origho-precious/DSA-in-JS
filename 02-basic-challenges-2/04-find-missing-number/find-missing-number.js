function findMissingNumber(numArr) {
	if (numArr === undefined) {
		return undefined;
	}

	if (numArr.length === 0) {
		return 1;
	}

	const max = Math.max(...numArr);

	const arrSum = numArr.reduce((prev, acc) => prev + acc, 0);
	const supposedSum = [...Array(max + 1).keys()].reduce(
		(prev, acc) => prev + acc,
		0
	);

	return supposedSum - arrSum;
}

module.exports = findMissingNumber;
