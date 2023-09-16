function countVowels(str) {
  const vowel = ["a", "e", "i", "o", "u"];
  
  let count = 0;

  for (let i = 0; i < str.length; i++){
    if (vowel.includes(str[i].toLowerCase())) {
      count++
    }
  }

  return count;
}

module.exports = countVowels;
