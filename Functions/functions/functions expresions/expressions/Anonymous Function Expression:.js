/*An anonymous function in JavaScript is a function that doesn't
 have a name and is defined on the fly, often used for short, simple 
 tasks or as arguments to other functions. They can be assigned to variables 
 or passed as arguments to other functions. Here's a basic example of an anonymous 
 function:*/

 // Anonymous function assigned to a variable
 
 var addNumbers = function(a, b) {
    return a + b;
};

var result = addNumbers(5, 3);
console.log(result); // Output: 8


// Inline Anonymous Function:

(function() {
    console.log("This is an inline anonymous function.");
})();


// Anonymous Function Expression
// Arrow Function Expression
// Anonymous IIFE (Immediately Invoked Function Expression)
// Anonymous Callback Functions
// Anonymous Functions in Arrays and Objects