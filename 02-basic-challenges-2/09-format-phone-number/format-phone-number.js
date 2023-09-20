function formatPhoneNumber(numArr) {
  const firstSegment = `(${numArr.slice(0, 3).join('')})`;
  const secondSegment = numArr.slice(3, 6).join("");
  const thirdSegment = numArr.slice(6).join("");

  return `${firstSegment} ${secondSegment}-${thirdSegment}`;
}

module.exports = formatPhoneNumber;
