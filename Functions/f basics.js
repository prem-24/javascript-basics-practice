// /*
// what is js function?
// A JavaScript function is a reusable block of code that
// performs a specific task or set of tasks when called.*/

// //Function
// /* we can reuse one function many time
// function names (parameter){  // () <- paranthasics names=function name like variable
//   console.log("object data");
// }
// names(arguments); */

// // 1.Normal Function Method
// // 2.Using Dot Notation Method and No parameter
// // 3.Using Input data Parameter Method and argument using dot.notation.
// // 4. Using Argument Method in call two value
// // 5.  Object Name Change 
// // 6.  Passing Object Name Like Parameter
// // 7.  Passing object and Using Symbol { }In argumnet
// // 8.  Default Value {} using in parameter
// // 9.  Using object name in argument and default name in parameter
// // 10.  rest parameter used when pass unlimited parameter


// //Method 1
// {

//     const people = {
//     name :"Prihtivi",
//     age : 26,
//     };
//     function myInputData(){
//      console.log(people);
//     }
//     myInputData();
    
    
//     //Method 2  (Dot Notation Method)
    
//     const people1 = {
//     name :"Guru",
//     age : 23,
//     };
    
//     function myInputName(){
//      console.log(people1.name);  //(people1.age)
//     }
//     myInputName();
    
    
    
//     //Method 3  (parameter)
    
//     const people2 = {
//     name :"Jasmine",
//     age : 22,
//     };
//     function myInput(name){    
//      console.log(name);   //name = people2.name 
//     }
//     myInput(people2.name);
    
//     //Method 4 (argument)
//     let boy1 = {
//       name :"john",
//       age : 26,
//     };
//     let boy2 = {
//       name : "Wick",
//       age : 26,
//     };
//     function myBoysData (name,age){
//       console.log(name);
//       console.log(age);
//     }
//     myBoysData(boy1.name,boy1.age);
//     myBoysData(boy2.name,boy1.age);
    
//     //Method 5 (object name change)
//     let girl = {
//       name :"angel",
//       age:20,
//     }
//     function inputInfo (name,age) {
//       console.log(name);
//       console.log(age);
//     }
//     inputInfo('Priya',24);
    
//     //Method 6 (passing object name like parameter)
//     let info = {
//       name : "raj",
//       age : 17
//     }
//     function inFormation(info){
//       console.log(info.name);
//     }
//     inFormation(info);
    
//     //Method 7 (passing object and Using Symbol { }In argumnet)
//     let forData = {
//        name:"Venu",
//        age : 29,
//     }
//     function forInfo (forData){
//       console.log(forData.name);
//       console.log(forData.age);
//     }
//     forInfo({name:"gopal", age:28});
    
//     //Method 8 (Default Value {} using in parameter)
//     let forDatas = {
//        name:"Venu",
//        age : 29,
//     }
//     function forInfos (forDatas = {name:"Default Name",age:15}){
//       console.log(forDatas.name);
//       console.log(forDatas.age);
//     }
//     forInfos();
    
//     //Method 9 (using object name in argument and default name in parameter)
//     let forDatass = {
//        name:"Venu",
//        age : 29,
//     }
//     function forInfoss (forDatass = {name:"Default Name",age:15}){
//       console.log(forDatas.name);
//       console.log(forDatas.age);
//     }
//     forInfoss(forDatass); //here fordatass value passed so print this output
    
//     //Method 10 (rest parameter used when pass unlimited parameter)
//     const work1 = {
//       name:"keerthi",
//       age:26,
//     }
//     const work2 = {
//       name:"aarthi",
//       age:26,
//     }
//     function workInfo (...arg){
//       console.log(arg)
//     }
//     workInfo(work1.name,work2.name,'sam',24); //data saved in array inside
    
//     //Method 11 Function Value Return 
//     function printPerson(firstName,lastName) {
//       const fullname =  firstName+' '+lastName;
//       return fullname;
//     }
//     let printName = printPerson("John","Cena");
//     console.log(printName);
    
//     //Method 12 number and string Return Condtion
//     function printPersons(firstName,lastName) {
//       const fullname =  firstName+' '+lastName; // firstName+lastName; output =3
//       return fullname;
//     }
//     let printNum = printPersons(1,2);
//     console.log(printNum);
    
//     //Method 13 Array Return Condtion
//     function printPeople(firstName,lastName) {
//       const fullname = [firstName+' '+lastName];
//       return fullname;
//     }
//     let printNumber = printPeople(4,8);
//     console.log(printNumber);
    
    
//     //Method 14 Object Return Condtion
//     function printData(firstName,lastName) {
//       const fullname = {firstName:firstName,lastName:lastName};
//       return fullname;
//     }
//     let printNumbers = printData("John","Wick");  // or john = 4 and Wick = 8
//     console.log(printNumbers);
    
    
    
//     //Method 15 only direct Return Condtion in object type
    
//     function printDatas(firstName,lastName) {
//       return fullname = {firstName:firstName,lastName:lastName};
//     }
//     let printNums = printDatas(5,5);  
//     console.log(printNums); // and this method also works (printNums.firstName) = 5
    
//     //Method 16 Return Condtion when key name and value names are equal
    
//     function printDataValue(firstName,lastName) {
//       return fullname = {firstName,lastName};
//     }
//     let printNumm = printDataValue("Hari",5);  
//     console.log(printNumm);
    
//     //Method 17 innerfunction RareUsage(innerfunction only acces in innerfunction place only)
//     function innerData(firstData,secondData) {
//        function joint (name1,name2){
//         const name = name1+' '+name2;
//         return name;
//        }
//        const fullData = joint(firstData,secondData);
//        return fullData;
//     }
//     let fullData = innerData("John","Cena");
//     console.log(fullData);
    
//     //Method 18  Annoymous Function
//     const fullDataName = function(firstData,secondData) {
//       return firstData +" "+ secondData;
//     }
//     let fullDataInput = fullDataName("Ajith","Kumar");
//     console.log(fullDataInput);
    
//     //Method 19  Arrow Function (=>)
//     const DataName = (firstData,secondData) => {
//       return firstData +" "+ secondData;
//     }
//     let DataInput = DataName("King","Maker");
//     console.log(DataInput);
    
    
//     //Method 20  Arrow Function (=>) when single line code 
//     const DataNames = (firstData,secondData) => firstData +" "+ secondData;
//     let DataInputs = DataNames("Happy","End");
//     console.log(DataInputs);
//     }
    
//     //Method 21 function Hoisting
//     //function declaration we can call anywhere like above and below its called hoisting
//     helpData();
//     function helpData(){
//      console.log("Print");
//     }
//     //function expression we cant call anywhere
//     const newDelay = function(){
//       console.log("Hello");
//     }
//     newDelay();
    
    
//     //Method 22 (call,bind,apply)
//     //call
//     const peoples1 = { name: 'Alice' };
//     const peoples2 = { name: 'Bob' };
    
//     function greet() {
//         console.log(`Hello, ${this.name}!`);
//     }
    
//     greet.call(peoples1); // Outputs: "Hello, Alice!"
    
    
//     //bind
//     const inputss = { name: 'Alice' };
    
//     function greet() {
//         console.log(`Hello, ${this.name}!`);
//     }
    
//     const greetPerson = greet.bind(inputss);
//     greetPerson(); // Outputs: "Hello, Alice!"
    
//     //apply
//     const informData = [2, 3, 4];
    
//     function addData(a, b, c) {
//         return a + b + c;
//     }
    
//     const sums = addData.apply(null, informData); // Equivalent to add(2, 3, 4)
//     console.log(sums); // Outputs: 9

// // const temperature = [3,5,6,7,"error",-5,-4,-6];
// const numberArray = [4, 7, 1, 9, 2, 5,90,0,-3,-20];
// // const maxValue = Math.max(...numbers);

// // console.log('The maximum value in the array is:', maxValue);

// const calMax = function(number){
//   let max = number[0];
//   for(i=0;i<=number.length;i++){
//     if(number[i]<max){
//       max=number[i]
//     }
//   }console.log(max)
// }
// calMax(numberArray);


// let value = Math.max(...numberArray);
// console.log(value);



// // console problem

const data1 = [17,21,23];

const data2 = [12,5,-5,0,4];


let printForecast = function(arr){
let string = "";
for(let i = 0;i < arr.length;i++){
  string+=`${arr[i]}°c in ${i+1}days ...`
}return string;
}

let result = printForecast(data2);
console.log("..."+result);
