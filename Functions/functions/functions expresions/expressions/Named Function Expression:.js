/*A named function expression in JavaScript is a function expression 
that has a name. While regular (anonymous) function expressions are common, 
a named function expression gives the function a name, making it useful for 
self-reference and debugging.*/


// A named function expression for a greeting function:

  const greet = function sayHello(name) {
    console.log(`Hello, ${name}!`);
    
  };
  greet("Alice"); // Output: "Hello, Alice!"
  
//   A named function expression that adds two numbers:

const add = function addNumbers(a, b) {
    return a + b;
    
  };
   // Output: 8
   console.log(add(3, 5)); 

//    A named function expression for a function that calculates the square of a number:

const square = function calculateSquare(x) {
    return x * x;
  };
  
  console.log(square(4)); // Output: 16
  
