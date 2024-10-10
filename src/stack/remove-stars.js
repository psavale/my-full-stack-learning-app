function removeStars(s) {
  const stack = [];

  // Iterate through each character in the string
  for (let char of s) {
    if (char === "*") {
      // Remove the most recent character from the stack when we encounter a star
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      // Push the current character onto the stack
      stack.push(char);
    }
  }

  // Join the stack to form the final string
  return stack.join("");
}

// Example usage:
console.log(removeStars("leet**cod*e")); // Output: "lecoe"
console.log(removeStars("erase*****")); // Output: ""
