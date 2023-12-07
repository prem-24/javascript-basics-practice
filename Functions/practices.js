function greetUsers(){
    let xyName = "prem";
    let xxx = xyName +" "+"is learnig his self javascript";
    console.log(xxx);
}
greetUsers();

function greet(xyName){
    let xxx = xyName +" "+"is learnig his self javascript";
    console.log(xxx);
}
greet("prem");
greet("pk");
greet("guru");


// function addition(n1,n2){
//     let sum = n1 + n2;
//     console.log(sum)
// }
// addition(3,3);

// function sub(num1,num2){
//     result=num1-num2;
//     console.log(result)
// }
// sub(1,100);

// function add1(h1,h2){
//     return h1*h2;
    
// }console.log(add1(2,3))

// // //function that takes an array as input and display all items of this array
// // function listArrayItems(arr) {
// //     for (var i = 0; i < arr.length; i++) {
// //         console.log(i, arr[i])
// //     }
// // }
// // var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
// // listArrayItems(colors);


// function arrayWorld(arr){
//     for(var i=0;i< arr.length;i++){
//         console.log(i,arr[i]);

//     }

// }
// var hello=[["a","b","c","d","e","f"]]
// arrayWorld(hello)

// // Exercise: Practicing with functions
// // Task 1
// function letterFinder(word, match) {
//     // Task 2
//     for (let i = 0; i < word.length; i++) {
//       // Task 3
//       if (word[i] === match) {
//         // Task 4
//         console.log('Found the', match, 'at', i);
//       } else {
//         // Task 5
//         console.log('---No match found at', i);
//       }
//     }
//   }
  
//   // Task 6
//   letterFinder("test", "t");


//   recursion examples factorial
function fact(input){
    if(input<=1)return input;
    else
    return input*fact(input-1);
}
console.log(fact(5))


//   recursion examples factorial
function factorial(n) {
    // Base case
    if (n === 0 || n === 1) {
      return 1;
    } else {
      // Recursive case
      return n * factorial(n - 1);
    }
  }
  
  // Example usage:
  console.log(factorial(5)); // Output: 120
  
  

  function countDownFrom(n) {
    // Base case
    if (n <= 0) {
      console.log("Done!");
    } else {
      // Recursive case
      console.log(n);
     countDownFrom(n - 1);
    }
  }
  
  // Example usage:
  countDownFrom(5);
  // Output:
  // 5
  // 4
  // 3
  // 2
  // 1
  // Done!


  function countDownFrom(n) {
    // Base case
    if (n <= 0) {
      return "Done!";
    } else {
      // Recursive case
      const currentCountdownValue = n + "\n";
      return currentCountdownValue + countDownFrom(n - 1);
    }
  }
  
  // Example usage:
  const countdownResult = countDownFrom(5);
  console.log(countdownResult);
  // Output:
  // 5
  // 4
  // 3
  // 2
  // 1
  // Done!
  

  function show(){
    console.log("prem")
    show()
  }
  show();


function calculateTotal(n){
    let total=0;
    for(i=0;i<=n;i++){
        total=total+i;
    } return total;
}
console.log(calculateTotal(3));


function fact(n){
    if (n===1){
        return n;
    }else{
        return n=n*fact(n-1);
    }
}console.log(fact(6));

let myDetails ={
    name:"Perm",
    age:"12",
    height:"5.5",
    function(){
        console.log(this.age)
    }


}
myDetails.function();

var me ={
    i:"121",
    j:"111",
    k:"333",
    fs:function(){
        console.log("my lucky number is"+" "+this.i)
    }
  }
  me.fs();


  var you ={
    i:"12",
    j:"11",
    k:"33",}

    var q = me.fs.bind(you);
    q();


function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
  }
  return true;
}

// Example usage:
console.log(isPrime(7));  // Output: true
console.log(isPrime(12)); // Output: false

// finding odd number


function findOddNum(n){
  
  for(let i=1;i<=n;i++){
    if (i%2!== 0){
      console.log("odd number"+i)
    }
  }
}

findOddNum(30);

// finding even number

function findEvenNum(n){
  
  for(let i=1;i<=n;i++){
    if (i%2=== 0){
      console.log("even number"+i)
    }
  }
}

findEvenNum(30);

// finding positive and negative number

function posNegNum(n){
  if (n<0){
    console.log("Negative number")
  }
  else 
  console.log("potive number")
}
posNegNum(0);

// finding positive and negative number arrow function

let posNegNum = (n) => {
  if (n < 0) {
      return "Negative number";
  } else {
      return "Positive number";
  }
};

console.log(posNegNum(-44));


finding prime number

function isPrime(num){
  if(num<2){
    return false;
  }
  for(let i=2;i<num;i++){
    if(num%i===0){
      return false;
    }
  }
  return true;
}

console.log(isPrime(119));

// fffdkmcencu
function isPrime(a){
  if (a < 2){
    return false;
  }
  for(let i=2;i <=1;i++){
    if (a%i===0){
      return false;
    }
  }return true;
}

isPrime(15);


function isPrime(num) {
  if (num <= 1) {
      return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          return false;
      }
  }
  return true;
}

// Example usage:
console.log(isPrime(117));  // Output: true


function createAdder(x) {
   function inner(y) {
    return x + y;
  }return inner;
}

let addFive = createAdder(5);
console.log(addFive(10)) // Output: 15


var radius = [2,4,55,6,9]

var calculateArea = function(radius){
 var Output=[]
  for(i=0;i<radius.length;i++){
    Output.push(Math.PI*radius[i]*radius[i])
  }
  return Output;
}

console.log(calculateArea(radius));


// Set a single radius value
var calculateArea = function(radius) {
  return Math.PI * radius * radius;
}

var radius = 5; // Set a single radius value
console.log(calculateArea(radius)); // Output: The area of the circle with radius 5 is approximately 78.54


var calculateCircumfrence = function(radius){
  var outputCir=[];
  for(i=0;i<radius.length;i++){
    outputCir.push(2*Math.PI*radius[i]);
  }
  return outputCir;
}

console.log(calculateCircumfrence(radius));

const radius=[2,3,4,5,5,5,4,4,9];

function calculateCircumfrence(radius){
const result = [];
for(let i=0;i<radius.length;i++){
  result.push(2*Math.PI*radius[i]);
}
return result;
}
console.log(calculateCircumfrence(radius));



// find the diameter value          
const dia=[2,3,4,5,5,5,4,4,9];

function calculateDia(radius){
const result = [];
for(let i=0;i<radius.length;i++){
  result.push(2*radius[i]);
}
return result;
}
console.log(calculateDia(radius));


const radius = [3,4,58,54,32,9];

var calculateArea = function(radius){
  return Math.PI*radius*radius;
}

var calculateCircumfrence = function(radius){
  return 2*Math.PI*radius;
}

var calculateDia = function(radius){
  return Math.PI*radius;
}

function calculate(radius,logic){
var Output =[]
for(i=0;i<radius.length;i++){
  Output.push(logic(radius[i]))
}return Output;
}

console.log(calculate(radius,calculateCircumfrence));
console.log(calculate(radius,calculateDia));


function factorial(n){
  if(n===1)
  return 1;
else{
  var result = n*factorial(n-1);
  return result;}

}
console.log(factorial(8));


function print(i){
  if (i===1){
    return 1;
  }
  else{
   
    return print(i-1);
    
  
  } 
  
}
console.log(print(7));

function print(i) {
  if (i === 1) {
    console.log(i); // Output the value of 'i' when it reaches 1
  } else {
    console.log(i); // Output the current value of 'i'
    return print(i - 1); // Recursively call print with i-1
  }
}

print(7);
