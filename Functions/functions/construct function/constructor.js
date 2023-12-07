/*Constructor Functions:

// Purpose: Constructor functions are used to create and initialize objects.
 They serve as a blueprint to create multiple instances of objects with shared properties and methods.

// Usage: They are invoked using the new keyword to create instances. 
They use the this keyword to define properties and methods for each instance.*/


function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
      console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    };
  }
  
  const person1 = new Person("Alice", 30);
  const person2 = new Person("Bob", 25);
  
  person1.sayHello(); // Outputs: "Hello, my name is Alice and I am 30 years old."
  person2.sayHello(); // Outputs: "Hello, my name is Bob and I am 25 years old."

//   example 2

function Person(name) {
    this.name = name;
  }
  
  const person = new Person("Alice");
  console.log(person.name); // Outputs: "Alice"

  
//   Constructor with Methods

function Car(make, model) {
    this.make = make;
    this.model = model;
    this.displayInfo = function() {
      console.log("This car is a " + this.make + " " + this.model);
    };
  }
  
  const car1 = new Car("Toyota", "Corolla");
  const car2 = new Car("Ford", "Mustang");
  
  car1.displayInfo(); // Outputs: "This car is a Toyota Corolla"
  car2.displayInfo(); // Outputs: "This car is a Ford Mustang"

//   Constructor with Prototype Methods


function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  };
  
  const perso1 = new Person("Alice", 30);
  const perso2 = new Person("Bob", 25);
  
  perso1.sayHello(); // Outputs: "Hello, my name is Alice and I am 30 years old."
  perso2.sayHello(); // Outputs: "Hello, my name is Bob and I am 25 years old."
  
  
//   Constructor with Inheritance (using Object.create)


function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.makeSound = function() {
    console.log(this.name + " makes a sound.");
  };
  
  function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
  }
  
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  Dog.prototype.bark = function() {
    console.log(this.name + " barks loudly.");
  };
  
  const myDog = new Dog("Buddy", "Golden Retriever");
  
  myDog.makeSound(); // Outputs: "Buddy makes a sound."
  myDog.bark(); // Outputs: "Buddy barks loudly."
  