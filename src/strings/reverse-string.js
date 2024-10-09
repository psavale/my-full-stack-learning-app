function reverseWords(str) {
  // Trim the string to remove any extra spaces at the start or end
  // Split the string by spaces to get individual words
  // Reverse the array of words
  // Join the array back into a string with a space between each word
  return str.trim().split(/\s+/).reverse().join(" ");
}

// Example usage:
let sentence = "  Hello   world!  ";
let reversedSentence = reverseWords(sentence);
console.log(reversedSentence); // Output: "world! Hello"
