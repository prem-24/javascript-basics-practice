// Assignment 1:
// Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.

function FindNum(number){
    if(number<0) return "number is negative";
    else if(number===0) return "number is zero";
    else {return "number is positive"}
}
console.log(FindNum(8));
console.log(FindNum(-9));
console.log(FindNum(0));

// Assignment 2:
// Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N.

function factorial(number){
    if (number<0) return "non-integer values,";
    else if (number===0) return 1;
    let result = 1;
    for(let i=1;i<=number;i++){
      result = result*i;
    }return result;
}

console.log(factorial(5));
console.log(factorial(-5));
console.log(factorial(0));


// Assignment 3:
// Write a JavaScript function that takes two numbers as parameters and returns the larger one.

function largerNum(num1,num2){
    if(num1<num2) return num1+" is less than "+num2;
    else if(num1===num2) return "both are euqal"
    else return num1+" is greater than "+num2;
}

console.log(largerNum(0,4));
console.log(largerNum(0,0))
console.log(largerNum(-8,9))


// Assignment 4:
// Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

function palindrome(string){
    let reverse = ""
    reverse = string.split("").reverse().join("")
    if(reverse===string) return "This is a palindrome";
    else return "this is not a palindrome";
}

console.log(palindrome("mam"));
console.log(palindrome("appa"));
console.log(palindrome("Father"));

// // Assignment 5:
// Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

function PrimeNum(number){
    if (number<=1) return "not a prime number";
    else{
        for(let i=2;i<=Math.sqrt(number);i++){
            if(number%i===0) return "not a prime number";
           
        } return "this is a prime number";
    }
    
}

console.log(PrimeNum(6));
console.log(PrimeNum(111));
console.log(PrimeNum(3));

// Assignment 6:
// Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation

function calculator(num1,num2,operator){
    if("+"===operator){
      return num1+num2;
    }
    else if("-"===operator){
        return num1-num2;
      }
      else if("/"===operator){
        return num1/num2;
      }
      else if("*"===operator){
        return num1*num2;
      }
}
console.log(calculator(5,6,"+"));
console.log(calculator(5,6,"-"));
console.log(calculator(5,6,"/"));
console.log(calculator(5,6,"*"));

// Assignment 7:
// Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string

function vowels(string){
    let count=0;
    for(i=0;i<=string.length;i++){
        if ("a"===string[i]||"e"===string[i]||"i"===string[i]||"o"===string[i]||"u"===string[i]){
           count++
        }
    }return count+" words";
  
}
console.log(vowels("prem kumar"));



// Assignment 8:
// Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.

function perfectNum(number){
    let sum=0;
    for(let i=1;i<number;i++){
        if(number%i===0){
            sum+=i;
        }
    }
    if(sum===number){
        return "this is a perfect number"
    }
    else return "this is not a perfect number"
}

console.log(perfectNum(6));
console.log(perfectNum(7));
console.log(perfectNum(66));

// Assignment 9:
// Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.

function Fibonacci(number){
    result=[]
    for(let i=0;i<number;i++){
        if (i===0){
            result.push(0);
        }
        else if (i===1){
             result.push(1);
        }
        else  {
             result.push(result[i-1]+result[i-2]);
        }
    }return result;
}
console.log(Fibonacci(6));
console.log(Fibonacci(16))



// Assignment 10:
// Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.

function table(Table) {
    for (let i = 1; i <= 10; i++) {
        let multiple = i * Table;
        console.log(Table + " * " + i + " = " + multiple);
    }
}

table(7);
table(5);
table(6);