// function areAllCharactersUnique(str) {
// 	let result = true;

// 	const strArr = [];

// 	for (let i = 0; i < str.length; i++) {
// 		if (strArr.includes(str[i])) {
// 			result = false;
// 			break;
// 		}
// 		strArr.push(str[i]);
// 	}

// 	return result;
// }

function areAllCharactersUnique(str) {
  const strLength = str.length;
  const uniqueArrLength = new Set(str);

  return strLength === uniqueArrLength.size;
}

module.exports = areAllCharactersUnique;
