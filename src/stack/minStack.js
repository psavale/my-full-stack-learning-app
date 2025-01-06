/* useCase-  MinStack is useful in scenarios where you need to frequently retrieve the minimum
 value while performing push and pop operations on a stack, without sacrificing performance. */
class MinStack {
  constructor() {
    this.stack = []; // Main stack to store all elements
    this.minStack = []; // Stack to store the minimum elements
  }

  // Push an element onto the stack
  push(val) {
    // Push the value to the main stack
    this.stack.push(val);

    // If the minStack is empty or value(val) is smaller than or equal to the top of minStack, push it to minStack
    if (this.minStack.length === 0 || val <= this.getMin()) {
      this.minStack.push(val);
    }
  }

  // Pop the top element from the stack
  pop() {
    // If the top element of the main stack is equal to the top element of the minStack, pop from both
    if (this.stack.pop() === this.getMin()) {
      this.minStack.pop();
    }
  }

  // Retrieve the top element of the stack
  top() {
    return this.stack[this.stack.length - 1];
  }

  // Retrieve the minimum element in the stack
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

// Example usage
const minStack = new MinStack();
minStack.push(10);
minStack.push(2);
minStack.push(7);
minStack.push(1);
minStack.push(3);
minStack.push(1);
minStack.push(0);
console.log("minStack array values :", minStack.minStack);
console.log("stack array values :", minStack.stack);
console.log("Minimum:", minStack.getMin()); // Output: 1
minStack.pop();
console.log("Top element:", minStack.top()); // Output: 1
console.log("Minimum:", minStack.getMin()); // Output: 1
minStack.pop();
console.log("Top element:", minStack.top()); // Output: 7
console.log("Minimum:", minStack.getMin()); // Output: 2
