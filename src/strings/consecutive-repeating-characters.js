function findConsecutiveRepeatingChars(chars) {
  let result = "";
  let count = 1;
  let currentChar = chars[0];
  for (let i = 1; i <= chars.length; i++) {
    if (chars[i] === currentChar) {
      count++;
    } else {
      count > 1 ? (result += currentChar + count) : (result += currentChar);

      // Reset the current character and count
      currentChar = chars[i];
      count = 1;
    }
  }

  return result;
}
console.log(findConsecutiveRepeatingChars("aaabbcddd"));
