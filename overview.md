
# Topics to read for fullstack developer

## Datastructure

- Array and strings
- linked list
- binary tree & binary search tree
- Hashing
- Stacks and queues
- Trees and graphs
- Heap
- Greedy
- Backtracking
- Dynamic programming

## JavScript

references - <https://learnjavascript.online/app.html?id=1437>

- What is JavaScript ??
  - JavaScript is a versatile, high-level programming language designed to make web pages interactive. It has grown beyond its initial use case in browsers and is now used for server-side applications, mobile app development, desktop applications, and more. JavaScript’s flexibility and the massive ecosystem of libraries and frameworks make it one of the most popular programming languages in the world.
  - JavaScript features
    - Client-Side Language
    - Object-Oriented
    - Event-Driven
    - Cross-Platform
    - make api call using Ajax and fetch api  ( Api calls can also be made using library called Axios )
  - Where its used ??
    - Web application development
    - Mobile App Development
    - JavaScript frameworks like React Native or Ionic are used to develop cross-platform mobile apps
    - Server-Side Scripting
    - Node.js allows JavaScript to be used for creating scalable server-side applications.
- Template literals
- ES6
- Stack and Heap
- functions
- objects
- Events
- local storage
- session storage
- cookies
- request headers and bodies, query params
-

### Concepts in JavaScript

- Inheritance

  - JavaScript inheritance is the method through which the objects inherit the properties and the methods from the other objects. It enables code reuse and structuring of relationships between objects, creating a hierarchy where a child object can access features of its parent object. Inheritance in JavaScript can be achieved in the following ways:
        JavaScript inheritance is the method through which the objects inherit the properties and the methods from the other objects.
  - Super keyword is used in classes to call the properties and methods of the parent class.
  - <https://www.geeksforgeeks.org/javascript-inheritance/>
-
- Method overloading
- Method overrriding
- Hoisting
  - Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope
  - a variable can be used before it has been declared. <https://www.w3schools.com/js/tryit.asp?filename=tryjs_hoisting1>
  - Using a let variable before it is declared will result in a ReferenceError.
  - JavaScript only hoists declarations, not initializations. To avoid bugs, always declare all variables at the beginning of every scope.
  - <https://www.w3schools.com/js/js_hoisting.asp>
- typeof
-
- Things to remember
  - JavaScript has dynamic types. This means that the same variable can be used to hold different data types.
  - Strings are written with quotes. You can use single or double quotes:
  -

## JavaScript methods

### Don't forget to check the examples for below javascript methods

1. slice

- The slice() method is useful for creating copies of subarrays or substrings, which helps when you need to extract part of a collection without modifying the original.

2. join

- The join() method is useful for converting arrays into strings for display purposes or further manipulation.

3. push()

- Adds one or more elements to the end of an array and returns the new length.

4. pop()

- Removes the last element from an array and returns that element.

5. shift()

- Removes the first element from an array and returns that element.

6. unshift()

- Adds one or more elements to the beginning of an array and returns the new length.

7. splice()

- Adds/removes items to/from an array and returns the removed items.

8. map()
  When to use - When you want to transform all elements of an array without mutating the original one.

- It does not modify the original array; one of the common mistake is not returning callback function value, which will become the element in the new array.
- map() is a powerful and commonly used array method for transforming arrays.

9. filter()

- It filters the original array by applying a condition and returns only the elements that satisfy that condition.
- The original array remains unchanged.
- The new array may have fewer elements than the original if only some elements pass the condition.
- When to Use:
  - When you need to extract a subset of elements from an array based on a certain condition.
  - To remove elements that do not meet certain conditions.
  - It is commonly used for searching, filtering, or cleaning up arrays of data.

10. reduce()

- Executes a reducer function on each element of the array, resulting in a single output value.
- If initialValue is not provided, reduce() starts at the second element, the first element in the array is used as the initial accumulator and the iteration starts from the second element.
- When to use:
  - When you need to aggregate or combine data into a single result, such as summing, counting, averaging, or concatenating.
  - When you need to transform an array into a new structure like an object or another array.
  - When you need to apply more complex logic than just filtering or mapping.
  - reduce() doesn’t mutate the original array but returns a single value. [ex - sum, Flattening an array of arrays, Finding the maximum value in an array, Counting occurrences of elements, ]

11. forEach()

- It is ideal for cases where you want to perform an action on each element but don’t need a return value
- Unlike map() or filter(), forEach() doesn't return a new array or value.
- remember, you cannot break or return early from a forEach() loop. If you need to break out of a loop early, consider using a for loop or for...of loop instead.

12. find()

- The find() method in JavaScript is used to search an array and return the first element that satisfies the provided testing function. If no element matches, it returns undefined. This is useful when you need to retrieve a specific element from an array based on a condition.
- Difference between find() and filter():
  - find() returns only the first matching element.
  - filter() returns an array of all matching elements.
- Difference between find() and some():
  - some() returns a boolean indicating whether at least one element satisfies the condition.
  - find() returns the element that matches the condition.
- When to use:
  - Use find() when you need to retrieve the first element that matches a specific condition.
  - It's ideal for searching in arrays of objects or primitives and only need one result.
  - It only returns a single result, so if you need multiple results, use filter()
  - It is non-mutating and returns undefined if no match is found.

13. includes()

- includes() is an easy-to-use method for checking the presence of a value in arrays or strings.
- Difference between includes and indexOf()
  - indexOf() returns the index of the found element or -1 if the element is not found.
  - includes() checks for the existence of a value and returns true or false.
- When to use:
  - To check if an array contains a specific value
  - To check for the presence of a substring in a string (e.g., verifying if a certain keyword exists in a string).
  - It's case-sensitive for strings, works with NaN for arrays, and returns a boolean.

14. split()

- It's used to split a string into an array of substrings based on a specified separator. It allows for easy string manipulation and extraction of parts of a string.
- Difference between split() vs slice()
  - split() breaks a string into an array of substrings based on a separator.
  - slice() extracts a section of a string and returns it as a new string.
- When to use:
  - Extracting individual words from a sentence.
  - Splitting CSV (comma-separated) data into an array.
  - split() is a powerful method for breaking down strings into manageable parts.
  - It accepts a separator (ex- comma, regular experession etc..) and an optional limit, and it returns an array of substrings.

15. replace()

- The replace() method in JavaScript is used to replace a substring or pattern in a string with a new substring or pattern. This method does not modify the original string but instead returns a new string with the replacement.
- replace() is a versatile method for replacing text in strings.
- replace() replaces only the first match unless a global regular expression is used.
- replaceAll() replaces all occurrences of the substring without needing the global flag.
- you can use replace() to replace all occurrences of the substring with the global flag (/g).

- When to use:
  - Simple string replacement: Replacing specific words or characters in a string (e.g., replacing a user's name or correcting a typo).
  - Pattern-based replacement: Replacing parts of a string that match a regular expression (e.g., replacing all digits or removing special characters).
  -  

16. toUpperCase()

- Converts a string to uppercase letters.

17. toLowerCase()

- Converts a string to lowercase letters.

18. trim()

- Removes whitespace from both ends of a string.

19. substring()

- Returns the part of the string between the start and end indexes.
- It swaps the indices if startIndex > endIndex.
- For more flexibility, slice() might be a better choice as it supports negative indices.
- Difference between substring() vs substr()
  - substring(): Extracts characters between two specified indices.
  - substr() Extracts a substring based on a starting index and a specified length.
- Difference between substring() vs slice()
  - Both extract parts of a string and return a new string.
  - substring() swaps the indices if startIndex is greater than endIndex, while slice() does not.
  - slice() allows negative indices, counting from the end of the string, but substring() treats negative indices as 0.
  
- When to use:
  - If you need to extract a portion of a string, such as the first few characters or a specific part of a sentence.
  -  

20. charAt()

- Returns the character at the specified index.
- It returns a new array or string and does not modify the original ones.
- When to use:
  - The concat() method in JavaScript is used to merge arrays or strings.
  -

21. concat()

- Combines two or more strings into one.

21. Object Methods

- Object.keys()
  - Object.keys() returns an array of an object's own enumerable property names.

  ```
  let obj = {a: 1, b: 2, c: 3};
  let result = Object.keys(obj);  // result is ["a", "b", "c"]
  ```

- Object.values()
  - Returns an array of a given object's own property values.

  ```
  let obj = {a: 1, b: 2, c: 3};
  let result = Object.values(obj);  // result is [1, 2, 3]
  ```

- Object.entries()
  - Returns an array of a given object's own enumerable property [key, value] pairs.

  ```
  let obj = {a: 1, b: 2, c: 3};
  let result = Object.entries(obj);  // result is [["a", 1], ["b", 2], ["c", 3]]
  ```

- Object.assign()
  - Copies the values of all enumerable own properties from one or more source objects to a target object.

  ```
  let target = {x: 10};
  let source = {y: 20, z: 30};
  Object.assign(target, source);  // target becomes {x: 10, y: 2, z: 30}
  ```

- hasOwnProperty()
  - hasOwnProperty() method returns true if the specified property is a direct property of the object — even if the value is null or undefined

  ```
  let obj = {a: 1, b: 2};
  let result = obj.hasOwnProperty('a');  // result is true
  ```

22. Methods in Number

  ```
- parseInt()
- toFixed()
- parseFloat()
- Math.round()
  ```

23. Methods in Date Objects

  ```
- getDate()
- getFullYear()
- getMonth()
- toISOString() 
  ```

24. Methods in Math Objects

  ```
- Math.random()
- Math.floor()
- Math.abs() - returns the absolute value of a number (without sign)
- Math.max() - returns the largest number.
- Math.pow() - Math.pow(4, 2);  // Output: 16 (4^2)
- Math.random() - returns a random number between 0 (inclusive) and 1 (exclusive).
```

Data types

- Primitive data types
- Non-primitive types

git repo -
<https://github.com/psavale/my-full-stack-learning-app.git>

- new versions of ECMAScript introduce new features and syntax enhancements
- ES5
- ES6
  - let, const, arrow functions, classes, template literals, promises, and modules features introduced
- ES7, ES8
  - async/await, object spread/rest operators, etc. features got introduced
- ES14 ( latest version of ECMAScript)
  - findLast,  findLastIndex, toReversed, toSorted, toSpliced, with
- <https://caniuse.com/>
- <https://developer.mozilla.org/en-US/>

## NodeJS

- Node.js is a runtime environment that allows developers to run JavaScript code outside of a web browser, typically on a server. It uses the V8 JavaScript engine (the same engine used by Google Chrome) to execute code, enabling JavaScript to be used for server-side scripting and building scalable, high-performance applications.
Key Characteristics of Node.js:
- Event-Driven Architecture
- Non-Blocking (Asynchronous) I/O
OOPS concepts
 Dynamic Array

## Database

- Relation database
  - MySQL, PostgreSQL, Oracle, Microsoft SQL Server
  - Ideal for applications where data consistency and complex queries (joins) are essential.
  - used for sturctured data
   — Strong schema enforcement
  - ACID compliance (Atomicity, Consistency, Isolation, Durability)

- NoSQL Databases
  - These databases are designed for unstructured, semi-structured, or highly scalable data storage, often without fixed schemas.
        1. Document Stores: Store data as documents (often JSON or BSON).  MongoDB, CouchDB
        2. Key-Value Stores: Store data as key-value pairs. ( Redis, Amazon DynamoDB )
        3. Column Family Stores: Store data in columns rather than rows (good for large datasets)  ( Apache Cassandra, HBase)
        4. Graph Databases: Focus on storing relationships between entities in the form of nodes and edges. ( Neo4j, ArangoDB)
 Use Cases: Real-time web applications, large-scale distributed systems, content management, IoT, and big data.

- NewSQL Databases
  - Use Cases: Applications requiring the scale of NoSQL but with strong consistency, such as large e-commerce sites, and financial systems ( Google Spanner )
- In-Memory Databases ( Redis, Memcached )
- Graph database  
- Time series database ( Prometheus )
  - Use Cases: IoT, financial data, server monitoring, sensor data, and event logs.

## Some of the frequently asked Programs

### Javascript

1. Object.freeze()

- This method is used to makes an object immutable, meaning it prevents the modification of existing property values and prevents the addition or deletion of properties. When an object is frozen, it cannot be changed in any way.
UseCase - Use Object.freeze() to create constant objects, ensuring their values won’t accidentally change throughout the program.
- Preventing Accidental Mutations in larger code base.
- Object.freeze() is shallow, meaning it only applies to the immediate properties of the object. You need to use a recursive function to deeply freeze an object.
- Object.freeze() only freezes properties, not their values. If a property value is an object or an array, its contents can still be modified unless it is also frozen.

### database

1. What are the different types of SQL commands?

- SQL commands are categorized into four types
  - DML (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE
  - DDL (Data Definition Language): CREATE, ALTER, DROP
  - DCL (Data Control Language): GRANT, REVOKE
  - TCL (Transaction Control Language): COMMIT, ROLLBACK, SAVEPOINT

2. What is a subquery?

- A subquery is a query within another query. It is used to perform operations on the result of another query.

### nodeJs

### react

1. What is react?

- React is javascript library to build reusable UI components, manage application state, and handle dynamic data updates efficiently.
- React uses a virtual DOM to optimize performance
- hooks allow functional components to manage state and other side effects (e.g., fetching data, subscriptions) without needing to convert them to class components.
- React Router is a separate library commonly used with React to manage navigation between different pages in a single-page application (SPA). It enables routing by mapping components to different URLs.
- React is very flexible and can be used with other libraries and frameworks. It focuses on the view layer, so you can integrate it with state management libraries like Redux, UI libraries like Material-UI, or frameworks like Next.js for server-side rendering and static site generation.

### nextJS

1. What is NextJS?

- Next.js is a framework built on top of React that provides a structured way to build server-rendered applications, static websites, and even APIs..
- Next.js extends React's capabilities by offering solutions to problems React does not handle out of the box, such as SSR, static generation, routing, and more.
- It enhances the performance, SEO, and development experience for React applications, making it a go-to choice for many developers building modern web applications.

2. What is method chaining?
3.

### DS ( data structure)

1. Is array a Data Type or Data Structure?

- Array is a data structure because it defines how data is stored and accessed (in a linear, indexed way).

### TypeScript

1.What is TypeScript ??

- TypeScript is a superset of JavaScript that adds static typing and other advanced features to the language, allowing developers to write safer and more maintainable code. It was developed and is maintained by Microsoft. TypeScript compiles down to plain JavaScript, meaning that it can run in any environment where JavaScript runs, including browsers, Node.js, and mobile apps.

### Architecture

- MFE (Micro frontend architecture)
- Modular architecture
- Event driven architecture
- Single page application
- Progressive Web Application (PWA)
- Hybrid Architecture (CSR + SSR)

### Observability

### programming

1. longest-substring-without-repeating-characters
2. Reverse Integer
3. Palindrome Number
4. Valid Parentheses
5. remove-duplicates-from-sorted-array
6. remove-element
7. find-the-index-of-the-first-occurrence-in-a-string
8. Word Search
9. Unique Binary Search Trees
10. construct-binary-tree-from-inorder-and-postorder-traversal
11. Reorder List
12. Reverse Words in a String
13. Invert Binary Tree

### Web application in general

1. Difference between library and framework?

- Library:
  - A library is a collection of reusable functions or modules that developers can call to perform specific tasks.
  - In a library, the developer is in control of the flow of the application. The developer decides when and where to call the library functions.
  Ex- React, jQuery, Lodash etc.
- Framework:
  - A framework is a larger, more comprehensive tool that provides a structure or "skeleton" for your entire application. It dictates how you structure your app, and often comes with predefined patterns and features for specific tasks.
  - the framework is in control of the flow. The developer writes code that fits into the framework’s structure, but the framework determines when and how that code is executed.
  - The developer has to follow the framework’s rules and conventions.
  - framework gives you a structured way to build an entire application.
  Ex - Angular, Next.js etc.

2. What is Single page applications?

- Is a type of web application that loads a single HTML page and dynamically updates the content as the user interacts with the app, without requiring a full-page reload.
- SPAs frequently use AJAX (Asynchronous JavaScript and XML) or the Fetch API to retrieve data from the server asynchronously (in the background) and update parts of the UI without refreshing the page.
- Content is dynamically fetched from the server via API requests (e.g., REST APIs or GraphQL) and rendered on the client-side using JavaScript, allowing the application to load data on demand.
Examples - Gmail, Facebook, google map, twitter etc.
