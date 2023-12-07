// Functions examples

// function sum(a,b){
//     var result = a+b;
//     return result;

// }
// var sum1 = sum(2,5);

function square(number) {
    return number * number;
  }
  
  function cube(number) {
    var squared = square(number);
    return number * squared;
  }
  
  var result = cube(3);
  console.log(result)
  // Result: 27
  