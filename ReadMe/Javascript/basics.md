# Javascript basics

* JavaScript is a dynamically typed language. This means that variable types are determined at runtime. The environment running yor JavaScript code (for example, the browser or Node) does not know the data types of variables until they are being run.

```markdown
1.  spread syntax vs rest parameters
    - Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.
    - The spread syntax (...) is used for copying and merging array, objects.
    - Passing function arguments dynamically
    - Overriding Properties 
        ex- const updatedObj = { ...obj1, ...obj2 };  // Rightmost properties override
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
2. destructuring
    - ex - [a, b, ...rest] = [10, 20, 30, 40, 50];
    - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment>
3. Promise.all() Vs Promise.allSettled()
    -  Use Promise.all() when all promises must succeed, and failure should be caught immediately (e.g., fetching multiple dependent API requests)
    - Use Promise.allSettled() when you need results of all promises, even if some fail (e.g., processing multiple API calls where failure in one doesn't block others).
4. Primitive Vs Non-Primitive (Reference) Data Types
    - Primitive Types: Stored by value and Immutable ( ex - Number, BigInt, String, Boolean, Undefined, Null, Symbol ).
    - Non-Primitive( Reference Types): Stored by reference and mutable ( ex- Object, Array, Function, Set, Map, WeakSet, WeakMap).
    - Common Data Structures: Array, Object, Set, Map
    - Use typeof for checking primitive types
5. Maybe Data Type
    - Since JavaScript doesn't have built-in Maybe, we can implement it using a functional approach.
    - The Maybe type is useful in functional programming for handling missing values safely. While JavaScript does not have it natively, we can implement it using classes or libraries like Folktale or Sanctuary.
    - use Maybe When dealing with optional values, When handling null/undefined safely and to improve functional programming in JavaScript.

```
