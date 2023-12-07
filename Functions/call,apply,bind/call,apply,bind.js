// call, apply, and bind are methods in JavaScript that allow you to manipulate how a function is
//  executed and what object it should be bound to.

// call

// The call method is used to invoke a function explicitly, 
// specifying the value of this and passing arguments individually.


// call Syntax:

functionName.call(thisArg, arg1, arg2, ...);

const person = {
    fullName: function(city, country) {
      return this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country;
    }
  };
  
  const person1 = {
    firstName: 'John',
    lastName: 'Doe'
  };
  
  const person2 = {
    firstName: 'Jane',
    lastName: 'Smith'
  };
  
  // Using call to invoke the function with different objects
  console.log(person.fullName.call(person1, 'New York', 'USA')); // Output: John Doe, New York, USA
  console.log(person.fullName.call(person2, 'London', 'UK')); // Output: Jane Smith, London, UK
  


//   "apply"

//   apply is also used to invoke a function, but it accepts arguments as an array (or array-like object).
//   Syntax: functionName.apply(thisArg, [arg1, arg2, ...])
//   Arguments are passed as an array.
//   Example:

function greet(greeting) {
    console.log(`${greeting}, ${this.name}!`);
  }
  
  const per = { name: 'Alice' };
  const args = ['Hello'];
  
  greet.apply(per, args); // Output: Hello, Alice!

  
// How bind works:

// bind creates a new function (johnFullName in the example) that,
//  when called, will have its this value set to person1.
// Additional arguments 'New York' and 'USA' are pre-filled for the fullName function 
// whenever johnFullName is called.


const newFunction = functionName.bind(thisArg, arg1, arg2, ...);


// examples

const perso = {
    fullName: function(city, country) {
      return this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country;
    }
  };
  
  const perso1 = {
    firstName: 'John',
    lastName: 'Doe'
  };
  
  const johnFullName = perso.fullName.bind(perso1, 'New York', 'USA');
  console.log(johnFullName()); // Output: John Doe, New York, USA
  