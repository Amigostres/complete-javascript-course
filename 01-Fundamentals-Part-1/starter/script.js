// alert("Hello World");
// console.log("Jose");

/*
//remember that the variable only holds the value and not the datatype. The value holds the datatype
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

*/
//==================================================
//12 let, const, and var

//perfectly to "REASSIGNING" a variable with a let
let age = 30;
age = 31;

//the value of const cannot be changed
const birthYear = 1991;
//birthYear = 1990; // this will cause an error
//when using const you need to assign something to it
// const job;//this will cause an error

//var at first sight will pretty much work the same as let

var job = "programmer";
job = "teacher"; // var has no problem redeclaring
console.log(job);

//Challenge 2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}
