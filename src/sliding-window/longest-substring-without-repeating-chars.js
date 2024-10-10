/*This solution efficiently finds the longest substring without repeating characters 
by leveraging the sliding window technique with two pointers and a set. */

function lengthOfLongestSubstring(s) {
  let start = 0; // Pointer to track the start of the current window
  let maxLength = 0; // The maximum length of substring found
  const seen = new Set(); // To store unique characters in the current window

  // Iterate through the string with the 'end' pointer
  for (let end = 0; end < s.length; end++) {
    // If we encounter a duplicate character, move the 'start' pointer
    while (seen.has(s[end])) {
      seen.delete(s[start]);
      start++;
    }

    // Add the current character to the set
    seen.add(s[end]);

    // Update the maximum length found so far
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Example:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
console.log(lengthOfLongestSubstring("")); // Output: 0
