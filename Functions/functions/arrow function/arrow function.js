// Arrow functions in JavaScript provide a concise syntax for writing functions,
//  especially for short and simple operations. 


// What is Arrow Function ?
// Arrow function {()=>} is concise way of writing Javascript functions in shorter way. 
// Arrow functions were introduced in the ES6 version. They make our code more structured and readable.

// Arrow functions are anonymous functions i.e. functions without a name and are not bound by an identifier. 
// Arrow functions do not return any value and can be declared without the function keyword. 
// They are also called Lambda Functions.

/*
// Shorter Syntax:

Arrow functions have a more compact syntax compared to regular function expressions.


// Implicit Return:

Arrow functions can have an implicit return when written without curly braces {}. 
If there's only one expression in the function body, it's returned automatically without 
needing the return keyword.*/

// Basic Arrow Function

const add = (a, b) => {
    return a + b;
  };
  
  console.log(add(5, 3)); // Outputs: 8

  
//   Implicit Return

const multiply = (a, b) => a * b;

console.log(multiply(4, 6)); // Outputs: 24


// Single Parameter

const square = num => num * num;

console.log(square(9)); // Outputs: 81


// No Parameters

const greet = () => {
    console.log("Hello!");
  };
  
  greet(); // Outputs: "Hello!"

//   Arrow Function in Higher-Order Functions

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers); // Outputs: [1, 4, 9, 16, 25]

// Arrow Functions and "this"

/*Arrow functions don't have their own this context; they inherit this 
from the surrounding code's context when they're defined, not when they're executed.
 This can be useful, for instance, in callbacks within objects.*/

function Person() {
    this.age = 0;
  
    setInterval(() => {
      this.age++; // 'this' refers to the 'Person' object
      console.log(this.age);
    }, 1000);
  }
  
  const person = new Person(); // Outputs: 1, 2, 3, ...
  