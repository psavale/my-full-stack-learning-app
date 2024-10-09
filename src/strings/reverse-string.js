function reverseWords(str) {
  const tempString = str.trim(); // Trim the string to remove any extra spaces at the start or end
  const tempString2 = tempString.split(/\s+/); // Split the string by spaces to get individual words
  const tempString3 = tempString2.reverse(); // Reverse the array of words
  return tempString3.join(" "); // Join the array back into a string with a space between each word
}

// Example usage:
let sentence = "  Hello         world!  ";
let reversedSentence = reverseWords(sentence);
console.log(reversedSentence); // Output: "world! Hello"
