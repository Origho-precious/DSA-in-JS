function findMaxNumber(numArr) {
	// return Math.max(...numArr);
  
	let largest = 0;

	for (let i = 0; i < numArr.length; i++) {
		if (numArr[i] > largest) {
			largest = numArr[i];
		}
  }
  
  return largest;
}

module.exports = findMaxNumber;
