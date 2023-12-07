// // // what is callback function? explain this with brief examples?

// // // A callback function in JavaScript is a function that's passed as an 
// // // argument to another function and gets executed later, usually after the completion 
// // // of an asynchronous operation or at a specified time.

// // // Example 1: Callback function as an argument

// // function greet(name, callback) {
// //     console.log(`Hello, ${name}!`);
// //     callback(); // Executing the callback function
// //   }
  
// // function sayGoodbye() {
// //     console.log('Goodbye!');
// //   }
  
// // greet('Alice', sayGoodbye); // Passing sayGoodbye as a callback


  

// //  // Example 2: Callback function for asynchronous operation
// // function fetchData(callback) {
// //     setTimeout(() => {
// //       const data = 'Some data from the server';
// //       callback(data); // Executing the callback function with the fetched data
// //     }, 2000);
// //   }
  
// //   function processData(data) {
// //     console.log(`Processing data: ${data}`);
// //   }
  
// //   fetchData(processData); // Passing processData as a callback to fetchData
  

  
// function F1(hint){
// console.log("hellooo "+hint);
// }

// function F2(){
//   console.log("Buddy");
// }
// function result(R1,R2){
//   R1("bloody fool");
//   R2();

// }

// result(F1,F2)

// arr = ["prem","vidya","kutty","guru"]

// arr.forEach(clearZone);

// function clearZone(f){
// console.log(f.toUpperCase())
// }

function factorial(n){
if (n === 0){
 return 1;
}else{
  return n* factorial(n-1);
}
// factorial();
}
let result = factorial(5);
console.log(result)
