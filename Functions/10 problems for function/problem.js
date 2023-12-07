// Assignment 1:
// Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.


function FindType(number){
    if(number===0){
      return "Zero";
    }
    else if(number<0){
      return "negative";
    }
    else{
      return "positive";
    }
  }
  
  let resulet=FindType(5);
  console.log(resulet);
  
  // Assignment 2:
  // Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N.
  
  function Factorial(number){
    let result=1;
    for(let i=1;i<=number;i++){
      result=result*i;
    }
    return result;
  }
  console.log(Factorial(5))
  
  // Assignment 3:
  // Write a JavaScript function that takes two numbers as parameters and returns the larger one.
  
  function larger(num1,num2){
    if(num1>num2){
      return num1;
    }else {
      return num2;
    }
  }
  console.log(larger(5,6));
  
  // Assignment 4:
  // Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or another sequence of characters that reads the same forward and backwards (ignoring spaces, punctuation, and capitalization).
  function palindrome(string){
    let reversed = string.split("").reverse().join("");
    if(string===reversed){
      return true;
    }else{
      return false;
    }
  }
  console.log(palindrome("madam"))
  console.log(palindrome("dove"))
  
  // Assignment 5:
  // Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
  
  function IsPrime(number){
    if(number<=1){
      return false;
    }else{
      for(let i=2;i<= Math.sqrt(number);i++){
        if (number%i===0){
          return false;
        };
      }return true;
    }
  
  }
  
  console.log(IsPrime(4));
  console.log(IsPrime(5));
  console.log(IsPrime(6));
  
  // Assignment 6:
  
  // Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.
  
  function calculator(num1,num2,operator){
    if(operator==="+"){
      return num1+num2;
    }
    else if(operator==="-"){
      return num1-num2;
    }
    else if(operator==="*"){
      return num1*num2;
    }
    else if(operator==="/"){
      return num1/num2;
  }
  }
    console.log(calculator(6,3,"+"));
  console.log(calculator(6,3,"-"));
  console.log(calculator(6,3,"*"));
  console.log(calculator(6,3,"/"));
  
  // Assignment 7:
  // Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string.
  
  function vowels(string){
    let count=0;
    for(let i=0;i<=string.length;i++){
      if(string[i]==="a"||string[i]==="e"||string[i]==="i"||string[i]==="o"||string[i]==="u"||string[i]==="s"){ 
        count++;
      }
    
  }return count;
  
  }
  console.log(vowels("hello world"));
  
  // Assignment 8:
  // Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.
  
  function perfect(number){
    let sum=0;
    for(let i=1;i<number;i++){
      if(number%i===0){
        sum=sum+i;
      }
    }
    if(sum===number){
      return true;
    }else{
      return false;
    }
  }
  console.log(perfect(6));
  console.log(perfect(5));
  
  // Assignment 9:
  // Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.
  
  function fibonacci(number){
    let n1=0;
    let n2=1;
    let next;
    for(let i=0;i<=number;i++){
      console.log(n1);
      next=n1+n2;
      n1=n2;
      n2=next;
    }
  }
  fibonacci(5);
  
  // Assignment 10:
  // Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.
  
  
  function multiplyTable(number){
    for(let i=1;i<=10;i++){
      console.log(i+"*"+number+"*"+i*number);
      
    }
  }
  multiplyTable(7)