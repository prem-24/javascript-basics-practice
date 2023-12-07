/* A closure function in JavaScript is a function that has access to variables from its 
outer (enclosing) scope, even after the outer function has finished executing. 
This allows the inner function to "close over" and capture the environment in which
 it was created. In simpler terms, a closure allows a function to retain access to the 
 variables of the surrounding context.

Here's a breakdown of the key components:

// Outer Function:

The function that contains the variables or parameters that the inner function will have access to.

// Inner Function:

The function defined inside the outer function, forming a closure over the variables
of the outer function.

// Access to Outer Variables:

The inner function can access and use the variables of the outer function, even after the outer function has completed its execution.*/

function outerFunction() {
    let outerVariable = "I'm from the outer function";
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  const closureFunction = outerFunction();
  closureFunction();  // Outputs: "I'm from the outer function"
  
  
  function multiplier(factor) {
    return function (number) {
      return factor * number;
    };
  }
  
  const multiplyByTwo = multiplier(2);
  console.log(multiplyByTwo(5));  // Outputs: 10