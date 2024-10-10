function isValidParentheses(s) {
    // Stack to keep track of opening brackets
    const stack = [];
    
    // Mapping of closing brackets to their corresponding opening brackets
    const bracketMap = {
      ')': '(',
      '}': '{',
      ']': '['
    };
  
    // Iterate through each character in the string
    for (let char of s) {
      // If it's a closing bracket
      if (char in bracketMap) {
        // Pop the top element of the stack (if any), or use a dummy value
        const topElement = stack.length ? stack.pop() : '#';
        
        // If the top of the stack doesn't match the corresponding opening bracket
        if (topElement !== bracketMap[char]) {
          return false;
        }
      } else {
        // It's an opening bracket, so push it onto the stack
        stack.push(char);
      }
    }
  
    // If the stack is empty, all brackets were properly closed
    return stack.length === 0;
  }
  
  // Example:
  // console.log(isValidParentheses("()"));        // Output: true
  // console.log(isValidParentheses("()[]{}"));    // Output: true
  // console.log(isValidParentheses("(]"));        // Output: false
  // console.log(isValidParentheses("([)]"));      // Output: false
  console.log(isValidParentheses("{[]}"));      // Output: true
  