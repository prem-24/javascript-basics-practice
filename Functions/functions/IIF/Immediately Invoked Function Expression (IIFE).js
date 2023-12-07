/*An "Immediately Invoked Function Expression," often abbreviated as IIFE (pronounced "iffy"),
 is a JavaScript design pattern that allows you to define and execute a function immediately 
 after its creation. It's commonly used to create a private scope for variables and functions 
 and prevent them from polluting the global scope.*/

//  Defining the Function: You start by defining an anonymous function (a function without a name) enclosed in parentheses.

(function() {
    // Function body
})();

// Invoking the Function:

(function() {
    var secret = "This is a secret variable";
    
    // The secret variable is only accessible inside the IIFE.
    console.log(secret); // Outputs: "This is a secret variable"
})();

// Attempting to access 'secret' here would result in an error.
console.log(secret); // Error: 'secret' is not defined
