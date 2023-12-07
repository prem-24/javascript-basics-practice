// Function with no parameters:

function sayHello() {
    console.log("Hello, World!");
  }
//   Function with parameters:

function addNumbers(a, b) {
    const sum = a+b
    return sum;
  }
  console.log(addNumbers(10,4));

//   Function with a return statement:

function calculateArea(radius) {
    const area = Math.PI * radius * radius;
    return area;
  }console.log(calculateArea(10))

//   Function with a default parameter:

function greet(name = "Stranger") {
  console.log(`Hello, ${name}!`);
  console.log(`prem, ${name}!`)
}

greet(); // Output: "Hello, Stranger!"
greet("Alice"); // Output: "Hello, Alice!"

  

//   Function expression (assigned to a variable):

const multiply = function(a, b) {
    return a * b;
  };
  

//   Arrow function (ES6):

const square = (x) => x * x;

// Function with rest parameters (ES6):


function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  
  // example function in gmail


  function getEmailName(email){
    return (email.slice(0,email.indexOf("@")))
  }
  console.log(getEmailName("prem2452000@gmail.com"));
  console.log(getEmailName("Gurupk@gmail.com"));

// toProperCase


 function toProperCase(name){
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }
  console.log(toProperCase("GuKIMuwefNJINailcom")); 