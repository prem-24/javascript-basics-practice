// what is "this" keyword in javascript?

/*this in JavaScript refers to the context in which a function is called, 
representing different values like the global object, 
the object a method is called on, or the new instance created by a constructor function.*/


// Global Context:

console.log(this === window);  // In a browser environment, this would usually be 'true'


// Method Invocation:

const person = {
    name: "Alice",
    greet: function() {
      console.log("Hello, I'm", this.name);
    }
  };
  
  person.greet();  // Outputs: "Hello, I'm Alice"


  // Function Invocation:

  function sayName() {
    console.log("My name is " + this.name);
  }
  
  const obj1 = {
    name: "Bob",
    sayName: sayName
  };
  
  const obj2 = {
    name: "Charlie",
    sayName: sayName
  };
  
  obj1.sayName();  // Outputs: "My name is Bob"
  obj2.sayName();  // Outputs: "My name is Charlie"
  
  
  // Constructor Function:

  // Constructor functions use the new keyword to create objects with shared methods and properties. They use this to assign properties and methods to the new instances.

// ex 1

  function Person(name) {
    this.name = name;
  }
  
  const person1 = new Person("David");
  console.log(person1.name);  // Outputs: "David"

  // ex 2

  function Car(make, model) {
    this.make = make;
    this.model = model;
    this.displayInfo = function() {
      console.log("This car is a " + this.make + " " + this.model);
    };
  }
  
  const car1 = new Car("Toyota", "Corolla");
  car1.displayInfo(); // Outputs: "This car is a Toyota Corolla"
  

//   Factory Functions:

// Factory functions create and return objects without using new. 
// They directly create objects within the function body and return them.


function createPerson(name, age) {
  return {
    name: name,
    age: age,
    introduce: function() {
      console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
  };
}

const p1 = createPerson("Alice", 30);
p1.introduce(); // Outputs: "Hello, my name is Alice and I am 30 years old."


