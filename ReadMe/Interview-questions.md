# Questions

```markdown
Javascript
 1. JS execution process ( How JS does memory management and Garbage Collection), Global Execution Context
 2. How JS handle multi threading.
 4. What are the ES6 features ( let, var, const, promise, class, arrow functions, spread operators, rest operators)
 5. Why we need arrow functions and what is the difference between arrow and normal function
 6. Debounce and Throttling example (Advance)
 7. Script Tags order of execution ( defer, async, default )
 8. Event delegation and event bubbling
 9. Call, Bind, Apply
        10. How we can make object immutable
        11. Suppose we need to copy one object to another ? Spread operator vs Object.assign- incase of nested object
        12. Promise.all and Promise.race - (suppose we are calling one api and based on the value we need to call one more api- how we can call?) - promise.all([]) and promise.race([]) ?
 13. Is JS Object Oriented ? What are OOPS feature available in JS?
        14. Difference between Const vs Object.freeze()

8. JS - Programs based on execution
 - a. We need to implement a counter function that will either increment a value by 1 or decrement a value by 1 ( closure example) 
 - b. Write a function to multiple operations eg function().sum().multiplication().sub() - Calculator function
 - c. (Advance) Write a function to do the below operation 
   Input - [1,2,[3,4,[5]],6] - Output [1,2,3,4,5,6]



React JS ( which version u have used?)
 1. What is React Js and how its different from other JS Libraries
      - why can't browser read jsx.
 2. Lifecycles of React Js
 3. How to improve performance of a react components ( Pure Components and React.Memo)
 4. What are the ways we can pass values to components
 5. UseEffect hook. How to do componentUnmount in UseEffect hook.
 6. UseMemo hook and its purpose (Advance)
 7. UseCallback hook and its purpose (Advance)
 8. How to achieve code splitting in react. [ performance improve feature ] (Advance)
 9.  setState is sync of async operation. What changes done in setState in latest version of React. (Advance)
        10. What do u understand by refs? 
 11. What is controlled component and uncontrolled component
 12. How to navigate different pages in react? => advantages of React Router ( why switch used in react router)
 
    13. React Program
         1. Write a todo application ( adding new todos, mark done and delete any todos)

Redux
 1. What is the advantages of Redux?  =>  What are the alternatives of Redux.
 2. How to provide default state values in redux
 3. Redux flows - role of reducer?
 4. What is middleware
 

GraphQL 
 1. What is graphQL and how it works (caching)
Saved for later
11:27
//---------------------------------- Question --------------------- //
const valuesArr = [2, 4, 8, 12, 1, 3, 17];

const resultMap = valuesArr.map((el) => {
  if (el % 2 === 0) {
    return el * 2;
  }
});

const resultForEach = valuesArr.forEach((el) => {
  if (el % 2 === 0) {
    return el * 2;
  }
});

console.log(resultMap, resultForEach);

//---------------------------------- Question --------------------- //
// Remove duplicates from the array
const arr1 = [1, 30, 30, 2, 2, 4, 66, 12, 21, 21, 2, 2];

const uniqueArr = [...new Set(arr1)];
console.log(uniqueArr);

// **** Imp **** //
//---------------------------------- Question --------------------- //
// What will be the output?
// How will i make the Y varaibale only availabe inside the brackets?
let func = function () {
  {
    let x = "react";
    var y = "js";
  }

  console.log(y);
  console.log(x);
};

func()(
  // ----------------

  //---------------------------------- Question --------------------- //
  //------- What will be the Output
  function foo() {
    var message = "my log message";
    console.log(message);
  }
)();

console.log(message);

function foo() {
  var message = "my log message";
  console.log(message);
}
console.log(message);

//---------------------------------- Question --------------------- //
// What will be output
console.log(5 < 6 < 7); // true => 5<6 => true < 7 => 1 < 7 ?  = true
console.log(7 > 6 > 5); // false => 7>6 => true >5 => 1 >5 ? = false

//---------------------------------- Question --------------------- //
//let i = ?

console.log(i * i); // 0
console.log(i / i); // 1 */ (Number. MIN_VALUE)
// -----------

//---------------------------------- Question --------------------- //
console.log("First");
setTimeout(() => console.log("Second"), 0);
Promise.resolve(console.log("Third"));
console.log("Fourth");
Promise.resolve().then((res) => console.log("Fifth"));
console.log("Sixth");
Promise.resolve().then((res) => console.log("Seventh"));
//---------------

//---------------------------------- Question --------------------- //
function test(a) {
  switch (a) {
    case "1":
      console.log("1");
    case "2":
      console.log("2");
      return;
    default:
      console.log("default");
      break;
  }
}

test("20");
//---------------

//---------------------------------- Question --------------------- //
console.log(null ?? true); // true
console.log(false ?? true); // false
console.log(undefined ?? true); // true

//---------------------------------- Question --------------------- //
// How to sort this array?
// [1,5,5,5,6,6,1,1, 20, 20, 11, 12,2,2]

//---------------------------------- Question --------------------- //
// Output of the below and how to resolve the issue
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
console.log(i);

//---------------------------------- Question --------------------- //
const adams = {
  name: "Adams",
  address: {
    city: "Bangalore",
    state: "Karnataka",
    contact: {
      phoneNumber: "100",
      email: "email@mail.com",
    },
  },
};

const scott = { ...adams };
scott.address.city = "delhi";
console.log("Scott", scott);
console.log("Adams", adams);

const scott = adams;
scott.name = "Scott";
scott.address.city = "Delhi";

console.log("Scott", scott);
console.log("Adams", adams);

Object.freeze(adams);
adams.name = "Jack";

// **** Imp **** //
//---------------------------------- Question --------------------- //
// ** Write a Function to add 2 numbers (with proper standard) **
// const value = add(1,"2") => 3
// console.log(value); // => 3

// **** Imp **** //
//---------------------------------- Question --------------------- //
//What will be output
// What will be the output if I change var with let
var a = 10;
console.log(a);

function display() {
  var a = 20;
  console.log(a);
  if (true) {
    var a = 30;
    console.log(a);
  }
  console.log(a);
}

display();

console.log(a);

// **** Imp **** //
// ----------------------------- Question -------------------- //
// What will be output
function goodmorning(name) {
  console.log(`Good morning ${name}`);
}

function goodevening(name) {
  console.log(`Good evening  ${name}`);
}

goodmorning("Jacky");
goodevening("Adam");

// what will be the output
goodmorning("Jacky");
goodevening("Adam");

function goodmorning(name) {
  console.log(`Good morning ${name}`);
}

function goodevening(name) {
  console.log(`Good evening  ${name}`);
}

//What will be the output
// If i change var to let what will be the output
console.log(typeof goodevening); // What will be the output

goodmorning("Jacky");
goodevening("Adam");

var goodmorning = function (name) {
  console.log(`Good morning ${name}`);
};

var goodevening = function (name) {
  console.log(`Good evening  ${name}`);
};

// **** Imp **** //
// ----------------------------- Question -------------------- //
// What will the output
let obj1 = { a: 10, b: 20 };

let obj2 = Object.create(obj1);

console.log(obj2);
console.log(obj2.a);

obj1.a = 22;

console.log(obj2.a);

// Output /
// Create an empty object and in the obj prototype we have obj1 values
// obj2.a can access the obj1.a value and prints
// if we update obj1.a then obj2.a also gets updated if we dont have any copy of 'a' in the obj2
```
