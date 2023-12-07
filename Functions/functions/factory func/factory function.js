/*A factory function in JavaScript is a type of function that is designed to create and 
return objects.It's called a "factory" function because it produces instances of objects similar to how a 
 factory produces multiple units of a product.
*/


function createPerson(name, age) {
    return {
      name: name,
      age: age,
      sayHello: function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
      }
    };
  }
  
  const person1 = createPerson("Alice", 30);
  const person2 = createPerson("Bob", 25);
  
  person1.sayHello(); // Outputs: "Hello, my name is Alice and I am 30 years old."
  person2.sayHello(); // Outputs: "Hello, my name is Bob and I am 25 years old."
  